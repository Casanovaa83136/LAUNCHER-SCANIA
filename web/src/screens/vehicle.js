// Écran Véhicule : aperçu, entretien, pneus, carburant, historique + liste d'alertes à droite.
import {
  state, save, onChange, itemStatus, tireStatus, tirePositions, fuelStats, CATEGORIES, AXLE_CONFIGS, axleLevel,
} from '../store.js';
import { icon, $, esc, fmtKm, fmtNum, fmtEur, fmtDate, remainingText, LEVEL_LABEL, confirmBox, openModal, formHtml, readForm } from '../ui.js';
import { editKm, addFuel, editMaintenance, editTire, itemsHtml, bindItems, maintenanceDone } from '../dialogs.js';

const TABS = [['apercu', 'Aperçu'], ['entretien', 'Entretien'], ['pneus', 'Pneus'], ['carburant', 'Carburant'], ['historique', 'Historique']];
let root;
let tab = 'apercu';
let catFilter = 'all';
let selTire = null;

export function init() {
  root = $('#screen-vehicle');
  root.innerHTML = `
    <div class="card veh-main">
      <div class="veh-head">
        <div class="card-title" style="flex-direction:column;align-items:flex-start;gap:.15rem">
          <h2>Véhicule</h2>
          <div class="sub" id="v-sub"></div>
        </div>
        <div class="tabs" id="v-tabs">${TABS.map(([k, l]) => `<button data-tab="${k}">${l}</button>`).join('')}</div>
      </div>
      <div class="veh-body" id="v-body"></div>
    </div>
    <div class="card veh-side">
      <div class="card-title"><h2 style="font-size:1.2rem">À surveiller</h2></div>
      <div class="list" id="v-alerts"></div>
    </div>`;
  root.querySelectorAll('[data-tab]').forEach((b) => { b.onclick = () => { tab = b.dataset.tab; render(); }; });
  onChange(render);
}

export function show(opts) {
  if (opts && opts.tab) tab = opts.tab;
  render();
}

function render() {
  if (!root) return;
  root.querySelectorAll('[data-tab]').forEach((b) => b.classList.toggle('on', b.dataset.tab === tab));
  $('#v-sub', root).innerHTML = `${icon('Truck', 16)} ${esc(state.truck.name)} · ${esc(state.truck.plate)} · ${fmtKm(state.truck.km)}`;
  const body = $('#v-body', root);
  const scroll = body.scrollTop;
  ({ apercu, entretien, pneus, carburant, historique })[tab](body);
  body.scrollTop = scroll;
  renderAlerts();
}

function renderAlerts() {
  const box = $('#v-alerts', root);
  const rows = state.maintenance.map((i) => ({ i, st: itemStatus(i) })).sort((a, b) => b.st.ratio - a.st.ratio);
  const tires = tirePositions(state.truck.axles)
    .map((p) => ({ p, t: state.tires.list[p.pos], st: tireStatus(state.tires.list[p.pos]) }))
    .filter((x) => x.t && x.st.level !== 'ok');
  box.innerHTML = [
    ...tires.map((x) => `<div class="row-item" data-tire="${x.p.pos}"><div class="ic lvl-${x.st.level}">${icon('CircleDot')}</div><div class="txt"><b>Pneu ${esc(x.p.label)}</b><small>${x.st.remainingKm >= 0 ? `encore ${fmtKm(x.st.remainingKm)}` : 'à changer'}</small></div><div class="right lvl-${x.st.level}">${LEVEL_LABEL[x.st.level]}</div></div>`),
    ...rows.map(({ i, st }) => `<div class="row-item" data-item="${i.id}"><div class="ic lvl-${st.level}">${icon(CATEGORIES[i.category]?.icon || 'Wrench')}</div><div class="txt"><b>${esc(i.name)}</b><small>${esc(remainingText(st))}</small></div><div class="right lvl-${st.level}">${LEVEL_LABEL[st.level]}</div></div>`),
  ].join('');
  box.querySelectorAll('[data-item]').forEach((r) => { r.onclick = () => { const it = state.maintenance.find((x) => x.id === r.dataset.item); if (it) maintenanceDone(it); }; });
  box.querySelectorAll('[data-tire]').forEach((r) => { r.onclick = () => editTire(r.dataset.tire); });
}

