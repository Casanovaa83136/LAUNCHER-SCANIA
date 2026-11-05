// Camion 3D (tracteur cabine avancée) construit en code avec Three.js — aucun modèle externe.
// Repère : x = longueur (avant = +x), y = hauteur, z = largeur (côté droit visible = +z).
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import { toCreasedNormals } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

function radialTexture(stops, size = 256) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  for (const [o, col] of stops) grd.addColorStop(o, col);
  g.fillStyle = grd;
  g.fillRect(0, 0, size, size);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function box(w, h, d, mat, x, y, z, r = 0) {
  const geo = r > 0 ? new RoundedBoxGeometry(w, h, d, 3, r) : new THREE.BoxGeometry(w, h, d);
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  return m;
}

const MODEL_ROT = Math.PI / 2;
const MODEL_LENGTH = 6.3;
const MODEL_CENTER_X = -0.3;
// Points du trajet caméra pour le mode cockpit (repère du modèle normalisé)
const COCKPIT = {
  approach: [7.5, 3.0, -1.2],
  approachLook: [2.4, 2.4, -0.5],
  windshield: [3.6, 2.85, -0.5],
  eye: [1.62, 2.86, -0.5],
  look: [2.4, 2.5, -0.5],
  cluster: [2.34, 2.52, -0.5],
  clusterSize: [0.62, 0.24],
  clusterTilt: 0.35,
  fov: 58,
};

const MODEL_ANCHORS = [
  { id: 'moteur', u: 1.0, v: 0.45, w: 0, normal: [1, 0, 0] },
  { id: 'cabine', u: 0.74, v: 0.74, w: 1.02, normal: [0, 0, 1] },
  { id: 'freins', u: 0.86, v: 0.36, w: 1.05, normal: [0, 0, 1] },
  { id: 'pneus_av', u: 0.8, v: 0.1, w: 1.05, normal: [0, 0, 1] },
  { id: 'transmission', u: 0.46, v: 0.08, w: 0.75, normal: null },
  { id: 'carburant', u: 0.5, v: 0.27, w: 1.02, normal: [0, 0, 1] },
  { id: 'pneus_ar', u: 0.16, v: 0.1, w: 1.05, normal: [0, 0, 1] },
  { id: 'sellette', u: 0.2, v: 0.38, w: 0, normal: null },
];

