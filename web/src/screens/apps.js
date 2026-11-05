// Écran Applications : favoris en grand + toutes les applis installées.
import { state, save, onChange } from '../store.js';
import { bridge } from '../bridge.js';
import { icon, $, el, esc, openModal, onLongPress, toast } from '../ui.js';

let root;
let apps = [];
let query = '';

export function init() {
  root = $('#screen-apps');
  root.innerHTML = `
    <div class="card apps-card">
      <div class="apps-head">
        <h2>Applications</h2>
        <span class="muted" style="font-size:.85rem">Appui long = ajouter / retirer des favoris</span>
        <label class="search">${icon('Search', 20, 'muted')}<input id="a-q" placeholder="Rechercher" /></label>
      </div>
      <div class="apps-scroll">
        <div class="apps-section">Favoris</div>
        <div class="app-grid favs" id="a-favs"></div>
        <div class="apps-section">Toutes les applications</div>
        <div class="app-grid" id="a-all"></div>
      </div>
    </div>`;
  $('#a-q', root).addEventListener('input', (e) => { query = e.target.value.trim().toLowerCase(); render(); });
  onChange(render);
  refresh();
}

export function refresh() {
  apps = bridge.getApps();
  render();
}

export function getApps() { return apps; }

function appNode(a, fav) {
  const src = bridge.iconUrl(a.pkg);
  const n = el(`<button class="app">
      ${src ? `<img loading="lazy" src="${src}" alt="" />` : `<div class="ph">${esc(a.label[0] || '?')}</div>`}
      <span>${esc(a.label)}</span>
      ${fav ? '' : state.favorites.includes(a.pkg) ? `<i class="star">${icon('Star', 14)}</i>` : ''}
    </button>`);
  const img = n.querySelector('img');
  if (img) img.onerror = () => img.replaceWith(el(`<div class="ph">${esc(a.label[0] || '?')}</div>`));
  n.onclick = () => bridge.launchApp(a.pkg);
  onLongPress(n, () => appMenu(a));
  return n;
}

function appMenu(a) {
  const isFav = state.favorites.includes(a.pkg);
  openModal({
    title: a.label,
    body: `<p class="muted">${esc(a.pkg)}</p>`,
    actions: [
      { label: 'Infos appli', icon: 'Info', onClick: () => bridge.appInfo(a.pkg) },
      {
        label: isFav ? 'Retirer des favoris' : 'Ajouter aux favoris',
        kind: 'primary',
        icon: isFav ? 'StarOff' : 'Star',
        onClick: () => {
          if (isFav) state.favorites = state.favorites.filter((p) => p !== a.pkg);
          else state.favorites.push(a.pkg);
          save();
          toast(isFav ? 'Retiré des favoris' : 'Ajouté aux favoris', 'ok');
        },
      },
    ],
  });
}

function render() {
  if (!root) return;
  const favBox = $('#a-favs', root);
  const allBox = $('#a-all', root);
  favBox.innerHTML = '';
  allBox.innerHTML = '';
  const favs = state.favorites.map((p) => apps.find((a) => a.pkg === p)).filter(Boolean);
  if (!favs.length) favBox.appendChild(el('<p class="empty">Fais un appui long sur une application pour l’ajouter ici.</p>'));
  favs.forEach((a) => favBox.appendChild(appNode(a, true)));
  const frag = document.createDocumentFragment();
  apps.filter((a) => !query || a.label.toLowerCase().includes(query)).forEach((a) => frag.appendChild(appNode(a, false)));
  allBox.appendChild(frag);
}