// ---------------- Aperçu ----------------
function apercu(body) {
  const f = fuelStats();
  const find = (re) => state.maintenance.find((i) => re.test(i.name));
  const vid = find(/vidange/i);
  const ct = find(/contr[oô]le technique/i);
  const tacho = find(/chrono|tachy/i);
  const tiresLvl = axleLevel(['AV', 'AR', 'AR1', 'AR2', 'SU']);
  const stat = (ic, label, value, attrs = '', cls = '') => `<button class="stat" ${attrs}>${icon(ic)}<div style="text-align:left"><small>${label}</small><b class="${cls}">${value}</b></div></button>`;
  const due = (it) => (it ? remainingText(itemStatus(it)) : '—');
  const lvl = (it) => (it ? `lvl-${itemStatus(it).level}` : '');
  body.innerHTML = `
    <div class="stats">
      ${stat('Gauge', 'Kilométrage (toucher pour modifier)', fmtKm(state.truck.km), 'id="o-km"')}
      ${stat('Fuel', 'Consommation moyenne', f.avg ? `${fmtNum(f.avg)} L/100` : '—', 'data-tab="carburant"')}
      ${stat('Droplet', 'Prochaine vidange', due(vid), 'data-tab="entretien"', lvl(vid))}
      ${stat('ShieldCheck', 'Contrôle technique', due(ct), 'data-tab="entretien"', lvl(ct))}
      ${stat('Clock', 'Chronotachygraphe', due(tacho), 'data-tab="entretien"', lvl(tacho))}
      ${stat('CircleDot', 'État des pneus', LEVEL_LABEL[tiresLvl === 'ok' && !Object.keys(state.tires.list).length ? 'none' : tiresLvl], 'data-tab="pneus"', `lvl-${tiresLvl}`)}
      ${stat('Euro', 'Coût gasoil au km', f.costPerKm ? `${fmtNum(f.costPerKm, 3)} €` : '—', 'data-tab="carburant"')}
      ${stat('Droplets', 'AdBlue total', f.totalAdblue ? `${fmtNum(f.totalAdblue, 0)} L` : '—', 'data-tab="carburant"')}
      ${stat('Calendar', 'Dépenses entretien', fmtEur(state.history.reduce((s, h) => s + (Number(h.cost) || 0), 0)), 'data-tab="historique"')}
      ${stat('Truck', 'Configuration', `${esc(state.truck.axles)} · ${esc(state.truck.plate)}`, 'data-go="settings"')}
    </div>
    <div class="toolbar" style="margin-top:.8rem">
      <button class="btn primary" id="o-fuel">${icon('Fuel', 20)}Ajouter un plein</button>
      <button class="btn" id="o-km2">${icon('Gauge', 20)}Mettre à jour les km</button>
    </div>`;
  $('#o-km', body).onclick = editKm;
  $('#o-km2', body).onclick = editKm;
  $('#o-fuel', body).onclick = () => addFuel();
  body.querySelectorAll('.stat[data-tab]').forEach((b) => { b.onclick = () => { tab = b.dataset.tab; render(); }; });
  body.querySelectorAll('[data-go]').forEach((b) => { b.onclick = () => window.__go(b.dataset.go); });
}

// ---------------- Entretien ----------------
function entretien(body) {
  const cats = Object.entries(CATEGORIES).filter(([k]) => k !== 'pneus');
  let items = state.maintenance;
  if (catFilter !== 'all') items = items.filter((i) => i.category === catFilter);
  items = [...items].sort((a, b) => itemStatus(b).ratio - itemStatus(a).ratio);
  body.innerHTML = `
    <div class="toolbar">
      <button class="pill ${catFilter === 'all' ? 'on' : ''}" data-cat="all">Tout</button>
      ${cats.map(([k, c]) => `<button class="pill ${catFilter === k ? 'on' : ''}" data-cat="${k}">${c.label}</button>`).join('')}
      <span class="grow"></span>
      <button class="btn small primary" id="m-add">${icon('Plus', 18)}Ajouter</button>
    </div>
    ${items.length ? itemsHtml(items) : '<p class="empty">Rien ici.</p>'}
    <p class="muted" style="font-size:.78rem;margin-top:.6rem">Touchez une ligne pour modifier l’intervalle, « Fait » pour enregistrer l’intervention. Les intervalles par défaut sont indicatifs : adaptez-les à votre carnet d’entretien.</p>`;
  body.querySelectorAll('[data-cat]').forEach((b) => { b.onclick = () => { catFilter = b.dataset.cat; render(); }; });
  $('#m-add', body).onclick = () => editMaintenance(null);
  bindItems(body);
}

