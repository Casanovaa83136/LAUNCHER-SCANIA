// Construit l'interface web dans les assets Android.
import * as esbuild from 'esbuild';
import { cpSync, mkdirSync } from 'node:fs';

const out = '../app/src/main/assets/web';
mkdirSync(out, { recursive: true });
cpSync('static', out, { recursive: true });
cpSync('node_modules/leaflet/dist/leaflet.css', `${out}/vendor/leaflet.css`);
cpSync('node_modules/leaflet/dist/images', `${out}/vendor/images`, { recursive: true });

const opts = {
  entryPoints: ['src/main.js'],
  bundle: true,
  minify: true,
  sourcemap: false,
  format: 'iife',
  target: ['chrome69'],
  outfile: `${out}/app.js`,
  logLevel: 'info',
};
if (process.argv.includes('--watch')) {
  const ctx = await esbuild.context(opts);
  await ctx.watch();
} else {
  await esbuild.build(opts);
}
