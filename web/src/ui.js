// Petits utilitaires d'interface : icônes, création d'éléments, fenêtres, notifications.
import * as L from './icons.js';

export function icon(name, size = 24, cls = '') {
  const node = L[name] || L.Circle;
  const inner = node.map(([tag, attrs]) => `<${tag} ${Object.entries(attrs).map(([k, v]) => `${k}="${v}"`).join(' ')}/>`).join('');
  return `<svg class="ico ${cls}" xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
}

export const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export function el(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

export const $ = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const nf = new Intl.NumberFormat('fr-FR');
export const fmtKm = (n) => (n == null || !Number.isFinite(Number(n)) ? '—' : `${nf.format(Math.round(n))} km`);
export const fmtNum = (n, d = 1) => (n == null || !Number.isFinite(Number(n)) ? '—' : Number(n).toLocaleString('fr-FR', { minimumFractionDigits: d, maximumFractionDigits: d }));
export const fmtEur = (n) => (n == null || !Number.isFinite(Number(n)) ? '—' : Number(n).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' }));
export function fmtDate(iso) {
  if (!iso) return '—';
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? '—' : d.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' });
}

export function remainingText(st) {
  const parts = [];
  if (st.remainingKm !== null && st.remainingKm !== undefined) {
    parts.push(st.remainingKm >= 0 ? `dans ${fmtKm(st.remainingKm)}` : `dépassé de ${fmtKm(-st.remainingKm)}`);
  }
  if (st.remainingDays !== null && st.remainingDays !== undefined) {
    const d = st.remainingDays;
    const txt = Math.abs(d) > 60 ? `${Math.round(Math.abs(d) / 30.4)} mois` : `${Math.abs(d)} j`;
    parts.push(d >= 0 ? `dans ${txt}` : `en retard de ${txt}`);
  }
  return parts.join(' · ') || '—';
}

export const LEVEL_LABEL = { ok: 'OK', soon: 'Bientôt', late: 'À faire', none: 'Non renseigné' };

// ---------- Fenêtre modale ----------
let modalStack = [];
export function openModal({ title, body, actions = [], wide = false, onClose }) {
  const root = el(`
    <div class="modal-backdrop">
      <div class="modal ${wide ? 'wide' : ''}" role="dialog">
        <header><h2>${esc(title)}</h2><button class="icon-btn close" aria-label="Fermer">${icon('X')}</button></header>
        <div class="modal-body"></div>
        <footer></footer>
      </div>
    </div>`);
  const bodyEl = $('.modal-body', root);
  if (typeof body === 'string') bodyEl.innerHTML = body; else if (body) bodyEl.appendChild(body);
  const footer = $('footer', root);
  if (!actions.length) footer.remove();
  const close = () => {
    root.classList.add('closing');
    setTimeout(() => root.remove(), 160);
    modalStack = modalStack.filter((m) => m !== api);
    onClose && onClose();
  };
  for (const a of actions) {
    const b = el(`<button class="btn ${a.kind || ''}">${a.icon ? icon(a.icon, 20) : ''}<span>${esc(a.label)}</span></button>`);
    b.onclick = async () => { const r = await a.onClick?.(bodyEl); if (r !== false) close(); };
    footer.appendChild(b);
  }
  $('.close', root).onclick = close;
  root.addEventListener('pointerdown', (e) => { if (e.target === root) close(); });
  document.body.appendChild(root);
  const api = { root, body: bodyEl, close };
  modalStack.push(api);
  return api;
}
export function closeTopModal() {
  const m = modalStack[modalStack.length - 1];
  if (m) { m.close(); return true; }
  return false;
}

export function confirmBox(title, text, okLabel = 'Confirmer') {
  return new Promise((resolve) => {
    let done = false;
    openModal({
      title,
      body: `<p class="muted">${esc(text)}</p>`,
      actions: [
        { label: 'Annuler', onClick: () => { done = true; resolve(false); } },
        { label: okLabel, kind: 'danger', onClick: () => { done = true; resolve(true); } },
      ],
      onClose: () => { if (!done) resolve(false); },
    });
  });
}

// ---------- Formulaires ----------
// fields: [{ key, label, type, value, step, options, placeholder, half }]
export function formHtml(fields) {
  return `<form class="form" onsubmit="return false">${fields.map((f) => {
    const id = `f_${f.key}`;
    const cls = f.half ? 'field half' : 'field';
    if (f.type === 'checkbox') {
      return `<label class="${cls} check"><input type="checkbox" id="${id}" name="${f.key}" ${f.value ? 'checked' : ''}/><span>${esc(f.label)}</span></label>`;
    }
    if (f.type === 'select') {
      return `<label class="${cls}"><span>${esc(f.label)}</span><select id="${id}" name="${f.key}">${f.options.map(([v, l]) => `<option value="${esc(v)}" ${String(v) === String(f.value) ? 'selected' : ''}>${esc(l)}</option>`).join('')}</select></label>`;
    }
    const num = f.type === 'number';
    return `<label class="${cls}"><span>${esc(f.label)}</span><input id="${id}" name="${f.key}" type="${f.type || 'text'}" ${num ? `inputmode="decimal" step="${f.step || 'any'}"` : ''} value="${esc(f.value ?? '')}" placeholder="${esc(f.placeholder || '')}"/>${f.hint ? `<small>${esc(f.hint)}</small>` : ''}</label>`;
  }).join('')}</form>`;
}

export function readForm(root, fields) {
  const out = {};
  for (const f of fields) {
    const input = root.querySelector(`[name="${f.key}"]`);
    if (!input) continue;
    if (f.type === 'checkbox') out[f.key] = input.checked;
    else if (f.type === 'number') out[f.key] = input.value === '' ? '' : Number(String(input.value).replace(',', '.'));
    else out[f.key] = input.value.trim();
  }
  return out;
}

// ---------- Notification ----------
export function toast(msg, kind = '') {
  document.querySelectorAll('.toast').forEach((o) => o.remove());
  const t = el(`<div class="toast ${kind}">${esc(msg)}</div>`);
  document.body.appendChild(t);
  requestAnimationFrame(() => t.classList.add('show'));
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 2600);
}

// Appui long (pour les favoris).
// Sur Android, le WebView annule le toucher (pointercancel) vers 500 ms pour ouvrir son propre menu :
// on déclenche donc à 450 ms, on n'annule PAS sur pointercancel, et l'évènement "contextmenu"
// (appui long natif) déclenche aussi l'action.
export function onLongPress(node, fn, ms = 450) {
  let timer = null;
  let fired = false;
  let sx = 0;
  let sy = 0;
  const fire = (e) => {
    clearTimeout(timer);
    if (fired) return;
    fired = true;
    if (navigator.vibrate) { try { navigator.vibrate(30); } catch (err) { /* ignore */ } }
    fn(e);
  };
  node.addEventListener('pointerdown', (e) => {
    fired = false; sx = e.clientX; sy = e.clientY;
    clearTimeout(timer);
    timer = setTimeout(() => fire(e), ms);
  });
  const cancel = () => clearTimeout(timer);
  node.addEventListener('pointerup', cancel);
  node.addEventListener('pointermove', (e) => { if (Math.hypot(e.clientX - sx, e.clientY - sy) > 12) cancel(); });
  node.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse') cancel(); });
  node.addEventListener('contextmenu', (e) => { e.preventDefault(); fire(e); });
  node.addEventListener('click', (e) => {
    if (fired) { e.stopImmediatePropagation(); e.preventDefault(); fired = false; }
  }, true);
}
