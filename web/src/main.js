import { state, onChange } from './store.js';
import { bridge } from './bridge.js';
import { icon, $, $$, closeTopModal } from './ui.js';
import { geo } from './geo.js';
import * as home from './screens/home.js';
import * as nav from './screens/nav.js';
import * as vehicle from './screens/vehicle.js';
import * as apps from './screens/apps.js';
import * as settings from './screens/settings.js';

const screens = { home, nav, vehicle, apps, settings };
let current = null;

export function go(name, opts) {
  if (!screens[name]) return;
  if (current === name && !opts) return;
  const prev = current;
  current = name;
  $$('.screen').forEach((s) => s.classList.toggle('active', s.id === `screen-${name}`));
  $$('.rail-btn[data-screen]').forEach((b) => b.classList.toggle('active', b.dataset.screen === name));
  if (prev === 'home' && name !== 'home') home.resetCockpit();
  if (prev && prev !== name) screens[prev].hide?.();
  screens[name].show?.(opts);
}
window.__go = go;

// ---- Barre latérale ----
const RAIL_ICONS = { home: 'House', nav: 'Navigation', music: 'Music', phone: 'Phone', vehicle: 'Truck', apps: 'LayoutGrid', settings: 'Settings' };
$$('.rail-btn').forEach((b) => {
  const key = b.dataset.screen || b.dataset.action;
  b.innerHTML = icon(RAIL_ICONS[key] || 'Circle', 28);
  b.addEventListener('click', () => {
    if (b.dataset.screen) go(b.dataset.screen);
    else if (b.dataset.action === 'music') bridge.openMusic(state.settings.musicPkg);
    else if (b.dataset.action === 'phone') bridge.openPhone(state.settings.phonePkg);
  });
});

function tickClock() {
  const d = new Date();
  $('#rail-time').textContent = d.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  home.tickClock?.(d);
}
setInterval(tickClock, 5000);

// ---- Thème ----
export function applyTheme() {
  const s = state.settings;
  document.documentElement.style.setProperty('--accent', s.accent);
  document.body.classList.toggle('glass', !!s.glass);
  document.body.classList.toggle('no-labels', !s.hotspotLabels);
  document.body.className = document.body.className.replace(/\bwp-\S+/g, '').trim();
  if (s.wallpaper && s.wallpaper !== 'sunset') document.body.classList.add(`wp-${s.wallpaper}`);
}
onChange(applyTheme);

// ---- Retour / bouton Home (appelé par Android) ----
window.__onBack = () => {
  if (closeTopModal()) return;
  if (current === 'home' && home.leaveCockpit()) return;
  if (current !== 'home') go('home');
};
window.__onHome = () => {
  while (closeTopModal()) { /* ferme toutes les fenêtres */ }
  go('home');
};
window.__onAppsChanged = () => apps.refresh();

// ---- Démarrage ----
Object.values(screens).forEach((s) => s.init?.());
applyTheme();
tickClock();
bridge.setFullscreen(state.settings.fullscreen);
geo.start();
go('home');
