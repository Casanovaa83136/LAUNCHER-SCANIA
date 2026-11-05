// État de l'application : sauvegardé dans le WebView (localStorage) ET côté Android.
import { bridge } from './bridge.js';

const KEY = 'scania-launcher-state-v1';

const today = () => new Date().toISOString().slice(0, 10);

let uid = Date.now();
export const newId = () => (uid++).toString(36);

// Catégories = les petits carrés posés sur le camion 3D.
export const CATEGORIES = {
  moteur: { label: 'Moteur', icon: 'Cog' },
  transmission: { label: 'Transmission', icon: 'Settings2' },
  freins: { label: 'Freins', icon: 'Disc3' },
  pneus: { label: 'Pneus', icon: 'CircleDot' },
  carburant: { label: 'Carburant', icon: 'Fuel' },
  sellette: { label: 'Sellette / Châssis', icon: 'Link' },
  cabine: { label: 'Cabine / Papiers', icon: 'FileText' },
};

function defaultMaintenance(km) {
  const d = today();
  const item = (name, category, everyKm, everyMonths, note = '') => ({
    id: newId(), name, category, everyKm, everyMonths, lastKm: km, lastDate: d, note,
  });
  return [
    item('Vidange huile moteur', 'moteur', 60000, 12, 'Huile 10W-40 LDF-4'),
    item('Filtre à huile', 'moteur', 60000, 12),
    item('Filtres à gasoil', 'moteur', 60000, 12),
    item('Filtre à air', 'moteur', 120000, 24),
    item('Liquide de refroidissement', 'moteur', 0, 48),
    item('Courroie accessoires', 'moteur', 240000, 0),
    item('Filtre AdBlue', 'carburant', 180000, 36),
    item('Huile boîte de vitesses', 'transmission', 270000, 36),
    item('Huile pont arrière', 'transmission', 270000, 36),
    item('Plaquettes de frein AV', 'freins', 150000, 0),
    item('Plaquettes de frein AR', 'freins', 150000, 0),
    item('Cartouche dessiccateur', 'freins', 0, 12),
    item('Graissage châssis', 'sellette', 15000, 1),
    item('Graissage sellette', 'sellette', 10000, 1),
    item('Contrôle technique', 'cabine', 0, 12),
    item('Chronotachygraphe', 'cabine', 0, 24),
    item('Filtre habitacle', 'cabine', 60000, 12),
  ];
}

export const AXLE_CONFIGS = {
  '4x2': [
    { id: 'AV', label: 'Essieu avant (directeur)', twin: false },
    { id: 'AR', label: 'Pont moteur', twin: true },
  ],
  '6x2': [
    { id: 'AV', label: 'Essieu avant (directeur)', twin: false },
    { id: 'AR', label: 'Pont moteur', twin: true },
    { id: 'SU', label: 'Essieu suiveur', twin: false },
  ],
  '6x4': [
    { id: 'AV', label: 'Essieu avant (directeur)', twin: false },
    { id: 'AR1', label: 'Pont moteur 1', twin: true },
    { id: 'AR2', label: 'Pont moteur 2', twin: true },
  ],
};

export function tirePositions(config) {
  const out = [];
  for (const axle of AXLE_CONFIGS[config] || AXLE_CONFIGS['4x2']) {
    const sides = axle.twin
      ? [['G-ext', 'Gauche ext.'], ['G-int', 'Gauche int.'], ['D-int', 'Droite int.'], ['D-ext', 'Droite ext.']]
      : [['G', 'Gauche'], ['D', 'Droite']];
    for (const [s, l] of sides) out.push({ pos: `${axle.id}-${s}`, axle: axle.id, label: `${axle.id} ${l}` });
  }
  return out;
}

function defaultState() {
  const km = 450000;
  return {
    version: 1,
    truck: {
      name: 'Mon Scania',
      plate: 'AB-123-CD',
      km,
      kmDate: today(),
      axles: '4x2',
      cabColor: '#e8ecf1',
      tankLiters: 700,
    },
    settings: {
      accent: '#3b82f6',
      fullscreen: false,
      autoRotate: true,
      quality: 'auto',
      googleMapsKey: '',
      mapStyle: 'dark',
      musicPkg: '',
      phonePkg: '',
      glass: false,
      hotspotLabels: true,
      wallpaper: 'sunset',
    },
    maintenance: defaultMaintenance(km),
    history: [], // { id, itemId, name, km, date, cost, note }
    tires: {
      defaultLifeKm: 150000,
      minDepth: 3,
      list: {}, // pos -> { brand, model, size, mountKm, mountDate, depth, lifeKm }
    },
    fuel: [], // { id, date, km, liters, price, full, adblue, station }
    favorites: [], // noms de paquets Android
    places: [
      { id: newId(), name: 'Maison', address: '' },
      { id: newId(), name: 'Dépôt', address: '' },
    ],
  };
}

function merge(base, saved) {
  if (!saved || typeof saved !== 'object') return base;
  const out = { ...base, ...saved };
  for (const k of ['truck', 'settings', 'tires']) out[k] = { ...base[k], ...(saved[k] || {}) };
  return out;
}

function load() {
  let raw = null;
  try { raw = bridge.loadState(); } catch (e) { /* navigateur */ }
  if (!raw) { try { raw = localStorage.getItem(KEY); } catch (e) { /* ignore */ } }
  try { return merge(defaultState(), raw ? JSON.parse(raw) : null); } catch (e) { return defaultState(); }
}

export const state = load();

const listeners = new Set();
export const onChange = (fn) => { listeners.add(fn); return () => listeners.delete(fn); };

let saveTimer = null;
export function save() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    const json = JSON.stringify(state);
    try { localStorage.setItem(KEY, json); } catch (e) { /* ignore */ }
    try { bridge.saveState(json); } catch (e) { /* ignore */ }
  }, 150);
  listeners.forEach((fn) => { try { fn(); } catch (e) { console.error(e); } });
}

