// Position GPS partagée entre les écrans (vitesse, carte, météo).
const listeners = new Set();

export const geo = {
  last: null, // { lat, lng, speedKmh, heading, accuracy, time }
  watchId: null,
  on(fn) { listeners.add(fn); if (this.last) fn(this.last); return () => listeners.delete(fn); },
  start() {
    if (!('geolocation' in navigator) || this.watchId !== null) return;
    this.watchId = navigator.geolocation.watchPosition(
      (p) => {
        const prev = this.last;
        let speed = p.coords.speed;
        // Certains autoradios ne donnent pas la vitesse : on la calcule
        if ((speed == null || Number.isNaN(speed)) && prev) {
          const dt = (p.timestamp - prev.time) / 1000;
          if (dt > 0.5) speed = distM(prev, { lat: p.coords.latitude, lng: p.coords.longitude }) / dt;
        }
        this.last = {
          lat: p.coords.latitude,
          lng: p.coords.longitude,
          speedKmh: speed != null && !Number.isNaN(speed) ? Math.max(0, speed * 3.6) : 0,
          heading: p.coords.heading,
          accuracy: p.coords.accuracy,
          time: p.timestamp,
        };
        listeners.forEach((fn) => fn(this.last));
      },
      () => { /* pas de GPS : on ignore */ },
      { enableHighAccuracy: true, maximumAge: 1000, timeout: 20000 },
    );
  },
};

export function distM(a, b) {
  const R = 6371000;
  const toR = (x) => (x * Math.PI) / 180;
  const dLat = toR(b.lat - a.lat);
  const dLng = toR(b.lng - a.lng);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(toR(a.lat)) * Math.cos(toR(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}
