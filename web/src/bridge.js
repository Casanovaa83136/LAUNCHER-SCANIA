// Pont vers le code Android (objet "Android" injecté par MainActivity).
// Dans un navigateur classique (développement), on simule.
const A = typeof window !== 'undefined' ? window.Android : undefined;
export const isNative = !!A;

const MOCK_APPS = [
  ['com.google.android.apps.maps', 'Maps'], ['com.waze', 'Waze'], ['com.spotify.music', 'Spotify'],
  ['com.google.android.youtube', 'YouTube'], ['com.android.chrome', 'Chrome'], ['com.whatsapp', 'WhatsApp'],
  ['com.android.settings', 'Paramètres'], ['com.deezer.android', 'Deezer'], ['fr.radiofrance', 'Radio France'],
  ['com.android.bluetooth', 'Bluetooth'], ['com.android.camera', 'Caméra'], ['com.android.music', 'Musique'],
  ['com.google.android.gm', 'Gmail'], ['com.android.vending', 'Play Store'], ['com.sygic.truck', 'Sygic Truck'],
  ['com.android.files', 'Fichiers'],
].map(([pkg, label]) => ({ pkg, label }));

function call(name, ...args) {
  if (A && typeof A[name] === 'function') return A[name](...args);
  return undefined;
}

export const bridge = {
  getApps() {
    const r = call('getApps');
    if (r === undefined) return MOCK_APPS;
    try { return JSON.parse(r); } catch (e) { return []; }
  },
  iconUrl(pkg) {
    return isNative ? `/appicon/${encodeURIComponent(pkg)}.png` : '';
  },
  launchApp(pkg) { if (call('launchApp', pkg) === undefined) console.log('[mock] launch', pkg); },
  appInfo(pkg) { call('appInfo', pkg); },
  // app = 'google' | 'waze'
  navigate(query, app = 'google') {
    if (call('navigate', query, app) === undefined) window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`);
  },
  openMap(app = 'google') { if (call('openMap', app) === undefined) console.log('[mock] openMap', app); },
  mediaKey(code) { call('mediaKey', code); },
  openMusic(pkg) { if (call('openMusic', pkg || '') === undefined) console.log('[mock] music'); },
  openPhone(pkg) { if (call('openPhone', pkg || '') === undefined) console.log('[mock] phone'); },
  openSettings(which) { call('openSettings', which); },
  setFullscreen(on) { call('setFullscreen', !!on); },
  saveState(json) { call('saveState', json); },
  loadState() { const r = call('loadState'); return r || null; },
  exportBackup(json) {
    const r = call('exportBackup', json);
    if (r === undefined) {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([json], { type: 'application/json' }));
      a.download = 'launcher-scania-sauvegarde.json';
      a.click();
      return 'Téléchargement lancé';
    }
    return r;
  },
  appVersion() { return call('appVersion') || 'web'; },
};

// Codes KeyEvent Android
export const KEY = { PLAY_PAUSE: 85, NEXT: 87, PREVIOUS: 88 };
