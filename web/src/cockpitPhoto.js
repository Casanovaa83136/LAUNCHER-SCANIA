// Vue cockpit plein écran : photo large de l'intérieur + panneau Conso / Entretien à droite.
// Photo par défaut : planche de bord Scania Next Gen (Scania, CC BY-SA 4.0, Wikimedia Commons).
// L'utilisateur peut la remplacer par une photo de SA cabine (stockée sur l'appareil, IndexedDB).
import { state, fuelStats, itemStatus, CATEGORIES } from './store.js';
import { geo } from './geo.js';
import { icon, fmtNum, fmtKm, fmtEur, fmtDate, remainingText, esc, LEVEL_LABEL } from './ui.js';

const DEFAULT = { url: 'models/cockpit.jpg', w: 960, h: 640 };
// Repères mesurés sur la photo par défaut (pixels) pour incruster les données dans le vrai compteur
const SPOTS = {
  speed: { cx: 199, cy: 122, r: 23 },
  lcd: { x: 253, y: 100, w: 60, h: 50 },
  clock: { cx: 367, cy: 122, r: 23 },
};

let photo = { ...DEFAULT, custom: false };

// ---------- Stockage de la photo perso ----------
function db() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open('launcher-scania', 1);
    req.onupgradeneeded = () => req.result.createObjectStore('files');
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}
async function idb(mode, fn) {
  const d = await db();
  return new Promise((resolve, reject) => {
    const tx = d.transaction('files', mode);
    const r = fn(tx.objectStore('files'));
    tx.oncomplete = () => resolve(r && r.result);
    tx.onerror = () => reject(tx.error);
  });
}

export async function loadCustomPhoto() {
  try {
    const blob = await idb('readonly', (s) => s.get('cockpit'));
    if (blob) await usePhotoBlob(blob);
  } catch (e) { /* pas de photo perso */ }
}

async function usePhotoBlob(blob) {
  const url = URL.createObjectURL(blob);
  const img = await new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = url; });
  photo = { url, w: img.naturalWidth, h: img.naturalHeight, custom: true };
  document.querySelectorAll('.cp-photo img').forEach((i) => { i.src = url; });
  document.querySelectorAll('.cp-photo').forEach((p) => p.classList.add('custom'));
}

// Réduit la photo (les photos de téléphone font 12 Mpx) puis l'enregistre
export async function setCustomPhoto(file) {
  const src = URL.createObjectURL(file);
  const img = await new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = src; });
  const max = 2000;
  const k = Math.min(1, max / Math.max(img.naturalWidth, img.naturalHeight));
  const c = document.createElement('canvas');
  c.width = Math.round(img.naturalWidth * k);
  c.height = Math.round(img.naturalHeight * k);
  c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
  URL.revokeObjectURL(src);
  const blob = await new Promise((res) => c.toBlob(res, 'image/jpeg', 0.88));
  await idb('readwrite', (s) => s.put(blob, 'cockpit'));
  await usePhotoBlob(blob);
}

export async function clearCustomPhoto() {
  try { await idb('readwrite', (s) => s.delete('cockpit')); } catch (e) { /* ignore */ }
  photo = { ...DEFAULT, custom: false };
  document.querySelectorAll('.cp-photo img').forEach((i) => { i.src = DEFAULT.url; });
  document.querySelectorAll('.cp-photo').forEach((p) => p.classList.remove('custom'));
}
export const hasCustomPhoto = () => photo.custom;

// ---------- Rendu ----------
export function cockpitPhotoHtml() {
  const pct = (v, total) => `${((v / total) * 100).toFixed(3)}%`;
  const circle = (s) => `left:${pct(s.cx - s.r, DEFAULT.w)};top:${pct(s.cy - s.r, DEFAULT.h)};width:${pct(2 * s.r, DEFAULT.w)};height:${pct(2 * s.r, DEFAULT.h)}`;
  const l = SPOTS.lcd;
  return `
    <div class="cp-wrap">
      <div class="cp-photo">
        <img src="${DEFAULT.url}" alt="" draggable="false" />
        <div class="cp-dial cp-ov" style="${circle(SPOTS.speed)}"><b id="cp-speed">0</b><small>km/h</small></div>
        <div class="cp-lcd cp-ov" style="left:${pct(l.x, DEFAULT.w)};top:${pct(l.y, DEFAULT.h)};width:${pct(l.w, DEFAULT.w)};height:${pct(l.h, DEFAULT.h)}">
          <small>CONSO</small><b id="cp-conso">—</b><small>L/100</small>
        </div>
        <div class="cp-dial cp-ov" style="${circle(SPOTS.clock)}"><b id="cp-time">--:--</b></div>
      </div>
      <div class="cp-vignette"></div>
      <div class="cp-credit">Photo : Scania, CC BY-SA 4.0</div>
    </div>`;
}