// ---------------- Pneus ----------------
function pneus(body) {
  const cfg = AXLE_CONFIGS[state.truck.axles] || AXLE_CONFIGS['4x2'];
  const positions = tirePositions(state.truck.axles);
  const tireBtn = (pos) => {
    const st = tireStatus(state.tires.list[pos]);
    return `<button class="tire ${st.level} ${selTire === pos ? 'sel' : ''}" data-pos="${pos}" aria-label="${pos}"></button>`;
  };
  const diagram = cfg.map((a) => {
    const ps = positions.filter((p) => p.axle === a.id).map((p) => p.pos);
    const half = ps.length / 2;
    return `<div class="axle"><div class="side">${ps.slice(0, half).map(tireBtn).join('')}</div><small class="muted" style="z-index:1;background:#1a2133;padding:0 .3rem;border-radius:.3rem">${a.id}</small><div class="side">${ps.slice(half).map(tireBtn).join('')}</div></div>`;
  }).join('');
  body.innerHTML = `
    <div class="tire-layout">
      <div class="tire-diagram" style="min-height:${cfg.length * 6 + 4}rem"><div class="cab"></div><div style="height:2rem"></div>${diagram}</div>
      <div class="tire-list list">
        ${positions.map((p) => {
          const t = state.tires.list[p.pos];
          const st = tireStatus(t);
          return `<div class="row-item" data-pos="${p.pos}">
            <div class="ic lvl-${st.level}">${icon('CircleDot')}</div>
            <div class="txt"><b>${esc(p.label)}</b><small>${t ? `${esc([t.brand, t.model].filter(Boolean).join(' ') || 'Pneu')} · ${esc(t.size || '')} · monté le ${fmtDate(t.mountDate)}` : 'Non renseigné — touchez pour ajouter'}</small>
            ${t ? `<div class="bar ${st.level}"><i style="width:${Math.min(100, st.ratio * 100)}%"></i></div>` : ''}</div>
            <div class="right lvl-${st.level}">${t ? (st.remainingKm >= 0 ? `~${fmtKm(st.remainingKm)}` : 'À changer') : '—'}<small>${t && t.depth !== '' && t.depth != null ? `${fmtNum(t.depth)} mm` : ''}${t && t.pressure ? ` · ${fmtNum(t.pressure)} bar` : ''}</small></div>
          </div>`;
        }).join('')}
      </div>
    </div>
    <div class="toolbar" style="margin-top:.8rem">
      <button class="btn small" id="t-life">${icon('Settings2', 18)}Durée de vie par défaut : ${fmtKm(state.tires.defaultLifeKm)} · min ${state.tires.minDepth} mm</button>
    </div>`;
  body.querySelectorAll('[data-pos]').forEach((b) => { b.onclick = () => { selTire = b.dataset.pos; editTire(b.dataset.pos); }; });
  $('#t-life', body).onclick = () => {
    const fields = [
      { key: 'defaultLifeKm', label: 'Durée de vie par défaut (km)', type: 'number', value: state.tires.defaultLifeKm },
      { key: 'minDepth', label: 'Profondeur mini avant remplacement (mm)', type: 'number', value: state.tires.minDepth },
    ];
    openModal({
      title: 'Réglages pneus',
      body: formHtml(fields),
      actions: [{ label: 'Annuler' }, { label: 'Enregistrer', kind: 'primary', onClick: (b) => { const v = readForm(b, fields); if (v.defaultLifeKm > 0) state.tires.defaultLifeKm = v.defaultLifeKm; if (v.minDepth > 0) state.tires.minDepth = v.minDepth; save(); } }],
    });
  };
}

// ---------------- Carburant ----------------
function carburant(body) {
  const s = fuelStats();
  const list = [...state.fuel].sort((a, b) => b.km - a.km);
  const seg = Object.fromEntries(s.segments.map((g) => [g.id, g]));
  body.innerHTML = `
    <div class="stats">
      <div class="stat">${icon('Gauge')}<div><small>Moyenne (plein à plein)</small><b>${s.avg ? `${fmtNum(s.avg)} L/100` : '—'}</b></div></div>
      <div class="stat">${icon('Fuel')}<div><small>Dernière conso</small><b>${s.last ? `${fmtNum(s.last)} L/100` : '—'}</b></div></div>
      <div class="stat">${icon('Euro')}<div><small>Total dépensé</small><b>${fmtEur(s.totalCost)}</b></div></div>
      <div class="stat">${icon('Route')}<div><small>Distance suivie</small><b>${fmtKm(s.dist)}</b></div></div>
    </div>
    <div style="margin:.8rem 0"><canvas class="chart" id="c-chart"></canvas></div>
    <div class="toolbar"><b>Pleins</b><span class="grow"></span><button class="btn small primary" id="c-add">${icon('Plus', 18)}Ajouter un plein</button></div>
    <div class="list">${list.length ? list.map((f) => `
      <div class="row-item" data-fuel="${f.id}">
        <div class="ic">${icon('Fuel')}</div>
        <div class="txt"><b>${fmtNum(f.liters, 1)} L${f.adblue ? ` + ${fmtNum(f.adblue, 0)} L AdBlue` : ''}</b><small>${fmtDate(f.date)} · ${fmtKm(f.km)}${f.station ? ` · ${esc(f.station)}` : ''}${f.full ? '' : ' · partiel'}</small></div>
        <div class="right">${seg[f.id] ? `${fmtNum(seg[f.id].l100)} L/100` : ''}<small>${f.price ? `${fmtEur(f.liters * f.price)} · ${fmtNum(f.price, 3)} €/L` : ''}</small></div>
      </div>`).join('') : '<p class="empty">Aucun plein enregistré. Faites le plein complet, notez les km et les litres : la conso se calcule à partir du 2ᵉ plein complet.</p>'}</div>`;
  $('#c-add', body).onclick = () => addFuel();
  body.querySelectorAll('[data-fuel]').forEach((r) => { r.onclick = () => addFuel(state.fuel.find((x) => x.id === r.dataset.fuel)); });
  requestAnimationFrame(() => drawChart($('#c-chart', body), s.segments.slice(-20), s.avg));
}

