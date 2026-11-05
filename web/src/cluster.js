// Dessin du compteur numérique affiché dans la cabine (mode cockpit).
import { state, fuelStats, itemStatus } from './store.js';
import { geo } from './geo.js';
import { fmtNum, remainingText } from './ui.js';

const nf = new Intl.NumberFormat('fr-FR');

function gauge(g, cx, cy, r, value, min, max, label, unit, color, decimals = 1) {
  const a0 = Math.PI * 0.75;
  const a1 = Math.PI * 2.25;
  g.lineCap = 'round';
  g.lineWidth = 16;
  g.strokeStyle = 'rgba(255,255,255,0.09)';
  g.beginPath(); g.arc(cx, cy, r, a0, a1); g.stroke();
  // graduations
  g.lineWidth = 3;
  for (let i = 0; i <= 10; i++) {
    const a = a0 + ((a1 - a0) * i) / 10;
    g.strokeStyle = i % 5 === 0 ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.22)';
    g.beginPath();
    g.moveTo(cx + Math.cos(a) * (r - 30), cy + Math.sin(a) * (r - 30));
    g.lineTo(cx + Math.cos(a) * (r - (i % 5 === 0 ? 46 : 40)), cy + Math.sin(a) * (r - (i % 5 === 0 ? 46 : 40)));
    g.stroke();
  }
  if (value != null && Number.isFinite(value)) {
    const k = Math.max(0, Math.min(1, (value - min) / (max - min)));
    const grd = g.createLinearGradient(cx - r, cy, cx + r, cy);
    grd.addColorStop(0, color);
    grd.addColorStop(1, '#ffffff');
    g.strokeStyle = grd;
    g.lineWidth = 16;
    g.shadowColor = color;
    g.shadowBlur = 18;
    g.beginPath(); g.arc(cx, cy, r, a0, a0 + (a1 - a0) * k); g.stroke();
    g.shadowBlur = 0;
  }
  g.textAlign = 'center';
  g.fillStyle = '#fff';
  g.font = '700 74px Roboto, sans-serif';
  g.fillText(value != null && Number.isFinite(value) ? fmtNum(value, decimals) : '—', cx, cy + 22);
  g.fillStyle = 'rgba(255,255,255,0.6)';
  g.font = '500 24px Roboto, sans-serif';
  g.fillText(unit, cx, cy + 56);
  g.font = '600 22px Roboto, sans-serif';
  g.fillStyle = color;
  g.fillText(label.toUpperCase(), cx, cy + r + 4);
}

function row(g, x, y, label, value, color = '#fff') {
  g.textAlign = 'left';
  g.fillStyle = 'rgba(255,255,255,0.55)';
  g.font = '500 20px Roboto, sans-serif';
  g.fillText(label, x, y);
  g.fillStyle = color;
  g.font = '700 27px Roboto, sans-serif';
  g.fillText(value, x, y + 32);
}

const LVL = { ok: '#34d399', soon: '#fbbf24', late: '#f87171' };

export function drawCluster(g, W, H) {
  const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#3b82f6';
  const f = fuelStats();
  // fond
  const bg = g.createLinearGradient(0, 0, 0, H);
  bg.addColorStop(0, '#05070d');
  bg.addColorStop(1, '#0d1424');
  g.fillStyle = bg;
  g.fillRect(0, 0, W, H);
  g.strokeStyle = 'rgba(255,255,255,0.08)';
  g.lineWidth = 2;
  g.strokeRect(1, 1, W - 2, H - 2);

  gauge(g, 190, 205, 150, f.avg, 20, 45, 'Conso moyenne', 'L/100 km', accent);
  gauge(g, W - 190, 205, 150, geo.last ? geo.last.speedKmh : 0, 0, 120, 'Vitesse', 'km/h', '#22d3ee', 0);

  // centre
  const cx = 362;
  const now = new Date();
  g.textAlign = 'center';
  g.fillStyle = '#fff';
  g.font = '700 40px Roboto, sans-serif';
  g.fillText(now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }), W / 2, 58);
  g.fillStyle = 'rgba(255,255,255,0.5)';
  g.font = '500 20px Roboto, sans-serif';
  g.fillText(state.truck.name, W / 2, 86);

  row(g, cx, 130, 'Compteur', `${nf.format(state.truck.km)} km`);
  row(g, cx + 172, 130, 'Dernier plein', f.last ? `${fmtNum(f.last)} L/100` : '—');
  row(g, cx, 210, 'Coût / km', f.costPerKm ? `${fmtNum(f.costPerKm, 3)} €` : '—');
  row(g, cx + 172, 210, 'AdBlue', f.adbluePct ? `${fmtNum(f.adbluePct)} %` : '—');

  const next = state.maintenance.map((i) => ({ i, st: itemStatus(i) })).sort((a, b) => b.st.ratio - a.st.ratio)[0];
  if (next) {
    g.fillStyle = 'rgba(255,255,255,0.06)';
    g.fillRect(cx - 10, 285, 320, 84);
    g.textAlign = 'left';
    g.fillStyle = LVL[next.st.level];
    g.font = '700 22px Roboto, sans-serif';
    g.fillText(`⚠ ${next.i.name}`.slice(0, 26), cx, 315);
    g.fillStyle = 'rgba(255,255,255,0.7)';
    g.font = '500 19px Roboto, sans-serif';
    g.fillText(remainingText(next.st).slice(0, 30), cx, 348);
  }
}
