// Écran d'accueil : camion 3D avec carrés d'entretien, musique, vitesse, raccourcis.
import { state, onChange, categoryLevel, axleLevel, itemStatus, worstLevel } from '../store.js';
import { bridge, KEY } from '../bridge.js';
import { icon, el, $, fmtKm, esc, remainingText, toast } from '../ui.js';
import { geo } from '../geo.js';
import { categorySheet, editKm, addFuel, goTo } from '../dialogs.js';
import { Truck3D } from '../truck3d.js';
import { drawCluster } from '../cluster.js';

const HOTSPOTS = [
  { id: 'moteur', label: 'Moteur', icon: 'Cog', level: () => categoryLevel('moteur') },
  { id: 'cabine', label: 'Cabine / Papiers', icon: 'FileText', level: () => categoryLevel('cabine') },
  { id: 'freins', label: 'Freins', icon: 'Disc3', level: () => categoryLevel('freins') },
  { id: 'pneus_av', label: 'Pneus AV', icon: 'CircleDot', level: () => axleLevel(['AV']) },
  { id: 'transmission', label: 'Boîte / Pont', icon: 'Settings2', level: () => categoryLevel('transmission') },
  { id: 'carburant', label: 'Carburant', icon: 'Fuel', level: () => categoryLevel('carburant') },
  { id: 'pneus_ar', label: 'Pneus AR', icon: 'CircleDot', level: () => axleLevel(['AR', 'AR1', 'AR2', 'SU']) },
  { id: 'sellette', label: 'Sellette', icon: 'Link', level: () => categoryLevel('sellette') },
];

let root;
let truck = null;
let hotspotNodes = [];
let playing = false;

export function init() {
  root = $('#screen-home');
  root.innerHTML = `
    <div class="card home-truck">
      <header>
        <div class="card-title" style="flex-direction:column;align-items:flex-start;gap:.15rem">
          <h2 id="h-name"></h2>
          <div class="sub"><span class="dot" id="h-dot"></span><span id="h-status"></span></div>
        </div>
        <button class="pill" id="h-veh">${icon('Truck', 18)}Véhicule</button>
      </header>
      <div class="stage" id="h-stage"><div class="hotspots" id="h-hotspots"></div></div>
      <div class="cockpit-ui" id="h-cockpit">
        <button class="pill cockpit-back" id="h-out">${icon('ChevronLeft', 18)}Retour</button>
        <div class="cockpit-actions">
          <button class="pill on" id="h-cfuel">${icon('Plus', 18)}Ajouter un plein</button>
          <button class="pill" id="h-cconso">${icon('Gauge', 18)}Détails conso</button>
        </div>
      </div>
      <footer>
        <button class="pill km-chip" id="h-km">${icon('Gauge', 18)}<span></span></button>
        <button class="pill km-chip" id="h-fuel">${icon('Fuel', 18)}Plein</button>
        <button class="pill km-chip" id="h-cock">${icon('Gauge', 18)}Cockpit</button>
        <button class="pill km-chip" id="h-plate"></button>
      </footer>
    </div>
    <div class="home-side">
      <div class="card media">
        <div class="art">${icon('Music')}</div>
        <div class="meta"><small>Lecture en cours</small><b id="h-music">Musique</b></div>
        <div class="controls">
          <button data-k="${KEY.PREVIOUS}" aria-label="Précédent">${icon('SkipBack', 28)}</button>
          <button class="play" data-k="${KEY.PLAY_PAUSE}" aria-label="Lecture">${icon('Play', 30)}</button>
          <button data-k="${KEY.NEXT}" aria-label="Suivant">${icon('SkipForward', 28)}</button>
        </div>
      </div>
      <div class="home-grid">
        <div class="card speed">
          <small id="h-date"></small>
          <div><div class="big" id="h-speed">0</div><div class="unit">km/h</div></div>
          <div class="row"><span>Météo</span><b id="h-weather">—</b></div>
        </div>
        <div class="card quick">
          <button class="qbtn" data-go="vehicle:entretien"><span class="ic" style="background:#ea580c">${icon('Wrench')}</span>Entretien</button>
          <button class="qbtn" data-go="vehicle:pneus"><span class="ic" style="background:#475569">${icon('CircleDot')}</span>Pneus</button>
          <button class="qbtn" data-go="vehicle:carburant"><span class="ic" style="background:#16a34a">${icon('Fuel')}</span>Conso</button>
          <button class="qbtn" data-go="nav"><span class="ic" style="background:#2563eb">${icon('Navigation')}</span>GPS</button>
        </div>
        <div class="card next-card" id="h-next"></div>
      </div>
    </div>`;

  $('#h-out', root).onclick = exitCockpit;
  $('#h-cock', root).onclick = enterCockpit;
  $('#h-cfuel', root).onclick = () => addFuel();
  $('#h-cconso', root).onclick = () => goTo('vehicle', { tab: 'carburant' });
  $('#h-veh', root).onclick = () => goTo('vehicle', { tab: 'apercu' });
  $('#h-km', root).onclick = editKm;
  $('#h-fuel', root).onclick = () => addFuel();
  $('#h-plate', root).onclick = () => goTo('settings');
  $('#h-next', root).onclick = () => goTo('vehicle', { tab: 'entretien' });
  root.querySelectorAll('[data-go]').forEach((b) => {
    b.onclick = () => { const [s, tab] = b.dataset.go.split(':'); goTo(s, tab ? { tab } : undefined); };
  });
  root.querySelectorAll('[data-k]').forEach((b) => {
    b.onclick = () => {
      bridge.mediaKey(Number(b.dataset.k));
      if (Number(b.dataset.k) === KEY.PLAY_PAUSE) {
        playing = !playing;
        b.innerHTML = icon(playing ? 'Pause' : 'Play', 30);
      }
    };
  });
  $('.art', root).onclick = () => bridge.openMusic(state.settings.musicPkg);
  $('.meta', root).onclick = () => bridge.openMusic(state.settings.musicPkg);

  // Carrés posés sur le camion
  const layer = $('#h-hotspots', root);
  hotspotNodes = HOTSPOTS.map((h) => {
    const node = el(`<button class="hotspot" aria-label="${esc(h.label)}"><span class="sq">${icon(h.icon)}</span><span class="lbl">${esc(h.label)}</span></button>`);
    node.onclick = () => (h.id === 'carburant' && truck && truck.hasCockpit ? enterCockpit() : categorySheet(h.id));
    layer.appendChild(node);
    return { id: h.id, node, def: h };
  });

  geo.on((p) => {
    $('#h-speed', root).textContent = Math.round(p.speedKmh);
    maybeWeather(p);
  });

  onChange(refresh);
  refresh();
}