function drawChart(cv, segs, avg) {
  if (!cv) return;
  const dpr = window.devicePixelRatio || 1;
  const w = cv.clientWidth;
  const h = cv.clientHeight;
  cv.width = w * dpr;
  cv.height = h * dpr;
  const g = cv.getContext('2d');
  g.scale(dpr, dpr);
  const fs = parseFloat(getComputedStyle(document.documentElement).fontSize) * 0.7;
  g.font = `${fs}px sans-serif`;
  if (!segs.length) {
    g.fillStyle = 'rgba(226,232,240,.5)';
    g.textAlign = 'center';
    g.fillText('Le graphique de consommation apparaîtra après 2 pleins complets', w / 2, h / 2);
    return;
  }
  const vals = segs.map((s) => s.l100);
  const max = Math.max(...vals) * 1.1;
  const min = Math.max(0, Math.min(...vals) * 0.85);
  const pad = { l: fs * 3, r: 8, t: 8, b: fs * 1.6 };
  const bw = (w - pad.l - pad.r) / segs.length;
  const y = (v) => pad.t + (1 - (v - min) / (max - min || 1)) * (h - pad.t - pad.b);
  const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#3b82f6';
  g.fillStyle = 'rgba(226,232,240,.55)';
  g.textAlign = 'right';
  g.fillText(fmtNum(max, 0), pad.l - 6, pad.t + fs);
  g.fillText(fmtNum(min, 0), pad.l - 6, h - pad.b);
  segs.forEach((s, i) => {
    const x = pad.l + i * bw + bw * 0.18;
    g.fillStyle = accent;
    g.globalAlpha = 0.85;
    const top = y(s.l100);
    g.beginPath();
    if (g.roundRect) g.roundRect(x, top, bw * 0.64, h - pad.b - top, 4); else g.rect(x, top, bw * 0.64, h - pad.b - top);
    g.fill();
    g.globalAlpha = 1;
  });
  if (avg) {
    g.strokeStyle = '#fbbf24';
    g.setLineDash([5, 4]);
    g.beginPath();
    g.moveTo(pad.l, y(avg));
    g.lineTo(w - pad.r, y(avg));
    g.stroke();
    g.setLineDash([]);
    g.fillStyle = '#fbbf24';
    g.textAlign = 'left';
    g.fillText(`moy. ${fmtNum(avg)}`, pad.l + 4, y(avg) - 4);
  }
}

// ---------------- Historique ----------------
function historique(body) {
  body.innerHTML = state.history.length
    ? `<div class="list">${state.history.map((h) => `
      <div class="row-item">
        <div class="ic">${icon('Wrench')}</div>
        <div class="txt"><b>${esc(h.name)}</b><small>${fmtDate(h.date)} · ${fmtKm(h.km)}${h.note ? ` · ${esc(h.note)}` : ''}</small></div>
        <div class="right">${h.cost ? fmtEur(h.cost) : ''}</div>
        <button class="icon-btn" data-del="${h.id}" aria-label="Supprimer">${icon('Trash2', 18)}</button>
      </div>`).join('')}</div>`
    : '<p class="empty">L’historique se remplit quand vous validez un entretien (« Fait ») ou changez un pneu.</p>';
  body.querySelectorAll('[data-del]').forEach((b) => {
    b.onclick = async () => {
      if (!(await confirmBox('Supprimer', 'Supprimer cette ligne de l’historique ?', 'Supprimer'))) return;
      state.history = state.history.filter((h) => h.id !== b.dataset.del);
      save();
    };
  });
}
