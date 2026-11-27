import * as THREE from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";

const VIOLET = new THREE.Color(0x8b00ff);
const MAGENTA = new THREE.Color(0xe100ff);
const SPEED = 2.2;
const DEPTH = 70;

// driver's-eye view down a neon road lined with glowing monoliths, toward a magenta sun
export function start(canvas) {
  const small = innerWidth < 768;
  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: !small });
  renderer.setPixelRatio(Math.min(devicePixelRatio, small ? 1.5 : 2));

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x12002b);
  scene.fog = new THREE.FogExp2(0x2a0060, 0.035);

  // right-hand drive: eye sits right of the lane centre, pitched down so the dash doesn't hide the road
  const camera = new THREE.PerspectiveCamera(62, 1, 0.1, 200);
  camera.position.set(0.35, 1.15, 8);
  const look = new THREE.Vector3(0.35, -3.6, -28);

  const grid = new THREE.GridHelper(160, 80, VIOLET.clone().multiplyScalar(1.5), VIOLET.clone().multiplyScalar(0.7));
  scene.add(grid);

  // left-hand traffic: dashed centre line on the right, solid edge lines
  const edge = new THREE.MeshBasicMaterial({ color: VIOLET.clone().multiplyScalar(1.3) });
  for (const x of [-1.9, 5.6]) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.02, DEPTH + 20), edge);
    m.position.set(x, 0.02, -DEPTH / 2 + 5);
    scene.add(m);
  }
  const dashMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.0, 0.85, 1.15) });
  const dashes = Array.from({ length: 14 }, () => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.02, 2.2), dashMat);
    m.position.set(1.9, 0.02, 0);
    scene.add(m);
    return m;
  });

  const sun = new THREE.Mesh(
    new THREE.CircleGeometry(6, 64),
    new THREE.MeshBasicMaterial({ color: MAGENTA.clone().multiplyScalar(1.4), fog: false })
  );
  sun.position.set(small ? 6 : 30, 10, -60);
  scene.add(sun);

  const body = new THREE.MeshBasicMaterial({ color: 0x1a0040 });
  const monoliths = [];
  for (let z = -DEPTH + 8; z < 8; z += 3.2) {
    for (const side of [-1, 1]) {
      if (Math.random() < 0.25) continue;
      const w = 0.6 + Math.random() * 1.2;
      const h = 1.5 + Math.random() ** 2 * 7;
      const geo = new THREE.BoxGeometry(w, h, w);
      const edge = VIOLET.clone().lerp(MAGENTA, Math.random() * 0.6).multiplyScalar(0.9 + Math.random() * 0.7);
      const m = new THREE.Mesh(geo, body);
      m.add(new THREE.LineSegments(new THREE.EdgesGeometry(geo), new THREE.LineBasicMaterial({ color: edge })));
      m.position.set(side * (3.2 + Math.random() * 6), h / 2, z + Math.random() * 2);
      scene.add(m);
      monoliths.push(m);
    }
  }

  const count = small ? 500 : 1400;
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 40;
    pos[i * 3 + 1] = Math.random() * 14;
    pos[i * 3 + 2] = -Math.random() * DEPTH + 8;
  }
  const dustGeo = new THREE.BufferGeometry();
  dustGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  const dust = new THREE.Points(
    dustGeo,
    new THREE.PointsMaterial({ color: 0xc78bff, size: 0.07, transparent: true, opacity: 0.8, depthWrite: false })
  );
  scene.add(dust);

  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 1.0, 0.6, 0.1);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());

  const hero = canvas.closest(".hero");
  let travel = 1;
  const resize = () => {
    const { clientWidth: w, clientHeight: h } = canvas;
    travel = Math.max(hero.offsetHeight - innerHeight, 1);
    renderer.setSize(w, h, false);
    composer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    if (still) composer.render();
  };
  new ResizeObserver(resize).observe(canvas);
  resize();

  const pointer = { x: 0, y: 0 };
  addEventListener("pointermove", (e) => {
    pointer.x = e.clientX / innerWidth - 0.5;
    pointer.y = e.clientY / innerHeight - 0.5;
  });

  const t0 = performance.now();
  let last = 0;
  let dist = 0;
  let p = 0;
  const frame = () => {
    const t = (performance.now() - t0) / 1000;
    const dt = Math.min(t - last, 0.05);
    last = t;

    // scroll progress through the hero, eased so wheel notches don't jerk the camera
    p += (Math.min(Math.max(scrollY / travel, 0), 1) - p) * 0.08;
    const v = SPEED * (1 + p * 9);
    dist += dt * v;

    grid.position.z = dist % 2;
    dashes.forEach((m, k) => (m.position.z = 8 - k * 5.5 + (dist % 5.5)));
    for (const m of monoliths) {
      m.position.z += dt * v;
      if (m.position.z > 10) m.position.z -= DEPTH;
    }
    for (let i = 0; i < count; i++) {
      const k = i * 3;
      pos[k + 1] += dt * 0.25;
      pos[k + 2] += dt * v;
      if (pos[k + 1] > 14) pos[k + 1] = 0;
      if (pos[k + 2] > 10) pos[k + 2] -= DEPTH;
    }
    dustGeo.attributes.position.needsUpdate = true;
    sun.scale.setScalar((1 + Math.sin(t * 0.6) * 0.04) * (1 + p * 1.4));
    camera.fov = 62 + p * 22;
    camera.updateProjectionMatrix();
    bloom.strength = 1 + p * 1.1;

    // head sways with the mouse; the road shakes a little at speed
    camera.position.x += (0.35 + pointer.x * 0.25 - camera.position.x) * 0.05;
    camera.position.y = 1.15 - pointer.y * 0.08 + (Math.sin(t * 38) * 0.003 + Math.sin(t * 11) * 0.002) * p;
    look.x = 0.35 + pointer.x * 5;
    look.y = -3.6 - pointer.y * 1.2;
    camera.lookAt(look);
    composer.render();
  };

  if (still) {
    frame();
    return;
  }

  // only run while the hero is on screen
  new IntersectionObserver(([e]) => renderer.setAnimationLoop(e.isIntersecting ? frame : null)).observe(canvas);
}
