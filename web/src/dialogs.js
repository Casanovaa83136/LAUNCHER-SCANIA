// Fenêtres de saisie partagées (accueil + écran Véhicule).
import {
  state, save, updateKm, markDone, newId, today, itemStatus, tireStatus, tirePositions,
  CATEGORIES, fuelStats,
} from './store.js';
import { openModal, formHtml, readForm, toast, esc, icon, fmtKm, fmtDate, fmtNum, remainingText, LEVEL_LABEL, confirmBox } from './ui.js';

export const goTo = (n, o) => window.__go && window.__go(n, o);

export function editKm() {
  const fields = [{ key: 'km', label: 'Kilométrage actuel au compteur', type: 'number', value: state.truck.km, hint: `Dernière mise à jour : ${fmtDate(state.truck.kmDate)}` }];
  const m = openModal({
    title: 'Kilométrage',
    body: formHtml(fields),
    actions: [
      { label: 'Annuler' },
      {
        label: 'Enregistrer', kind: 'primary', icon: 'Check',
        onClick: (b) => {
          const { km } = readForm(b, fields);
          if (km !== '' && km < state.truck.km) {
            confirmBox('Kilométrage plus bas', `Le compteur indiquait ${fmtKm(state.truck.km)}. Remplacer quand même par ${fmtKm(km)} ?`, 'Remplacer').then((ok) => {
              if (ok) { state.truck.km = Math.round(km); state.truck.kmDate = today(); save(); m.close(); }
            });
            return false;
          }
          if (!updateKm(km)) { toast('Kilométrage invalide', 'err'); return false; }
          save();
          toast('Kilométrage mis à jour', 'ok');
          return true;
        },
      },
    ],
  });
  setTimeout(() => m.body.querySelector('input')?.select(), 200);
}

export function addFuel(existing) {
  const f = existing || {};
  const fields = [
    { key: 'date', label: 'Date', type: 'date', value: f.date || today(), half: true },
    { key: 'km', label: 'Kilométrage', type: 'number', value: f.km ?? state.truck.km, half: true },
    { key: 'liters', label: 'Gasoil (litres)', type: 'number', value: f.liters ?? '', half: true },
    { key: 'price', label: 'Prix au litre (€)', type: 'number', value: f.price ?? (fuelStats().lastPrice || ''), half: true },
    { key: 'adblue', label: 'AdBlue (litres)', type: 'number', value: f.adblue ?? '', half: true },
    { key: 'station', label: 'Station', type: 'text', value: f.station || '', half: true },
    { key: 'full', label: 'Plein complet (nécessaire pour calculer la conso)', type: 'checkbox', value: f.full ?? true },
  ];
  openModal({
    title: existing ? 'Modifier le plein' : 'Nouveau plein',
    body: formHtml(fields),
    actions: [
      ...(existing ? [{ label: 'Supprimer', kind: 'danger', icon: 'Trash2', onClick: () => { state.fuel = state.fuel.filter((x) => x.id !== existing.id); save(); toast('Plein supprimé'); } }] : []),
      { label: 'Annuler' },
      {
        label: 'Enregistrer', kind: 'primary', icon: 'Check',
        onClick: (b) => {
          const v = readForm(b, fields);
          if (!(v.liters > 0) || !(v.km > 0)) { toast('Indique au moins les litres et le kilométrage', 'err'); return false; }
          if (existing) Object.assign(existing, v);
          else state.fuel.push({ id: newId(), ...v });
          updateKm(v.km);
          save();
          const st = fuelStats();
          toast(st.last ? `Enregistré — dernière conso ${fmtNum(st.last)} L/100` : 'Plein enregistré', 'ok');
          return true;
        },
      },
    ],
  });
}

export function maintenanceDone(item) {
  const fields = [
    { key: 'km', label: 'Fait à (km)', type: 'number', value: state.truck.km, half: true },
    { key: 'date', label: 'Date', type: 'date', value: today(), half: true },
    { key: 'cost', label: 'Coût (€)', type: 'number', value: '', half: true },
    { key: 'note', label: 'Note (garage, pièces…)', type: 'text', value: '', half: true },
  ];
  openModal({
    title: `${item.name} — fait`,
    body: formHtml(fields),
    actions: [
      { label: 'Annuler' },
      {
        label: 'Valider', kind: 'primary', icon: 'Check',
        onClick: (b) => {
          const v = readForm(b, fields);
          if (!(v.km > 0)) { toast('Kilométrage invalide', 'err'); return false; }
          markDone(item, v.km, v.date || today(), v.cost, v.note);
          updateKm(v.km);
          save();
          toast('Entretien enregistré', 'ok');
          return true;
        },
      },
    ],
  });
}