function initTruck() {
  if (truck) return true;
  try {
    truck = new Truck3D($('#h-stage', root), {
      cabColor: state.truck.cabColor, accent: state.settings.accent, axles: state.truck.axles, quality: state.settings.quality,
      modelUrl: state.settings.realModel && state.settings.quality !== 'low' ? 'models/scania.glb' : null,
    });
    truck.bindHotspots(hotspotNodes);
    truck.setClusterDrawer(drawCluster);
    window.__truck = truck;
    truck.autoRotate = state.settings.autoRotate;
    truck._axles = state.truck.axles;
    return true;
  } catch (e) {
    console.error(e);
    $('#h-stage', root).insertAdjacentHTML('afterbegin', '<div class="map-offline">3D indisponible sur cet appareil</div>');
    truck = false;
    return false;
  }
}

function enterCockpit() {
  if (!truck || !truck.enterCockpit(() => root.querySelector('.home-truck').classList.add('in-cockpit'))) categorySheet('carburant');
  else root.querySelector('.home-truck').classList.add('flying');
}
function exitCockpit() {
  if (!truck) return;
  const card = root.querySelector('.home-truck');
  card.classList.remove('in-cockpit');
  truck.exitCockpit(() => card.classList.remove('flying'));
}
export function resetCockpit() {
  if (!truck) return;
  truck.cancelCockpit();
  root.querySelector('.home-truck').classList.remove('in-cockpit', 'flying');
}
export function isInCockpit() { return !!(truck && (truck.inCockpit || truck.anim)); }
export function leaveCockpit() { if (truck && truck.inCockpit) { exitCockpit(); return true; } return false; }

export function show() {
  if (truck === null) initTruck();
  if (truck) { truck.resize(); truck.start(); }
}
export function hide() { if (truck) truck.stop(false); }

export function tickClock(d) {
  if (!root) return;
  $('#h-date', root).textContent = d.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
}

function refresh() {
  const t = state.truck;
  $('#h-name', root).textContent = t.name;
  $('#h-plate', root).textContent = t.plate || 'Immat.';
  $('#h-km span', root).textContent = fmtKm(t.km);

  const levels = HOTSPOTS.map((h) => h.level());
  hotspotNodes.forEach((h, i) => { h.node.className = `hotspot ${levels[i]}`; });

  const all = state.maintenance.map((i) => ({ i, st: itemStatus(i) }));
  const late = all.filter((x) => x.st.level === 'late').length + levels.filter((l, k) => HOTSPOTS[k].id.startsWith('pneus') && l === 'late').length;
  const soon = all.filter((x) => x.st.level === 'soon').length;
  const lvl = worstLevel(levels);
  $('#h-dot', root).className = `dot ${lvl}`;
  $('#h-status', root).textContent = late ? `${late} entretien${late > 1 ? 's' : ''} à faire` : soon ? `${soon} entretien${soon > 1 ? 's' : ''} à prévoir` : 'Tout est à jour';

  const next = all.sort((a, b) => b.st.ratio - a.st.ratio)[0];
  $('#h-next', root).innerHTML = next
    ? `<small>Prochain entretien</small><b class="lvl-${next.st.level}">${esc(next.i.name)}</b><small>${esc(remainingText(next.st))}</small><div class="bar ${next.st.level}"><i style="width:${Math.min(100, next.st.ratio * 100)}%"></i></div>`
    : '<small>Aucun entretien programmé</small>';

  if (truck) {
    truck.redrawCluster();
    truck.setCabColor(t.cabColor);
    truck.setAccent(state.settings.accent);
    truck.autoRotate = state.settings.autoRotate;
    if (truck._axles !== t.axles) { truck._axles = t.axles; truck.setAxles(t.axles, t.cabColor); }
  }
}

// ---- Météo (Open-Meteo, gratuit, sans clé) ----
let lastWeather = 0;
const WMO = (c) => (c === 0 ? 'Soleil' : c <= 3 ? 'Nuageux' : c <= 48 ? 'Brouillard' : c <= 67 ? 'Pluie' : c <= 77 ? 'Neige' : c <= 82 ? 'Averses' : 'Orage');
async function maybeWeather(p) {
  if (Date.now() - lastWeather < 20 * 60 * 1000) return;
  lastWeather = Date.now();
  try {
    const r = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${p.lat.toFixed(3)}&longitude=${p.lng.toFixed(3)}&current=temperature_2m,weather_code`);
    const j = await r.json();
    $('#h-weather', root).textContent = `${Math.round(j.current.temperature_2m)}° ${WMO(j.current.weather_code)}`;
  } catch (e) { lastWeather = Date.now() - 15 * 60 * 1000; }
}

export { toast };
