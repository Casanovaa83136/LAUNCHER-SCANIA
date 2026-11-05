// Écran Réglages.
import { state, save, onChange, replaceState, resetState, AXLE_CONFIGS } from '../store.js';
import { bridge } from '../bridge.js';
import { icon, $, esc, openModal, toast, confirmBox, el } from '../ui.js';
import * as nav from './nav.js';
import { getApps } from './apps.js';

const CAB_COLORS = ['#e8ecf1', '#111318', '#b91c1c', '#1d4ed8', '#0f766e', '#f59e0b', '#6b7280', '#7c3aed', '#065f46', '#ea580c'];
const ACCENTS = ['#3b82f6', '#22d3ee', '#a855f7', '#ec4899', '#ef4444', '#f97316', '#eab308', '#22c55e'];
const WALLPAPERS = [['sunset', 'Coucher de soleil'], ['night', 'Nuit'], ['ocean', 'Océan'], ['red', 'Rouge sombre']];

let root;

export function init() {
  root = $('#screen-settings');
  onChange(() => { if (root.classList.contains('active')) render(); });
}
export function show() { render(); }

const sw = (key, on) => `<button class="switch ${on ? 'on' : ''}" data-switch="${key}" aria-label="${key}"></button>`;

function appName(pkg, fallback) {
  if (!pkg) return fallback;
  const a = getApps().find((x) => x.pkg === pkg);
  return a ? a.label : pkg;
}