export function replaceState(obj) {
  const fresh = merge(defaultState(), obj);
  Object.keys(state).forEach((k) => delete state[k]);
  Object.assign(state, fresh);
  save();
}

export function resetState() { replaceState(defaultState()); }

// Le compteur ne recule jamais.
export function updateKm(km) {
  km = Math.round(Number(km));
  if (!Number.isFinite(km) || km <= 0) return false;
  if (km < state.truck.km) return false;
  state.truck.km = km;
  state.truck.kmDate = today();
  return true;
}

// ------------ Calculs entretien -------------
const MONTH_MS = 30.44 * 24 * 3600 * 1000;

export function itemStatus(item, km = state.truck.km) {
  let ratio = 0; // 0 = neuf, 1 = échéance atteinte
  let remainingKm = null;
  let remainingDays = null;
  if (item.everyKm > 0) {
    const used = km - (item.lastKm || 0);
    remainingKm = item.everyKm - used;
    ratio = Math.max(ratio, used / item.everyKm);
  }
  if (item.everyMonths > 0 && item.lastDate) {
    const due = new Date(item.lastDate).getTime() + item.everyMonths * MONTH_MS;
    remainingDays = Math.round((due - Date.now()) / 86400000);
    const used = (Date.now() - new Date(item.lastDate).getTime()) / (item.everyMonths * MONTH_MS);
    ratio = Math.max(ratio, used);
  }
  let level = 'ok';
  if (ratio >= 1) level = 'late';
  else if (ratio >= 0.85 || (remainingKm !== null && remainingKm < 5000) || (remainingDays !== null && remainingDays < 30)) level = 'soon';
  return { ratio: Math.max(0, ratio), remainingKm, remainingDays, level };
}

const LEVEL_RANK = { ok: 0, soon: 1, late: 2 };
export function worstLevel(levels) {
  return levels.reduce((a, b) => (LEVEL_RANK[b] > LEVEL_RANK[a] ? b : a), 'ok');
}

export function tireStatus(t, km = state.truck.km) {
  if (!t) return { level: 'none', ratio: 0, remainingKm: null };
  const life = Number(t.lifeKm) || state.tires.defaultLifeKm;
  const used = km - (Number(t.mountKm) || km);
  const remainingKm = life - used;
  let ratio = used / life;
  let level = ratio >= 1 ? 'late' : ratio >= 0.85 ? 'soon' : 'ok';
  if (t.depth !== '' && t.depth != null) {
    const d = Number(t.depth);
    if (d <= state.tires.minDepth) level = 'late';
    else if (d <= state.tires.minDepth + 2 && level === 'ok') level = 'soon';
  }
  return { level, ratio: Math.max(0, ratio), remainingKm };
}

export function categoryLevel(cat) {
  if (cat === 'pneus') {
    const levels = tirePositions(state.truck.axles)
      .map((p) => tireStatus(state.tires.list[p.pos]).level)
      .filter((l) => l !== 'none');
    return worstLevel(levels);
  }
  return worstLevel(state.maintenance.filter((i) => i.category === cat).map((i) => itemStatus(i).level));
}

export function axleLevel(axleIds) {
  return worstLevel(
    tirePositions(state.truck.axles)
      .filter((p) => axleIds.includes(p.axle))
      .map((p) => tireStatus(state.tires.list[p.pos]).level)
      .filter((l) => l !== 'none'),
  );
}

export function markDone(item, km = state.truck.km, date = today(), cost = '', note = '') {
  item.lastKm = Number(km);
  item.lastDate = date;
  state.history.unshift({ id: newId(), itemId: item.id, name: item.name, km: Number(km), date, cost, note });
}

// ------------ Calculs carburant -------------
// Méthode "plein à plein" : consommation = litres ajoutés depuis le dernier plein complet / km parcourus.
export function fuelStats() {
  const fills = [...state.fuel].sort((a, b) => a.km - b.km || a.date.localeCompare(b.date));
  const segments = [];
  let lastFull = null;
  let acc = 0;
  for (const f of fills) {
    if (lastFull) acc += Number(f.liters) || 0;
    if (f.full) {
      if (lastFull && f.km > lastFull.km) {
        segments.push({ id: f.id, date: f.date, km: f.km, dist: f.km - lastFull.km, liters: acc, l100: (acc / (f.km - lastFull.km)) * 100 });
      }
      lastFull = f;
      acc = 0;
    }
  }
  const totalLiters = fills.reduce((s, f) => s + (Number(f.liters) || 0), 0);
  const totalCost = fills.reduce((s, f) => s + (Number(f.liters) || 0) * (Number(f.price) || 0), 0);
  const totalAdblue = fills.reduce((s, f) => s + (Number(f.adblue) || 0), 0);
  const segDist = segments.reduce((s, g) => s + g.dist, 0);
  const segLit = segments.reduce((s, g) => s + g.liters, 0);
  const avg = segDist > 0 ? (segLit / segDist) * 100 : null;
  const dist = fills.length > 1 ? fills[fills.length - 1].km - fills[0].km : 0;
  const priced = fills.filter((f) => Number(f.price) > 0);
  const lastPrice = priced.length ? Number(priced[priced.length - 1].price) : null;
  return {
    segments,
    avg,
    last: segments.length ? segments[segments.length - 1].l100 : null,
    totalLiters,
    totalCost,
    totalAdblue,
    dist,
    costPerKm: avg !== null && lastPrice ? (avg / 100) * lastPrice : null,
    adbluePct: totalLiters > 0 ? (totalAdblue / totalLiters) * 100 : null,
    lastPrice,
  };
}

export { today };