export function editMaintenance(item) {
  const isNew = !item || !!item.__new;
  if (item) delete item.__new;
  const it = item || { id: newId(), name: '', category: 'moteur', everyKm: 0, everyMonths: 12, lastKm: state.truck.km, lastDate: today(), note: '' };
  const fields = [
    { key: 'name', label: 'Nom', type: 'text', value: it.name },
    { key: 'category', label: 'Catégorie (carré sur le camion)', type: 'select', value: it.category, options: Object.entries(CATEGORIES).filter(([k]) => k !== 'pneus').map(([k, c]) => [k, c.label]) },
    { key: 'everyKm', label: 'Tous les … km (0 = aucun)', type: 'number', value: it.everyKm, half: true },
    { key: 'everyMonths', label: 'Tous les … mois (0 = aucun)', type: 'number', value: it.everyMonths, half: true },
    { key: 'lastKm', label: 'Dernière fois à (km)', type: 'number', value: it.lastKm, half: true },
    { key: 'lastDate', label: 'Dernière fois le', type: 'date', value: it.lastDate, half: true },
    { key: 'note', label: 'Note (référence huile, filtre…)', type: 'text', value: it.note },
  ];
  openModal({
    title: isNew ? 'Nouvel entretien' : 'Modifier l’entretien',
    body: formHtml(fields),
    actions: [
      ...(!isNew ? [{
        label: 'Supprimer', kind: 'danger', icon: 'Trash2',
        onClick: async () => {
          if (!(await confirmBox('Supprimer', `Supprimer « ${it.name} » ?`, 'Supprimer'))) return false;
          state.maintenance = state.maintenance.filter((x) => x.id !== it.id);
          save();
          return true;
        },
      }] : []),
      { label: 'Annuler' },
      {
        label: 'Enregistrer', kind: 'primary', icon: 'Check',
        onClick: (b) => {
          const v = readForm(b, fields);
          if (!v.name) { toast('Donne un nom', 'err'); return false; }
          v.everyKm = Number(v.everyKm) || 0;
          v.everyMonths = Number(v.everyMonths) || 0;
          v.lastKm = Number(v.lastKm) || 0;
          Object.assign(it, v);
          if (isNew) state.maintenance.push(it);
          save();
          return true;
        },
      },
    ],
  });
}

export function editTire(pos) {
  const p = tirePositions(state.truck.axles).find((x) => x.pos === pos);
  const t = state.tires.list[pos] || {};
  const fields = [
    { key: 'brand', label: 'Marque', type: 'text', value: t.brand || '', half: true, placeholder: 'Michelin, Continental…' },
    { key: 'model', label: 'Modèle', type: 'text', value: t.model || '', half: true },
    { key: 'size', label: 'Dimension', type: 'text', value: t.size || '315/70 R22.5', half: true },
    { key: 'depth', label: 'Profondeur sculpture (mm)', type: 'number', value: t.depth ?? '', half: true },
    { key: 'mountKm', label: 'Monté à (km)', type: 'number', value: t.mountKm ?? state.truck.km, half: true },
    { key: 'mountDate', label: 'Monté le', type: 'date', value: t.mountDate || today(), half: true },
    { key: 'lifeKm', label: 'Durée de vie estimée (km)', type: 'number', value: t.lifeKm || state.tires.defaultLifeKm, half: true },
    { key: 'pressure', label: 'Pression (bar)', type: 'number', value: t.pressure ?? '', half: true },
  ];
  const st = tireStatus(state.tires.list[pos]);
  openModal({
    title: `Pneu ${p ? p.label : pos}`,
    body: `${state.tires.list[pos] ? `<p class="muted" style="margin-bottom:.8rem">État : <b class="lvl-${st.level}">${LEVEL_LABEL[st.level]}</b> — ${st.remainingKm >= 0 ? `encore ~${fmtKm(st.remainingKm)}` : `dépassé de ${fmtKm(-st.remainingKm)}`}</p>` : ''}${formHtml(fields)}`,
    actions: [
      ...(state.tires.list[pos] ? [{ label: 'Retirer', kind: 'danger', icon: 'Trash2', onClick: () => { delete state.tires.list[pos]; save(); } }] : []),
      { label: 'Annuler' },
      {
        label: 'Enregistrer', kind: 'primary', icon: 'Check',
        onClick: (b) => {
          const v = readForm(b, fields);
          const old = state.tires.list[pos];
          if (old && (old.mountKm !== v.mountKm || old.brand !== v.brand)) {
            state.history.unshift({ id: newId(), itemId: `tire:${pos}`, name: `Pneu ${pos} : ${v.brand || ''} ${v.model || ''}`.trim(), km: v.mountKm, date: v.mountDate, cost: '', note: '' });
          }
          state.tires.list[pos] = v;
          save();
          return true;
        },
      },
    ],
  });
}

