// Vue cockpit : vraie photo de la planche de bord Scania Next Gen (CC BY-SA 4.0, Scania / Wikimedia Commons)
// avec les données du camion incrustées sur le compteur.
import { state, fuelStats, itemStatus } from './store.js';
import { geo } from './geo.js';
import { fmtNum, fmtKm, remainingText, esc } from './ui.js';

const PHOTO = { url: 'models/cockpit.jpg', w: 960, h: 640 };
// Repères mesurés sur la photo (pixels)
const SPOTS = {
  speed: { cx: 199, cy: 122, r: 23 },
  lcd: { x: 253, y: 100, w: 60, h: 50 },
  clock: { cx: 367, cy: 122, r: 23 },
  focus: { x: 283, y: 122 }, // centre du compteur
  frameW: 380, // largeur de photo visible à l'écran
};

export function cockpitPhotoHtml() {
  const pct = (v, total) => `${((v / total) * 100).toFixed(3)}%`;
  const circle = (s) => `left:${pct(s.cx - s.r, PHOTO.w)};top:${pct(s.cy - s.r, PHOTO.h)};width:${pct(2 * s.r, PHOTO.w)};height:${pct(2 * s.r, PHOTO.h)}`;
  const l = SPOTS.lcd;
  return `
    <div class="cp-wrap">
      <div class="cp-photo">
        <img src="${PHOTO.url}" alt="" draggable="false" />
        <div class="cp-dial" style="${circle(SPOTS.speed)}"><b id="cp-speed">0</b><small>km/h</small></div>
        <div class="cp-lcd" style="left:${pct(l.x, PHOTO.w)};top:${pct(l.y, PHOTO.h)};width:${pct(l.w, PHOTO.w)};height:${pct(l.h, PHOTO.h)}">
          <small>CONSO MOY.</small><b id="cp-conso">—</b><small>L/100 km</small>
        </div>
        <div class="cp-dial" style="${circle(SPOTS.clock)}"><b id="cp-time">--:--</b><small id="cp-km"></small></div>
      </div>
      <div class="cp-hud" id="cp-hud"></div>
      <div class="cp-credit">Photo : Scania, CC BY-SA 4.0</div>
    </div>`;
}

// Cadre la photo pour que le compteur soit au centre et remplisse la largeur
export function layoutCockpitPhoto(card) {
  const wrap = card.querySelector('.cp-wrap');
  const photo = card.querySelector('.cp-photo');
  if (!wrap || !photo) return;
  const W = wrap.clientWidth;
  const H = wrap.clientHeight;
  let s = Math.max(W / SPOTS.frameW, H / PHOTO.h);
  const pw = PHOTO.w * s;
  const ph = PHOTO.h * s;
  let left = W / 2 - SPOTS.focus.x * s;
  let top = H * 0.3 - SPOTS.focus.y * s;
  left = Math.min(0, Math.max(W - pw, left));
  top = Math.min(0, Math.max(H - ph, top));
  photo.style.width = `${pw}px`;
  photo.style.height = `${ph}px`;
  photo.style.left = `${left}px`;
  photo.style.top = `${top}px`;
  photo.style.setProperty('--s', s.toFixed(3));
}

const LVL = { ok: 'lvl-ok', soon: 'lvl-soon', late: 'lvl-late' };

export function updateCockpitPhoto(card) {
  const $ = (id) => card.querySelector(`#${id}`);
  if (!$('cp-speed')) return;
  const f = fuelStats();
  $('cp-speed').textContent = Math.round(geo.last ? geo.last.speedKmh : 0);
  $('cp-conso').textContent = f.avg ? fmtNum(f.avg) : '—';
  $('cp-time').textContent = new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  $('cp-km').textContent = `${new Intl.NumberFormat('fr-FR').format(state.truck.km)}`;
  const next = state.maintenance.map((i) => ({ i, st: itemStatus(i) })).sort((a, b) => b.st.ratio - a.st.ratio)[0];
  $('cp-hud').innerHTML = `
    <div><small>Compteur</small><b>${fmtKm(state.truck.km)}</b></div>
    <div><small>Dernier plein</small><b>${f.last ? `${fmtNum(f.last)} L/100` : '—'}</b></div>
    <div><small>Coût / km</small><b>${f.costPerKm ? `${fmtNum(f.costPerKm, 3)} €` : '—'}</b></div>
    ${next ? `<div class="wide"><small>Prochain entretien</small><b class="${LVL[next.st.level]}">${esc(next.i.name)}</b><small>${esc(remainingText(next.st))}</small></div>` : ''}`;
}