export class Truck3D {
  constructor(container, { cabColor = '#e8ecf1', accent = '#3b82f6', axles = '4x2', quality = 'auto', modelUrl = null } = {}) {
    this.container = container;
    this.hotspots = [];
    this.running = false;
    this.autoRotate = true;
    this.lastFrame = 0;
    this.t0 = performance.now();
    this.userInteracting = false;
    this.idleSince = performance.now();

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    const dpr = window.devicePixelRatio || 1;
    renderer.setPixelRatio(quality === 'high' ? Math.min(dpr, 2) : quality === 'low' ? Math.min(dpr, 0.85) : Math.min(dpr, 1.25));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.92;
    renderer.domElement.className = 'truck-canvas';
    container.appendChild(renderer.domElement);
    this.renderer = renderer;

    const scene = new THREE.Scene();
    const pmrem = new THREE.PMREMGenerator(renderer);
    scene.environment = pmrem.fromScene(new RoomEnvironment(renderer), 0.04).texture;
    pmrem.dispose();
    this.scene = scene;

    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
    camera.position.set(7.0, 3.0, 7.4);
    this.camera = camera;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(-0.3, 1.6, 0);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.enablePan = false;
    controls.minDistance = 6;
    controls.maxDistance = 17;
    controls.minPolarAngle = 0.55;
    controls.maxPolarAngle = 1.5;
    controls.rotateSpeed = 0.7;
    controls.addEventListener('start', () => { this.userInteracting = true; this.wake(); });
    controls.addEventListener('end', () => { this.userInteracting = false; this.idleSince = performance.now(); });
    controls.addEventListener('change', () => this.wake());
    controls.update();
    this.controls = controls;
    this.baseAzimuth = controls.getAzimuthalAngle();

    // Lumières
    scene.add(new THREE.HemisphereLight(0xdfe9ff, 0x0d1016, 0.45));
    const key = new THREE.DirectionalLight(0xfff6ea, 2.4);
    key.position.set(9, 11, -3);
    scene.add(key);
    this.rim = new THREE.DirectionalLight(new THREE.Color(accent), 2.4);
    this.rim.position.set(-8, 4, -6);
    scene.add(this.rim);

    this.buildGround(accent);
    this.truck = new THREE.Group();
    scene.add(this.truck);
    this.buildTruck(cabColor, axles);
    this.cabColor = cabColor;
    if (modelUrl) this.loadModel(modelUrl);

    this.ro = new ResizeObserver(() => this.resize());
    this.ro.observe(container);
    this.resize();

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) this.stop(); else if (this.wanted) this.start();
    });
  }

  buildGround(accent) {
    // Podium tournant façon showroom
    const podium = new THREE.Mesh(
      new THREE.CylinderGeometry(4.9, 5.05, 0.22, 96),
      new THREE.MeshStandardMaterial({ color: 0x323a4d, metalness: 0.55, roughness: 0.35 }),
    );
    podium.position.y = -0.11;
    this.scene.add(podium);
    const top = new THREE.Mesh(
      new THREE.CircleGeometry(4.88, 96),
      new THREE.MeshBasicMaterial({
        map: radialTexture([[0, 'rgba(120,135,165,0.55)'], [0.7, 'rgba(70,80,105,0.35)'], [1, 'rgba(40,46,60,0.2)']]),
        transparent: true,
        depthWrite: false,
      }),
    );
    top.rotation.x = -Math.PI / 2;
    top.position.y = 0.002;
    this.scene.add(top);

    // Ombre de contact (fausse, très légère pour les petits GPU)
    const shadow = new THREE.Mesh(
      new THREE.PlaneGeometry(8.5, 3.6),
      new THREE.MeshBasicMaterial({
        map: radialTexture([[0, 'rgba(0,0,0,0.85)'], [0.6, 'rgba(0,0,0,0.45)'], [1, 'rgba(0,0,0,0)']]),
        transparent: true,
        depthWrite: false,
      }),
    );
    shadow.rotation.x = -Math.PI / 2;
    shadow.position.set(-0.55, 0.01, 0);
    this.scene.add(shadow);

    this.ringMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(accent), transparent: true, opacity: 0.55, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false });
    const ring = new THREE.Mesh(new THREE.RingGeometry(4.98, 5.06, 128), this.ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = -0.2;
    this.scene.add(ring);
    this.rings = [ring];
  }

  buildTruck(cabColor, axles) {
    const T = this.truck;
    while (T.children.length) T.remove(T.children[0]);

    const paint = new THREE.MeshStandardMaterial({ color: new THREE.Color(cabColor), metalness: 0.45, roughness: 0.28, envMapIntensity: 1.2 });
    this.paint = paint;
    const black = new THREE.MeshStandardMaterial({ color: 0x15171b, metalness: 0.3, roughness: 0.6 });
    const darkGrey = new THREE.MeshStandardMaterial({ color: 0x2a2e35, metalness: 0.5, roughness: 0.5 });
    const chrome = new THREE.MeshStandardMaterial({ color: 0xd9dde3, metalness: 1, roughness: 0.15 });
    const alu = new THREE.MeshStandardMaterial({ color: 0xbfc5cc, metalness: 0.9, roughness: 0.3 });
    const glass = new THREE.MeshStandardMaterial({ color: 0x0b1420, metalness: 0.9, roughness: 0.05, envMapIntensity: 1.6 });
    const lightMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xdfefff, emissiveIntensity: 2.2 });
    const amber = new THREE.MeshStandardMaterial({ color: 0xffa31a, emissive: 0xff8a00, emissiveIntensity: 1.6 });
    const redLight = new THREE.MeshStandardMaterial({ color: 0xff2a2a, emissive: 0xff1010, emissiveIntensity: 1.4 });
    const tireMat = new THREE.MeshStandardMaterial({ color: 0x111214, metalness: 0, roughness: 0.92 });

    // ---- Cabine ----
    const cab = new THREE.Group();
    T.add(cab);
    const CAB_FRONT = 2.45;
    const CAB_BACK = 0.2;
    const CAB_LEN = CAB_FRONT - CAB_BACK;
    const CAB_BOTTOM = 1.08;
    const CAB_H = 2.65;
    const CAB_W = 2.48;
    const cabCx = (CAB_FRONT + CAB_BACK) / 2;
    cab.add(box(CAB_LEN, CAB_H, CAB_W, paint, cabCx, CAB_BOTTOM + CAB_H / 2, 0, 0.16));
    // déflecteur de toit
    const roof = box(CAB_LEN - 0.5, 0.35, CAB_W - 0.15, paint, cabCx - 0.15, CAB_BOTTOM + CAB_H + 0.12, 0, 0.12);
    cab.add(roof);
    // pare-brise
    cab.add(box(0.05, 1.05, 2.2, glass, CAB_FRONT + 0.005, 2.78, 0, 0.02));
    // pare-soleil + feux de gabarit
    const visor = box(0.32, 0.1, 2.36, black, CAB_FRONT + 0.1, 3.45, 0);
    visor.rotation.z = -0.12;
    cab.add(visor);
    for (let i = -2; i <= 2; i++) cab.add(box(0.06, 0.05, 0.12, amber, CAB_FRONT + 0.26, 3.44, i * 0.42));
    // vitres latérales
    for (const s of [1, -1]) {
      cab.add(box(0.95, 0.75, 0.04, glass, CAB_FRONT - 0.62, 2.72, s * (CAB_W / 2 + 0.005), 0.015));
      // poignée & ligne de porte
      cab.add(box(0.03, 1.3, 0.02, darkGrey, CAB_FRONT - 1.2, 1.95, s * (CAB_W / 2 + 0.01)));
      cab.add(box(0.18, 0.04, 0.03, chrome, CAB_FRONT - 1.05, 2.2, s * (CAB_W / 2 + 0.02)));
      // rétroviseurs
      cab.add(box(0.5, 0.05, 0.05, black, CAB_FRONT - 0.05, 2.95, s * (CAB_W / 2 + 0.22)));
      const mirror = box(0.12, 0.62, 0.26, black, CAB_FRONT + 0.15, 2.75, s * (CAB_W / 2 + 0.4), 0.04);
      cab.add(mirror);
      cab.add(box(0.02, 0.55, 0.2, chrome, CAB_FRONT + 0.22, 2.75, s * (CAB_W / 2 + 0.4)));
      // marchepieds
      cab.add(box(0.85, 0.06, 0.32, alu, CAB_FRONT - 1.0, 0.62, s * (CAB_W / 2 - 0.12)));
      cab.add(box(0.85, 0.06, 0.32, alu, CAB_FRONT - 1.0, 0.92, s * (CAB_W / 2 - 0.12)));
      cab.add(box(0.95, 0.55, 0.06, black, CAB_FRONT - 1.0, 0.82, s * (CAB_W / 2 - 0.27)));
      // passage de roue avant
      const arch = new THREE.Mesh(new THREE.CylinderGeometry(0.66, 0.66, 0.4, 24, 1, true, 0, Math.PI), black);
      arch.rotation.x = Math.PI / 2;
      arch.rotation.y = Math.PI / 2;
      arch.position.set(1.62, 0.6, s * 1.05);
      arch.material = new THREE.MeshStandardMaterial({ color: 0x15171b, roughness: 0.7, side: THREE.DoubleSide });
      cab.add(arch);
    }
    // calandre
    cab.add(box(0.06, 0.85, 1.75, black, CAB_FRONT + 0.01, 1.72, 0, 0.03));
    for (let i = 0; i < 4; i++) cab.add(box(0.03, 0.04, 1.6, chrome, CAB_FRONT + 0.05, 1.42 + i * 0.2, 0));
    // pare-chocs
    cab.add(box(0.36, 0.48, CAB_W + 0.04, darkGrey, CAB_FRONT + 0.04, 0.98, 0, 0.06));
    cab.add(box(0.02, 0.06, 1.2, black, CAB_FRONT + 0.23, 0.82, 0));
    // phares + feux de jour LED
    for (const s of [1, -1]) {
      cab.add(box(0.06, 0.2, 0.5, lightMat, CAB_FRONT + 0.2, 1.08, s * 0.9, 0.03));
      cab.add(box(0.03, 0.04, 0.55, lightMat, CAB_FRONT + 0.24, 1.22, s * 0.9));
      cab.add(box(0.05, 0.08, 0.12, amber, CAB_FRONT + 0.2, 1.08, s * 1.2));
    }
    // bande décorative sous pare-brise
    cab.add(box(0.03, 0.05, 2.0, chrome, CAB_FRONT + 0.02, 2.2, 0));

    // ---- Châssis ----
    const nRear = axles === '4x2' ? 1 : 2;
    const rearX = nRear === 1 ? [-2.2] : [-1.85, -3.2];
    const chassisEnd = rearX[rearX.length - 1] - 1.25;
    const chassisLen = CAB_FRONT - 0.1 - chassisEnd;
    for (const s of [1, -1]) T.add(box(chassisLen, 0.3, 0.1, black, chassisEnd + chassisLen / 2, 0.88, s * 0.44));
    for (let x = chassisEnd + 0.3; x < CAB_FRONT; x += 1.1) T.add(box(0.08, 0.2, 0.8, black, x, 0.88, 0));

    // réservoir gasoil (côté +z) + AdBlue
    const tank = new THREE.Mesh(new RoundedBoxGeometry(1.55, 0.62, 0.62, 4, 0.22), alu);
    tank.position.set(-0.55, 0.78, 0.86);
    T.add(tank);
    for (const dx of [-0.6, 0.6]) T.add(box(0.06, 0.66, 0.66, black, -0.55 + dx, 0.78, 0.86));
    T.add(box(0.12, 0.08, 0.12, black, -0.15, 1.12, 0.86));
    const adblue = new THREE.Mesh(new RoundedBoxGeometry(0.45, 0.5, 0.5, 3, 0.12), new THREE.MeshStandardMaterial({ color: 0x1d4ed8, metalness: 0.2, roughness: 0.4 }));
    adblue.position.set(-1.6 + (nRear === 1 ? 0.3 : 0.55), 0.8, 0.9);
    if (nRear === 1) T.add(adblue);
    // batteries / silencieux (côté -z)
    T.add(box(1.0, 0.6, 0.55, darkGrey, -0.5, 0.8, -0.88, 0.06));
    T.add(box(0.6, 0.5, 0.5, alu, 0.05, 0.85, -0.92, 0.1));
    // capots arrière de cabine (carénages)
    for (const s of [1, -1]) T.add(box(0.06, 1.8, 0.35, paint, CAB_BACK - 0.03, 2.2, s * (CAB_W / 2 - 0.17), 0.03));

    // sellette
    const fifthX = nRear === 1 ? -2.15 : -2.5;
    const sellette = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.62, 0.1, 32), darkGrey);
    sellette.position.set(fifthX, 1.24, 0);
    T.add(sellette);
    T.add(box(0.9, 0.18, 1.0, black, fifthX, 1.12, 0));
    const slot = box(0.75, 0.11, 0.12, black, fifthX - 0.3, 1.25, 0);
    T.add(slot);

    // ---- Roues ----
    const wheel = (x, z, twin) => {
      const g = new THREE.Group();
      const mk = (dz) => {
        const tire = new THREE.Mesh(new THREE.CylinderGeometry(0.53, 0.53, 0.32, 36), tireMat);
        tire.rotation.x = Math.PI / 2;
        tire.position.z = dz;
        g.add(tire);
        const side = new THREE.Mesh(new THREE.TorusGeometry(0.44, 0.09, 10, 36), tireMat);
        side.position.z = dz + Math.sign(z) * 0.16;
        g.add(side);
        const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.33, 24), alu);
        rim.rotation.x = Math.PI / 2;
        rim.position.z = dz;
        g.add(rim);
      };
      if (twin) { mk(-0.17); mk(0.17); } else mk(0);
      const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.14, 0.12, 16), chrome);
      hub.rotation.x = Math.PI / 2;
      hub.position.z = Math.sign(z) * (twin ? 0.36 : 0.2);
      g.add(hub);
      for (let i = 0; i < 10; i++) {
        const a = (i / 10) * Math.PI * 2;
        const nut = box(0.035, 0.035, 0.05, chrome, Math.cos(a) * 0.2, Math.sin(a) * 0.2, Math.sign(z) * (twin ? 0.34 : 0.18));
        g.add(nut);
      }
      g.position.set(x, 0.53, z);
      T.add(g);
      // essieu
    };
    for (const s of [1, -1]) wheel(1.62, s * 1.05, false);
    rearX.forEach((x, i) => {
      const twin = axles === '6x4' || i === 0;
      for (const s of [1, -1]) wheel(x, s * (twin ? 0.92 : 1.05), twin);
      T.add(box(0.14, 0.14, 1.9, darkGrey, x, 0.53, 0));
    });
    T.add(box(0.14, 0.14, 1.9, darkGrey, 1.62, 0.53, 0));

    // ailes arrière + bavettes + feux arrière
    const fenderMat = new THREE.MeshStandardMaterial({ color: 0x15171b, roughness: 0.7, side: THREE.DoubleSide });
    for (const s of [1, -1]) {
      const fx = (rearX[0] + rearX[rearX.length - 1]) / 2;
      const len = rearX.length === 1 ? 0.62 : 1.0;
      if (rearX.length === 1) {
        const fender = new THREE.Mesh(new THREE.CylinderGeometry(len, len, 0.72, 24, 1, true, 0, Math.PI), fenderMat);
        fender.rotation.set(Math.PI / 2, Math.PI / 2, 0);
        fender.position.set(fx, 0.62, s * 0.92);
        T.add(fender);
      } else {
        T.add(box(2.4, 0.05, 0.72, fenderMat, fx, 1.18, s * 0.92));
      }
      T.add(box(0.03, 0.55, 0.6, black, chassisEnd + 0.35, 0.45, s * 0.92));
      T.add(box(0.06, 0.12, 0.4, redLight, chassisEnd + 0.05, 0.9, s * 0.95));
      T.add(box(0.06, 0.12, 0.14, amber, chassisEnd + 0.05, 0.9, s * 1.22));
    }
    T.add(box(0.08, 0.1, 2.3, darkGrey, chassisEnd + 0.04, 0.78, 0));

    // échappement vertical derrière la cabine
    const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 1.6, 16), chrome);
    pipe.position.set(CAB_BACK - 0.18, 2.6, -0.95);
    T.add(pipe);

    this.rearX = rearX;
    this.fifthX = fifthX;
    this.defineHotspots();
  }

  defineHotspots() {
    const r = this.rearX;
    this.anchorDefs = [
      { id: 'moteur', pos: [2.72, 1.75, 0], normal: [1, 0, 0] },
      { id: 'cabine', pos: [1.3, 3.15, 1.3], normal: [0, 0, 1] },
      { id: 'freins', pos: [1.62, 1.35, 1.3], normal: [0, 0, 1] },
      { id: 'pneus_av', pos: [1.62, 0.5, 1.3], normal: [0, 0, 1] },
      { id: 'transmission', pos: [0.15, 0.7, 0.9], normal: [0, 0, 1] },
      { id: 'carburant', pos: [-0.65, 0.85, 1.25], normal: [0, 0, 1] },
      { id: 'pneus_ar', pos: [r[0], 0.5, 1.35], normal: [0, 0, 1] },
      { id: 'sellette', pos: [this.fifthX, 1.55, 0], normal: null },
    ];
  }

  // Modèle 3D réel (GLB). Le camion dessiné en code reste affiché si le chargement échoue.
  loadModel(url) {
    const loader = new GLTFLoader();
    loader.setMeshoptDecoder(MeshoptDecoder);
    loader.load(url, (gltf) => {
      const model = gltf.scene;
      // Le modèle est orienté sur l'axe z : on le tourne pour que l'avant regarde +x
      model.rotation.y = MODEL_ROT;
      model.updateMatrixWorld(true);
      let box = new THREE.Box3().setFromObject(model);
      const size = box.getSize(new THREE.Vector3());
      const scale = MODEL_LENGTH / size.x;
      model.scale.setScalar(scale);
      model.updateMatrixWorld(true);
      box = new THREE.Box3().setFromObject(model);
      const c = box.getCenter(new THREE.Vector3());
      model.position.set(MODEL_CENTER_X - c.x, -box.min.y, -c.z);
      model.updateMatrixWorld(true);
      this.modelBox = new THREE.Box3().setFromObject(model);

      this.modelPaints = [];
      const cache = {};
      model.traverse((o) => {
        if (!o.isMesh) return;
        const swap = (m) => {
          const key = m.name || m.uuid;
          if (!cache[key]) cache[key] = this.makeModelMaterial(m);
          return cache[key];
        };
        // Les normales d'origine de la carrosserie font des « bosses » : on les recalcule (angle vif conservé)
        if (!Array.isArray(o.material) && o.material.name === 'carpaint') {
          try { o.geometry = toCreasedNormals(o.geometry, Math.PI / 5); } catch (e) { /* on garde l'original */ }
        }
        o.material = Array.isArray(o.material) ? o.material.map(swap) : swap(o.material);
      });
      this.scene.add(model);
      this.model = model;
      this.truck.visible = false;
      this.defineModelHotspots();
      this.buildCluster();
      if (this.onModelReady) this.onModelReady();
      this.wake();
    }, undefined, (err) => console.warn('Modèle 3D non chargé, camion dessiné utilisé', err));
  }

  // Le modèle fourni a des matériaux génériques (tout en plastique gris, vitres opaques) :
  // on les remplace par de vrais matériaux PBR selon leur nom.
  makeModelMaterial(src) {
    const n = (src.name || '').toLowerCase();
    const base = src.color ? src.color.clone() : new THREE.Color(0x888888);
    const alpha = src.opacity !== undefined && src.opacity < 1 ? src.opacity : 1;
    const std = (o) => new THREE.MeshStandardMaterial({ color: base, ...o });
    const glass = (color, opacity, extra = {}) => new THREE.MeshPhysicalMaterial({
      color, metalness: 0, roughness: 0.03, transparent: true, opacity, depthWrite: false,
      clearcoat: 1, clearcoatRoughness: 0.02, envMapIntensity: 2.2, side: THREE.DoubleSide, ...extra,
    });
    switch (n) {
      case 'carpaint': {
        const m = new THREE.MeshPhysicalMaterial({
          color: new THREE.Color(this.cabColor), metalness: 0.35, roughness: 0.38,
          clearcoat: 0.7, clearcoatRoughness: 0.08, envMapIntensity: 0.5,
        });
        this.modelPaints.push(m);
        return m;
      }
      case 'chrome': return std({ color: 0xf2f4f7, metalness: 1, roughness: 0.07, envMapIntensity: 1.6 });
      case 'mirror': return std({ color: 0xffffff, metalness: 1, roughness: 0.02, envMapIntensity: 2 });
      case 'rim': return std({ color: 0xc9ced6, metalness: 1, roughness: 0.22, envMapIntensity: 1.4 });
      case 'mattemetal': return std({ color: 0x8a9099, metalness: 0.85, roughness: 0.45 });
      case 'tire': return std({ color: 0x141414, metalness: 0, roughness: 0.92, envMapIntensity: 0.4 });
      case 'black': return std({ color: 0x0c0d0f, metalness: 0.15, roughness: 0.55, envMapIntensity: 0.8 });
      case 'interior': return std({ color: 0x2a2b2e, metalness: 0, roughness: 0.85, envMapIntensity: 0.5 });
      case 'windowglass': this.windowGlass = glass(0x0a0f17, 0.82, { metalness: 0.2 }); return this.windowGlass;
      case 'clearglass': return glass(0xffffff, 0.18);
      case 'orangeglass': return glass(0xff8a1a, 0.85, { emissive: new THREE.Color(0xff6a00), emissiveIntensity: 0.35 });
      case 'redglass': return glass(0xff1a1a, 0.85, { emissive: new THREE.Color(0xff0000), emissiveIntensity: 0.35 });
      case 'yellow': return std({ color: base, metalness: 0, roughness: 0.3, emissive: new THREE.Color(0xffc400), emissiveIntensity: 0.5 });
      default:
        return std({
          metalness: 0.1, roughness: 0.45,
          ...(alpha < 1 ? { transparent: true, opacity: alpha, depthWrite: false } : {}),
        });
    }
  }

  // Positions des carrés sur le vrai modèle, en proportions de sa boîte englobante.
  // u : 0 = arrière, 1 = avant ; v : 0 = sol, 1 = toit ; w : -1 = gauche, +1 = droite (côté visible)
  defineModelHotspots() {
    const b = this.modelBox;
    const P = (u, v, w) => [b.min.x + u * (b.max.x - b.min.x), b.min.y + v * (b.max.y - b.min.y), w * b.max.z];
    this.anchorDefs = MODEL_ANCHORS.map((a) => ({ id: a.id, pos: P(a.u, a.v, a.w), normal: a.normal }));
  }

  setCabColor(c) {
    this.cabColor = c;
    this.paint.color.set(c);
    if (this.modelPaints) this.modelPaints.forEach((m) => m.color.set(c));
    this.wake();
  }
  setAccent(c) { this.ringMat.color.set(c); this.rim.color.set(c); this.wake(); }
  setAxles(a, cabColor) {
    this.buildTruck(cabColor, a);
    if (this.model) { this.truck.visible = false; this.defineModelHotspots(); }
    this.wake();
  }

  // hotspots : [{ id, node }] -> les éléments HTML sont positionnés par-dessus le canvas
  bindHotspots(list) { this.hotspots = list; this.wake(); }

  resize() {
    const w = this.container.clientWidth || 1;
    const h = this.container.clientHeight || 1;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    // garder le camion entier dans le cadre, même sur écran étroit
    this.camera.fov = w / h < 1.25 ? 40 : 32;
    this.camera.updateProjectionMatrix();
    this.wake();
  }

  wake() { this.dirtyUntil = performance.now() + 600; }

  start() {
    this.wanted = true;
    if (this.running) return;
    this.running = true;
    this.idleSince = performance.now();
    const loop = (t) => {
      if (!this.running) return;
      this.raf = requestAnimationFrame(loop);
      if (t - this.lastFrame < 32) return; // ~30 i/s, suffisant et doux pour le GPU
      this.lastFrame = t;
      this.frame(t);
    };
    this.raf = requestAnimationFrame(loop);
  }

  stop(keepWanted = true) {
    this.running = false;
    if (!keepWanted) this.wanted = false;
    cancelAnimationFrame(this.raf);
  }

  frame(t) {
    const c = this.controls;
    if (this.anim || this.inCockpit) {
      this.stepAnim(t);
      this.ringMat.opacity = 0.4 + Math.sin(t / 700) * 0.2;
      if (this.inCockpit && this.clusterDraw && t - (this.lastCluster || 0) > 500) { this.lastCluster = t; this.redrawCluster(); }
      this.renderer.render(this.scene, this.camera);
      return;
    }
    // rotation lente gauche/droite après 4 s sans toucher
    if (this.autoRotate && !this.userInteracting && t - this.idleSince > 4000) {
      const target = this.baseAzimuth + Math.sin((t - this.t0) / 9000) * 0.55;
      const cur = c.getAzimuthalAngle();
      const step = (target - cur) * 0.02;
      // rotation de la caméra autour de la cible
      const off = this.camera.position.clone().sub(c.target);
      off.applyAxisAngle(new THREE.Vector3(0, 1, 0), step);
      this.camera.position.copy(c.target).add(off);
      this.dirtyUntil = t + 100;
    }
    const pulse = 0.4 + Math.sin(t / 700) * 0.2;
    this.ringMat.opacity = pulse;
    c.update();
    this.renderer.render(this.scene, this.camera);
    this.placeHotspots();
  }

  // ---------------- Mode cockpit : zoom de l'extérieur jusqu'au compteur ----------------
  get hasCockpit() { return !!this.cluster; }

  buildCluster() {
    const W = 1024;
    const H = 400;
    const canvas = document.createElement('canvas');
    canvas.width = W;
    canvas.height = H;
    this.clusterCanvas = canvas;
    this.clusterTex = new THREE.CanvasTexture(canvas);
    this.clusterTex.colorSpace = THREE.SRGBColorSpace;
    this.clusterTex.anisotropy = 4;
    const mat = new THREE.MeshBasicMaterial({ map: this.clusterTex, toneMapped: false });
    const plane = new THREE.Mesh(new THREE.PlaneGeometry(COCKPIT.clusterSize[0], COCKPIT.clusterSize[1]), mat);
    plane.position.set(...COCKPIT.cluster);
    plane.rotation.order = 'YXZ';
    plane.rotation.y = -Math.PI / 2; // face au chauffeur (regarde -x)
    plane.rotation.x = -COCKPIT.clusterTilt;
    this.scene.add(plane);
    this.cluster = plane;
    this.redrawCluster();
  }

  setClusterDrawer(fn) { this.clusterDraw = fn; if (this.cluster) this.redrawCluster(); }

  redrawCluster() {
    if (!this.clusterCanvas) return;
    const g = this.clusterCanvas.getContext('2d');
    g.clearRect(0, 0, this.clusterCanvas.width, this.clusterCanvas.height);
    if (this.clusterDraw) this.clusterDraw(g, this.clusterCanvas.width, this.clusterCanvas.height);
    this.clusterTex.needsUpdate = true;
    this.wake();
  }

  // Trajet de la caméra : position actuelle → devant le pare-brise → yeux du chauffeur
  enterCockpit(done) {
    if (!this.cluster || this.inCockpit || this.anim) return false;
    this.saved = { pos: this.camera.position.clone(), target: this.controls.target.clone(), fov: this.camera.fov };
    this.controls.enabled = false;
    this.container.classList.add('cockpit');
    const pos = new THREE.CatmullRomCurve3([this.camera.position.clone(), new THREE.Vector3(...COCKPIT.approach), new THREE.Vector3(...COCKPIT.windshield), new THREE.Vector3(...COCKPIT.eye)]);
    const tgt = new THREE.CatmullRomCurve3([this.controls.target.clone(), new THREE.Vector3(...COCKPIT.approachLook), new THREE.Vector3(...COCKPIT.look)]);
    this.startAnim(pos, tgt, this.camera.fov, COCKPIT.fov, 2200, 0.82, 0.3, () => { this.inCockpit = true; done && done(); });
    return true;
  }

  exitCockpit(done) {
    if (!this.inCockpit || this.anim) return;
    this.inCockpit = false;
    const s = this.saved;
    const pos = new THREE.CatmullRomCurve3([this.camera.position.clone(), new THREE.Vector3(...COCKPIT.windshield), new THREE.Vector3(...COCKPIT.approach), s.pos]);
    const tgt = new THREE.CatmullRomCurve3([this.controls.target.clone(), new THREE.Vector3(...COCKPIT.approachLook), s.target]);
    this.startAnim(pos, tgt, this.camera.fov, s.fov, 1800, 0.3, 0.82, () => {
      this.controls.enabled = true;
      this.container.classList.remove('cockpit');
      this.idleSince = performance.now();
      done && done();
    });
  }

  // Retour immédiat à la vue extérieure (quand on change d'écran)
  cancelCockpit() {
    if (!this.saved || (!this.inCockpit && !this.anim)) return;
    this.anim = null;
    this.inCockpit = false;
    this.camera.position.copy(this.saved.pos);
    this.controls.target.copy(this.saved.target);
    this.camera.fov = this.saved.fov;
    this.camera.near = 0.1;
    this.camera.updateProjectionMatrix();
    if (this.windowGlass) this.windowGlass.opacity = 0.82;
    this.controls.enabled = true;
    this.container.classList.remove('cockpit');
    this.wake();
  }

  startAnim(posCurve, tgtCurve, fov0, fov1, ms, glass0, glass1, done) {
    this.anim = { posCurve, tgtCurve, fov0, fov1, glass0, glass1, start: performance.now(), ms, done };
    this.wake();
  }

  stepAnim(t) {
    const a = this.anim;
    if (!a) return;
    let k = Math.min(1, (t - a.start) / a.ms);
    if (k < 0) k = 0;
    const e = k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2; // ease-in-out
    this.camera.position.copy(a.posCurve.getPoint(e));
    this.camera.fov = a.fov0 + (a.fov1 - a.fov0) * e;
    this.camera.near = 0.03 + (1 - e) * 0.07;
    this.camera.updateProjectionMatrix();
    const target = a.tgtCurve.getPoint(e);
    this.controls.target.copy(target);
    this.camera.lookAt(target);
    if (this.windowGlass) this.windowGlass.opacity = a.glass0 + (a.glass1 - a.glass0) * e;
    if (k >= 1) {
      this.anim = null;
      a.done && a.done();
    }
  }

  placeHotspots() {
    const w = this.container.clientWidth;
    const h = this.container.clientHeight;
    const v = new THREE.Vector3();
    const camDir = new THREE.Vector3();
    for (const hs of this.hotspots) {
      const def = this.anchorDefs.find((d) => d.id === hs.id);
      if (!def) { hs.node.style.display = 'none'; continue; }
      v.set(...def.pos).project(this.camera);
      const x = (v.x * 0.5 + 0.5) * w;
      const y = (-v.y * 0.5 + 0.5) * h;
      let facing = 1;
      if (def.normal) {
        camDir.copy(this.camera.position).sub(new THREE.Vector3(...def.pos)).normalize();
        facing = camDir.dot(new THREE.Vector3(...def.normal));
      }
      hs.node.style.display = '';
      hs.node.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
      hs.node.classList.toggle('behind', facing < -0.05);
    }
  }
}
