// Écran Navigation : carte intégrée (Google Maps si clé API, sinon carte libre) + lancement Google Maps / Waze.
import L from 'leaflet';
import { state, save, newId, onChange } from '../store.js';
import { bridge } from '../bridge.js';
import { icon, $, el, esc, openModal, formHtml, readForm, toast, onLongPress } from '../ui.js';
import { geo } from '../geo.js';

const LAYERS = {
  dark: { url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', attr: '© OpenStreetMap © CARTO', sub: 'abcd' },
  plan: { url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', attr: '© OpenStreetMap © CARTO', sub: 'abcd' },
  sat: { url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', attr: '© Esri', sub: '' },
};
const ORDER = ['dark', 'plan', 'sat'];

let root;
let map = null; // Leaflet
let gmap = null; // Google
let me = null;
let follow = true;
let engine = null;

export function init() {
  root = $('#screen-nav');
  root.innerHTML = `
    <div class="card nav-card">
      <div class="map" id="n-map"></div>
      <div class="nav-overlay nav-top">
        <form class="nav-search" id="n-form">
          ${icon('Search', 22, 'muted')}
          <input id="n-q" placeholder="Où allez-vous ? (adresse, ville, entreprise…)" autocomplete="off" />
          <button type="submit">${icon('Navigation', 18)}Go</button>
        </form>
      </div>
      <div class="speed-badge"><div><b id="n-speed">0</b><small>km/h</small></div></div>
      <div class="nav-places" id="n-places"></div>
      <div class="nav-right">
        <button class="fab" id="n-layer" aria-label="Fond de carte">${icon('Layers')}</button>
        <button class="fab on" id="n-follow" aria-label="Me suivre">${icon('LocateFixed')}</button>
        <button class="fab gm" id="n-gm" aria-label="Ouvrir Google Maps">${icon('Map')}</button>
        <button class="fab wz" id="n-wz" aria-label="Ouvrir Waze">${icon('Navigation')}</button>
      </div>
    </div>`;

  $('#n-form', root).onsubmit = (e) => {
    e.preventDefault();
    const q = $('#n-q', root).value.trim();
    if (!q) return;
    $('#n-q', root).blur();
    chooseApp(q);
  };
  $('#n-gm', root).onclick = () => bridge.openMap('google');
  $('#n-wz', root).onclick = () => bridge.openMap('waze');
  $('#n-follow', root).onclick = () => { setFollow(true); if (geo.last) center(geo.last, true); };
  $('#n-layer', root).onclick = cycleLayer;

  geo.on((p) => {
    $('#n-speed', root).textContent = Math.round(p.speedKmh);
    updateMe(p);
  });
  onChange(renderPlaces);
  renderPlaces();
}

function chooseApp(q) {
  const m = openModal({
    title: 'Itinéraire',
    body: `<p class="muted">Destination : <b style="color:var(--text)">${esc(q)}</b></p>`,
    actions: [
      { label: 'Waze', icon: 'Navigation', onClick: () => bridge.navigate(q, 'waze') },
      { label: 'Google Maps', kind: 'primary', icon: 'Map', onClick: () => bridge.navigate(q, 'google') },
    ],
  });
  return m;
}

function renderPlaces() {
  const box = $('#n-places', root);
  box.innerHTML = '';
  for (const p of state.places) {
    const b = el(`<button class="pill">${icon(p.name.toLowerCase().includes('maison') ? 'House' : 'MapPin', 18)}${esc(p.name)}</button>`);
    b.onclick = () => (p.address ? chooseApp(p.address) : editPlace(p));
    onLongPress(b, () => editPlace(p));
    box.appendChild(b);
  }
  const add = el(`<button class="pill">${icon('Plus', 18)}</button>`);
  add.onclick = () => editPlace(null);
  box.appendChild(add);
}

function editPlace(p) {
  const fields = [
    { key: 'name', label: 'Nom', type: 'text', value: p?.name || '' },
    { key: 'address', label: 'Adresse', type: 'text', value: p?.address || '', placeholder: 'ex : 12 rue du Port, 76600 Le Havre' },
  ];
  openModal({
    title: p ? 'Modifier la destination' : 'Nouvelle destination',
    body: `${formHtml(fields)}<p class="muted" style="margin-top:.6rem;font-size:.8rem">Astuce : appui long sur une destination pour la modifier.</p>`,
    actions: [
      ...(p ? [{ label: 'Supprimer', kind: 'danger', icon: 'Trash2', onClick: () => { state.places = state.places.filter((x) => x !== p); save(); } }] : []),
      { label: 'Annuler' },
      {
        label: 'Enregistrer', kind: 'primary', icon: 'Check',
        onClick: (b) => {
          const v = readForm(b, fields);
          if (!v.name) { toast('Donne un nom', 'err'); return false; }
          if (p) Object.assign(p, v); else state.places.push({ id: newId(), ...v });
          save();
          return true;
        },
      },
    ],
  });
}

function setFollow(on) {
  follow = on;
  $('#n-follow', root).classList.toggle('on', on);
}

function center(p, force) {
  if (!follow && !force) return;
  if (gmap) gmap.panTo({ lat: p.lat, lng: p.lng });
  else if (map) map.setView([p.lat, p.lng], force ? Math.max(map.getZoom(), 15) : map.getZoom(), { animate: true });
}

function updateMe(p) {
  if (gmap && window.google) {
    if (!me) me = new google.maps.Marker({ map: gmap, position: p, icon: { path: google.maps.SymbolPath.CIRCLE, scale: 9, fillColor: '#3b82f6', fillOpacity: 1, strokeColor: '#fff', strokeWeight: 3 } });
    else me.setPosition({ lat: p.lat, lng: p.lng });
  } else if (map) {
    if (!me) me = L.marker([p.lat, p.lng], { icon: L.divIcon({ className: '', html: '<div class="me-marker"></div>', iconSize: [22, 22], iconAnchor: [11, 11] }) }).addTo(map);
    else me.setLatLng([p.lat, p.lng]);
  }
  center(p, false);
}

// ---------- Carte libre (Leaflet) ----------
let tile = null;
function initLeaflet() {
  engine = 'leaflet';
  map = L.map($('#n-map', root), { zoomControl: false, attributionControl: true }).setView([46.6, 2.4], 6);
  setLayer(state.settings.mapStyle || 'dark');
  map.on('dragstart', () => setFollow(false));
  if (geo.last) { updateMe(geo.last); center(geo.last, true); }
}
function setLayer(name) {
  const l = LAYERS[name] || LAYERS.dark;
  if (tile) map.removeLayer(tile);
  tile = L.tileLayer(l.url, { attribution: l.attr, subdomains: l.sub || 'abc', maxZoom: 19, detectRetina: false, updateWhenIdle: true, keepBuffer: 1 }).addTo(map);
}
function cycleLayer() {
  const next = ORDER[(ORDER.indexOf(state.settings.mapStyle) + 1) % ORDER.length];
  state.settings.mapStyle = next;
  save();
  if (gmap) gmap.setMapTypeId(next === 'sat' ? 'hybrid' : 'roadmap');
  if (gmap && next !== 'sat') gmap.setOptions({ styles: next === 'dark' ? GM_DARK : [] });
  if (map) setLayer(next);
  toast(next === 'dark' ? 'Carte sombre' : next === 'plan' ? 'Plan' : 'Satellite');
}

// ---------- Google Maps (si clé API dans les réglages) ----------
const GM_DARK = [
  { elementType: 'geometry', stylers: [{ color: '#1d2433' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#9aa6bd' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#1d2433' }] },
  { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#2f3a52' }] },
  { featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#4a5a7d' }] },
  { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#0e1626' }] },
  { featureType: 'poi', stylers: [{ visibility: 'off' }] },
];
function initGoogle(key) {
  engine = 'google';
  window.__gmReady = () => {
    const style = state.settings.mapStyle;
    gmap = new google.maps.Map($('#n-map', root), {
      center: geo.last ? { lat: geo.last.lat, lng: geo.last.lng } : { lat: 46.6, lng: 2.4 },
      zoom: geo.last ? 15 : 6,
      disableDefaultUI: true,
      mapTypeId: style === 'sat' ? 'hybrid' : 'roadmap',
      styles: style === 'dark' ? GM_DARK : [],
      gestureHandling: 'greedy',
    });
    new google.maps.TrafficLayer().setMap(gmap);
    gmap.addListener('dragstart', () => setFollow(false));
    if (geo.last) updateMe(geo.last);
  };
  window.gm_authFailure = () => {
    toast('Clé Google Maps refusée — carte libre utilisée', 'err');
    gmap = null; me = null;
    $('#n-map', root).innerHTML = '';
    initLeaflet();
  };
  const s = document.createElement('script');
  s.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(key)}&callback=__gmReady&language=fr&region=FR`;
  s.async = true;
  s.onerror = () => { initLeaflet(); };
  document.head.appendChild(s);
}

export function show() {
  if (!engine) {
    if (state.settings.googleMapsKey) initGoogle(state.settings.googleMapsKey);
    else initLeaflet();
  }
  if (map) setTimeout(() => map.invalidateSize(), 250);
}

// Appelé depuis les réglages quand la clé change
export function reset() {
  if (map) { map.remove(); map = null; }
  gmap = null; me = null; engine = null; tile = null;
  $('#n-map', root).innerHTML = '';
  $('#n-map', root).className = 'map';
}