// Vue large : la photo couvre tout l'écran, cadrée sur le poste de conduite (côté gauche, libre du panneau)
export function layoutCockpitPhoto(card) {
  const wrap = card.querySelector('.cp-wrap');
  const el = card.querySelector('.cp-photo');
  if (!wrap || !el) return;
  const W = wrap.clientWidth;
  const H = wrap.clientHeight;
  const s = Math.max(W / photo.w, H / photo.h);
  const pw = photo.w * s;
  const ph = photo.h * s;
  // le volant (≈ 30 % de la largeur de la photo) se retrouve au milieu de la zone visible à gauche du panneau
  const visibleCenter = W * 0.31;
  const fx = photo.custom ? 0.5 : 0.3;
  let left = visibleCenter - fx * pw;
  left = Math.min(0, Math.max(W - pw, left));
  const top = (H - ph) / 2;
  Object.assign(el.style, { width: `${pw}px`, height: `${ph}px`, left: `${left}px`, top: `${top}px` });
  el.style.setProperty('--s', (pw / DEFAULT.w).toFixed(3));
}

export function updateCockpitPhoto(card) {
  const q = (id) => card.querySelector(`#${id}`);
  if (!q('cp-speed')) return;
  const f = fuelStats();
  q('cp-speed').textContent = Math.round(geo.last ? geo.last.speedKmh : 0);
  q('cp-conso').textContent = f.avg ? fmtNum(f.avg) : '—';
  q('cp-time').textContent = new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
}

// ---------- Panneau de droite (comme « Entretien » dans la vidéo) ----------
export function panelHtml(tab) {
  const f = fuelStats();
  const head = `
    <div class="cp-p-head">
      <div><h2>${tab === 'conso' ? 'Consommation' : 'Entretien'}</h2><small>${esc(state.truck.name)} · ${fmtKm(state.truck.km)}</small></div>
      <div class="tabs"><button data-cptab="conso" class="${tab === 'conso' ? 'on' : ''}">Conso</button><button data-cptab="entretien" class="${tab === 'entretien' ? 'on' : ''}">Entretien</button></div>
    </div>`;
  if (tab === 'conso') {
    const fills = [...state.fuel].sort((a, b) => b.km - a.km).slice(0, 6);
    const seg = Object.fromEntries(f.segments.map((g) => [g.id, g]));
    return `${head}
      <div class="stats">
        <div class="stat">${icon('Gauge')}<div><small>Moyenne</small><b>${f.avg ? `${fmtNum(f.avg)} L/100` : '—'}</b></div></div>
        <div class="stat">${icon('Fuel')}<div><small>Dernier plein</small><b>${f.last ? `${fmtNum(f.last)} L/100` : '—'}</b></div></div>
        <div class="stat">${icon('Euro')}<div><small>Coût / km</small><b>${f.costPerKm ? `${fmtNum(f.costPerKm, 3)} €` : '—'}</b></div></div>
        <div class="stat">${icon('Droplets')}<div><small>AdBlue</small><b>${f.adbluePct ? `${fmtNum(f.adbluePct)} %` : '—'}</b></div></div>
      </div>
      <div class="cp-p-list">${fills.length ? fills.map((x) => `
        <div class="row-item"><div class="ic">${icon('Fuel')}</div>
          <div class="txt"><b>${fmtNum(x.liters, 0)} L${x.adblue ? ` + ${fmtNum(x.adblue, 0)} L AdBlue` : ''}</b><small>${fmtDate(x.date)} · ${fmtKm(x.km)}</small></div>
          <div class="right">${seg[x.id] ? `${fmtNum(seg[x.id].l100)} L/100` : ''}<small>${x.price ? fmtEur(x.liters * x.price) : ''}</small></div></div>`).join('')
        : '<p class="empty">Aucun plein enregistré.</p>'}</div>
      <div class="cp-p-actions"><button class="btn primary" data-cpact="fuel">${icon('Plus', 20)}Ajouter un plein</button><button class="btn" data-cpact="details">${icon('ChevronRight', 20)}Tout voir</button></div>`;
  }
  const items = state.maintenance.map((i) => ({ i, st: itemStatus(i) })).sort((a, b) => b.st.ratio - a.st.ratio);
  return `${head}
    <div class="cp-p-list">${items.map(({ i, st }) => `
      <div class="row-item" data-cpitem="${i.id}"><div class="ic lvl-${st.level}">${icon(CATEGORIES[i.category]?.icon || 'Wrench')}</div>
        <div class="txt"><b>${esc(i.name)}</b><small>Fait le ${fmtDate(i.lastDate)}</small><div class="bar ${st.level}"><i style="width:${Math.min(100, st.ratio * 100)}%"></i></div></div>
        <div class="right lvl-${st.level}">${esc(remainingText(st))}<small>${LEVEL_LABEL[st.level]}</small></div></div>`).join('')}</div>
    <div class="cp-p-actions"><button class="btn" data-cpact="maint">${icon('ChevronRight', 20)}Tout l’entretien</button></div>`;
}