// Fenêtre ouverte en touchant un carré sur le camion 3D
export function categorySheet(hotspotId) {
  if (hotspotId === 'pneus_av' || hotspotId === 'pneus_ar') {
    const axles = hotspotId === 'pneus_av' ? ['AV'] : ['AR', 'AR1', 'AR2', 'SU'];
    const list = tirePositions(state.truck.axles).filter((p) => axles.includes(p.axle));
    const m = openModal({
      title: hotspotId === 'pneus_av' ? 'Pneus avant' : 'Pneus arrière',
      body: `<div class="list">${list.map((p) => {
        const t = state.tires.list[p.pos];
        const st = tireStatus(t);
        return `<button class="row-item" style="width:100%" data-pos="${p.pos}">
          <div class="ic lvl-${st.level}">${icon('CircleDot')}</div>
          <div class="txt"><b>${esc(p.label)}</b><small>${t ? `${esc(t.brand || 'Pneu')} ${esc(t.size || '')} · monté à ${fmtKm(t.mountKm)}` : 'Touchez pour renseigner'}</small>
          ${t ? `<div class="bar ${st.level}"><i style="width:${Math.min(100, st.ratio * 100)}%"></i></div>` : ''}</div>
          <div class="right lvl-${st.level}">${t ? (st.remainingKm >= 0 ? fmtKm(st.remainingKm) : 'À changer') : '—'}<small>${t && t.depth !== '' && t.depth != null ? `${fmtNum(t.depth)} mm` : ''}</small></div>
        </button>`;
      }).join('')}</div>`,
      actions: [{ label: 'Voir tous les pneus', icon: 'ChevronRight', onClick: () => goTo('vehicle', { tab: 'pneus' }) }],
    });
    m.body.querySelectorAll('[data-pos]').forEach((b) => { b.onclick = () => { m.close(); editTire(b.dataset.pos); }; });
    return;
  }
  if (hotspotId === 'carburant') {
    const s = fuelStats();
    const items = state.maintenance.filter((i) => i.category === 'carburant');
    const m = openModal({
      title: 'Carburant',
      body: `<div class="stats" style="margin-bottom:.8rem">
        <div class="stat">${icon('Gauge')}<div><small>Conso moyenne</small><b>${s.avg ? `${fmtNum(s.avg)} L/100` : '—'}</b></div></div>
        <div class="stat">${icon('Fuel')}<div><small>Dernier plein</small><b>${s.last ? `${fmtNum(s.last)} L/100` : '—'}</b></div></div>
        <div class="stat">${icon('Euro')}<div><small>Coût au km</small><b>${s.costPerKm ? `${fmtNum(s.costPerKm, 3)} €` : '—'}</b></div></div>
        <div class="stat">${icon('Droplets')}<div><small>AdBlue / gasoil</small><b>${s.adbluePct ? `${fmtNum(s.adbluePct)} %` : '—'}</b></div></div>
      </div>${itemsHtml(items)}`,
      actions: [
        { label: 'Historique', icon: 'History', onClick: () => goTo('vehicle', { tab: 'carburant' }) },
        { label: 'Ajouter un plein', kind: 'primary', icon: 'Plus', onClick: () => addFuel() },
      ],
    });
    bindItems(m);
    return;
  }
  const cat = CATEGORIES[hotspotId];
  const items = state.maintenance.filter((i) => i.category === hotspotId);
  const m = openModal({
    title: cat ? cat.label : 'Entretien',
    body: items.length ? itemsHtml(items) : '<p class="empty">Aucun entretien dans cette catégorie.</p>',
    actions: [
      { label: 'Ajouter', icon: 'Plus', onClick: () => { editMaintenance({ id: newId(), name: '', category: hotspotId, everyKm: 0, everyMonths: 12, lastKm: state.truck.km, lastDate: today(), note: '', __new: true }); } },
      { label: 'Tout l’entretien', kind: 'primary', icon: 'ChevronRight', onClick: () => goTo('vehicle', { tab: 'entretien' }) },
    ],
  });
  bindItems(m);
}

export function itemsHtml(items) {
  return `<div class="list">${items.map((it) => {
    const st = itemStatus(it);
    return `<div class="row-item" data-item="${it.id}">
      <div class="ic lvl-${st.level}">${icon(CATEGORIES[it.category]?.icon || 'Wrench')}</div>
      <div class="txt"><b>${esc(it.name)}</b><small>Fait le ${fmtDate(it.lastDate)} à ${fmtKm(it.lastKm)}${it.note ? ` · ${esc(it.note)}` : ''}</small>
        <div class="bar ${st.level}"><i style="width:${Math.min(100, st.ratio * 100)}%"></i></div></div>
      <div class="right lvl-${st.level}">${esc(remainingText(st))}<small>${LEVEL_LABEL[st.level]}</small></div>
      <button class="btn small" data-done="${it.id}">${icon('Check', 18)}Fait</button>
    </div>`;
  }).join('')}</div>`;
}

export function bindItems(m) {
  const root = m.body || m;
  root.querySelectorAll('[data-done]').forEach((b) => {
    b.onclick = (e) => {
      e.stopPropagation();
      const it = state.maintenance.find((x) => x.id === b.dataset.done);
      if (it) { m.close?.(); maintenanceDone(it); }
    };
  });
  root.querySelectorAll('[data-item]').forEach((r) => {
    r.onclick = () => {
      const it = state.maintenance.find((x) => x.id === r.dataset.item);
      if (it) { m.close?.(); editMaintenance(it); }
    };
  });
}