function render() {
  const t = state.truck;
  const s = state.settings;
  root.innerHTML = `
    <div class="card settings-card">
      <div class="card-title"><h2>Réglages</h2></div>
      <div class="settings-scroll">
        <section>
          <h3>${icon('Truck', 20)}Mon camion</h3>
          <label class="field"><span>Nom affiché</span><input data-truck="name" value="${esc(t.name)}" /></label>
          <label class="field half" style="width:100%"><span>Immatriculation</span><input data-truck="plate" value="${esc(t.plate)}" /></label>
          <label class="field"><span>Configuration des essieux</span><select data-truck="axles">${Object.keys(AXLE_CONFIGS).map((k) => `<option ${k === t.axles ? 'selected' : ''}>${k}</option>`).join('')}</select></label>
          <div class="field"><span>Couleur de la cabine (3D)</span><div class="swatches">${CAB_COLORS.map((c) => `<button class="swatch ${c === t.cabColor ? 'on' : ''}" style="background:${c}" data-cab="${c}"></button>`).join('')}<input type="color" value="${esc(t.cabColor)}" data-cabpick style="width:2.4rem;height:2.4rem;border:0;background:none;padding:0" /></div></div>
        </section>
        <section>
          <h3>${icon('Sun', 20)}Apparence</h3>
          <div class="field"><span>Couleur d'accent</span><div class="swatches">${ACCENTS.map((c) => `<button class="swatch ${c === s.accent ? 'on' : ''}" style="background:${c}" data-accent="${c}"></button>`).join('')}</div></div>
          <label class="field"><span>Fond d'écran</span><select data-setting="wallpaper">${WALLPAPERS.map(([k, l]) => `<option value="${k}" ${k === s.wallpaper ? 'selected' : ''}>${l}</option>`).join('')}</select></label>
          <div class="line"><span>Modèle 3D réaliste du Scania (redémarrage)</span>${sw('realModel', s.realModel)}</div>
          <div class="line"><span>Rotation auto du camion</span>${sw('autoRotate', s.autoRotate)}</div>
          <div class="line"><span>Noms sous les carrés</span>${sw('hotspotLabels', s.hotspotLabels)}</div>
          <div class="line"><span>Effet verre flouté (plus gourmand)</span>${sw('glass', s.glass)}</div>
          <div class="line"><span>Plein écran (cacher la barre Android)</span>${sw('fullscreen', s.fullscreen)}</div>
          <label class="field"><span>Qualité 3D (redémarrage du launcher) — « Économie » utilise le camion simplifié</span><select data-setting="quality"><option value="low" ${s.quality === 'low' ? 'selected' : ''}>Économie</option><option value="auto" ${s.quality === 'auto' ? 'selected' : ''}>Normale</option><option value="high" ${s.quality === 'high' ? 'selected' : ''}>Haute</option></select></label>
        </section>
        <section>
          <h3>${icon('Map', 20)}Navigation</h3>
          <label class="field"><span>Clé API Google Maps (facultatif)</span><input data-setting="googleMapsKey" value="${esc(s.googleMapsKey)}" placeholder="AIza…" />
          <small>Sans clé : carte libre (OpenStreetMap) + boutons pour lancer Google Maps / Waze. Avec une clé « Maps JavaScript API » : vraie carte Google avec trafic directement dans l'écran.</small></label>
          <div class="line"><span>Application musique</span><button class="btn small" data-pick="musicPkg">${esc(appName(s.musicPkg, 'Automatique'))}</button></div>
          <div class="line"><span>Application téléphone</span><button class="btn small" data-pick="phonePkg">${esc(appName(s.phonePkg, 'Automatique'))}</button></div>
        </section>
        <section>
          <h3>${icon('Smartphone', 20)}Système</h3>
          <div class="line"><span>Paramètres Android</span><button class="btn small" data-sys="android">${icon('Settings', 18)}Ouvrir</button></div>
          <div class="line"><span>Wi-Fi</span><button class="btn small" data-sys="wifi">${icon('Wifi', 18)}Ouvrir</button></div>
          <div class="line"><span>Bluetooth</span><button class="btn small" data-sys="bluetooth">${icon('Bluetooth', 18)}Ouvrir</button></div>
          <div class="line"><span>Launcher par défaut</span><button class="btn small" data-sys="home">${icon('House', 18)}Choisir</button></div>
        </section>
        <section>
          <h3>${icon('Download', 20)}Sauvegarde</h3>
          <p class="muted" style="font-size:.82rem">Les données sont enregistrées automatiquement sur l'autoradio. Pensez à exporter une copie de temps en temps.</p>
          <div class="line"><span>Exporter (dossier Téléchargements)</span><button class="btn small" id="s-export">${icon('Download', 18)}Exporter</button></div>
          <div class="line"><span>Importer une sauvegarde</span><label class="btn small">${icon('Upload', 18)}Importer<input type="file" accept="application/json,.json" id="s-import" hidden /></label></div>
          <div class="line"><span>Tout réinitialiser</span><button class="btn small danger" id="s-reset">${icon('Trash2', 18)}Réinitialiser</button></div>
        </section>
        <section>
          <h3>${icon('Info', 20)}À propos</h3>
          <p class="muted" style="font-size:.85rem">Launcher Scania — version ${esc(bridge.appVersion())}. Données saisies à la main (pas de liaison CAN). Les intervalles d'entretien proposés sont indicatifs.</p>
        </section>
      </div>
    </div>`;

  root.querySelectorAll('[data-truck]').forEach((i) => {
    i.onchange = () => { state.truck[i.dataset.truck] = i.value; save(); };
  });
  root.querySelectorAll('[data-setting]').forEach((i) => {
    i.onchange = () => {
      state.settings[i.dataset.setting] = i.value.trim();
      save();
      if (i.dataset.setting === 'googleMapsKey') { nav.reset(); toast('Carte rechargée à la prochaine ouverture'); }
    };
  });
  root.querySelectorAll('[data-switch]').forEach((b) => {
    b.onclick = () => {
      const k = b.dataset.switch;
      state.settings[k] = !state.settings[k];
      if (k === 'fullscreen') bridge.setFullscreen(state.settings[k]);
      save();
    };
  });
  root.querySelectorAll('[data-cab]').forEach((b) => { b.onclick = () => { state.truck.cabColor = b.dataset.cab; save(); }; });
  const pick = $('[data-cabpick]', root);
  pick.onchange = () => { state.truck.cabColor = pick.value; save(); };
  root.querySelectorAll('[data-accent]').forEach((b) => { b.onclick = () => { state.settings.accent = b.dataset.accent; save(); }; });
  root.querySelectorAll('[data-sys]').forEach((b) => { b.onclick = () => bridge.openSettings(b.dataset.sys); });
  root.querySelectorAll('[data-pick]').forEach((b) => { b.onclick = () => pickApp(b.dataset.pick); });

  $('#s-export', root).onclick = () => {
    const r = bridge.exportBackup(JSON.stringify(state, null, 2));
    toast(r || 'Sauvegarde exportée', 'ok');
  };
  $('#s-import', root).onchange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const obj = JSON.parse(reader.result);
        if (!obj.truck || !obj.maintenance) throw new Error('format');
        if (!(await confirmBox('Importer', 'Remplacer toutes les données actuelles par cette sauvegarde ?', 'Importer'))) return;
        replaceState(obj);
        toast('Sauvegarde importée', 'ok');
      } catch (err) { toast('Fichier de sauvegarde invalide', 'err'); }
    };
    reader.readAsText(file);
  };
  $('#s-reset', root).onclick = async () => {
    if (await confirmBox('Tout réinitialiser', 'Effacer kilométrage, entretiens, pneus, pleins et favoris ?', 'Tout effacer')) { resetState(); toast('Réinitialisé'); }
  };
}

function pickApp(key) {
  const list = el('<div class="app-grid"></div>');
  const auto = el(`<button class="app"><div class="ph">${icon('Sparkles')}</div><span>Automatique</span></button>`);
  auto.onclick = () => { state.settings[key] = ''; save(); m.close(); };
  list.appendChild(auto);
  for (const a of getApps()) {
    const src = bridge.iconUrl(a.pkg);
    const b = el(`<button class="app">${src ? `<img src="${src}" alt=""/>` : `<div class="ph">${esc(a.label[0])}</div>`}<span>${esc(a.label)}</span></button>`);
    b.onclick = () => { state.settings[key] = a.pkg; save(); m.close(); };
    list.appendChild(b);
  }
  const m = openModal({ title: key === 'musicPkg' ? 'Application musique' : 'Application téléphone', body: list, wide: true });
}
