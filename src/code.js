// background for everything below the hero: columns of this site's own code, drifting upward
const CODE = `const hero = document.getElementById("top");
const stage = hero.querySelector(".stage");
let queued = false;

const update = () => {
  queued = false;
  const travel = hero.offsetHeight - innerHeight;
  const p = Math.min(Math.max(scrollY / travel, 0), 1);
  stage.style.setProperty("--p", p.toFixed(4));

  // scroll is the throttle
  const g = Math.min(Math.floor(p * 5), 4);
  gear.textContent = p < 0.01 ? "N" : g + 1;
  speed.textContent = Math.round(p * 220);
};

addEventListener("scroll", () => {
  if (queued) return;
  queued = true;
  requestAnimationFrame(update);
}, { passive: true });

for (let z = -DEPTH; z < 8; z += 3.2) {
  for (const side of [-1, 1]) {
    const h = 1.5 + Math.random() ** 2 * 7;
    const geo = new BoxGeometry(w, h, w);
    mesh.position.set(side * 4, h / 2, z);
    scene.add(mesh);
  }
}

const bloom = new UnrealBloomPass(res, 0.75);
composer.addPass(new RenderPass(scene, camera));
composer.addPass(bloom);

function frame(t) {
  dist += dt * SPEED * (1 + p * 9);
  grid.position.z = dist % 2;
  camera.lookAt(look);
  composer.render();
}`.split("\n");

const COLORS = { kw: "#ff7cf6", str: "#7dffb3", num: "#ffd479", com: "#6f5f92", txt: "#cdbdf0" };
const TOKEN = /(\/\/.*$)|("(?:[^"\\]|\\.)*")|\b(const|let|function|return|if|for|of|new|await|async)\b|\b(\d[\d.]*)\b/g;
const FONT = "13px ui-monospace, Menlo, Consolas, monospace";
const LINE = 19;
const COL_CHARS = 46;

function paint(g, text, y) {
  let x = 0;
  let last = 0;
  const put = (s, color) => {
    g.fillStyle = color;
    g.fillText(s, x, y);
    x += g.measureText(s).width;
  };
  for (const m of text.matchAll(TOKEN)) {
    if (m.index > last) put(text.slice(last, m.index), COLORS.txt);
    put(m[0], m[1] ? COLORS.com : m[2] ? COLORS.str : m[3] ? COLORS.kw : COLORS.num);
    last = m.index + m[0].length;
  }
  if (last < text.length) put(text.slice(last), COLORS.txt);
}

// one pre-rendered strip per column, so each frame is just a few drawImage calls
function strip(shift, width) {
  const lines = [...CODE.slice(shift), ...CODE.slice(0, shift)];
  const c = document.createElement("canvas");
  c.width = width;
  c.height = lines.length * LINE;
  const g = c.getContext("2d");
  g.font = FONT;
  g.textBaseline = "top";
  lines.forEach((l, i) => paint(g, l, i * LINE));
  return c;
}

export function createCode(canvas) {
  const ctx = canvas.getContext("2d");
  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let cols = [];
  let on = false;
  let running = false;

  const build = () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    ctx.font = FONT;
    const colW = Math.ceil(ctx.measureText("M").width * COL_CHARS) + 40;
    cols = Array.from({ length: Math.ceil(innerWidth / colW) }, (_, i) => ({
      img: strip((i * 11) % CODE.length, colW),
      x: i * colW + 20,
      speed: 14 + ((i * 7) % 18),
      off: i * 230,
    }));
  };

  const draw = (t) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const c of cols) {
      for (let y = -((t * c.speed + c.off) % c.img.height); y < canvas.height; y += c.img.height) {
        ctx.drawImage(c.img, c.x, y);
      }
    }
  };

  const loop = (now) => {
    if (!running) return;
    draw(now / 1000);
    requestAnimationFrame(loop);
  };

  let resizeTimer;
  addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => cols.length && build(), 200);
  });

  return {
    // fades in below the hero; the loop only runs while it is visible
    toggle(next) {
      if (next === on) return;
      on = next;
      canvas.classList.toggle("on", on);
      if (on) {
        if (!cols.length) build();
        if (still) draw(0);
        else if (!running) {
          running = true;
          requestAnimationFrame(loop);
        }
      } else {
        setTimeout(() => {
          if (!on) running = false;
        }, 1300);
      }
    },
  };
}
