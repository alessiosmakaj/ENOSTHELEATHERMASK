// Petrolio: più lento e persistente del sangue, colata densa che si allunga a fatica.
const OIL_LIFE = 7000;
// Sangue: resta pieno mentre cola, poi sfuma per gli ultimi 3 secondi.
const BLOOD_LIFE = 5500;
const BLOOD_FADE = 3000;
const COLORS = ['#9c2333', '#8a1c2b', '#6e1420', '#b02a3c', '#5a0f19'];

// Lattice/petrolio: nero lucido, più denso e lento del sangue.
const OIL_COLORS = ['#020203', '#060608', '#0c0c10', '#000000'];

interface Drop {
  oil: boolean;
  born: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  color: string;
  trail: { x: number; y: number }[];
  still: boolean;
  flight: number;
}

interface Drip {
  oil: boolean;
  born: number;
  delay: number;
  x: number;
  y: number;
  w: number;
  max: number;
  k: number;
  seed: number;
  color: string;
}

interface Ray {
  born: number;
  x: number;
  y: number;
  a: number;
  len: number;
  w: number;
  color: string;
}

const drops: Drop[] = [];
const drips: Drip[] = [];
const rays: Ray[] = [];
let canvas: HTMLCanvasElement | null = null;
let ctx: CanvasRenderingContext2D | null = null;
let running = false;
let last = 0;

const rand = (min: number, max: number) => min + Math.random() * (max - min);
const pick = (palette: string[]) => palette[Math.floor(Math.random() * palette.length)];
const fadeAlpha = (age: number, oil: boolean) => Math.min(1, Math.max(0, ((oil ? OIL_LIFE : BLOOD_LIFE) - age) / BLOOD_FADE));

function ensureCanvas(): void {
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.setAttribute('aria-hidden', 'true');
    canvas.style.cssText = 'position:fixed;inset:0;width:100vw;height:100vh;pointer-events:none;z-index:3000';
    document.body.appendChild(canvas);
    ctx = canvas.getContext('2d');
  }
  canvas.style.display = 'block';
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const w = Math.round(window.innerWidth * dpr);
  const h = Math.round(window.innerHeight * dpr);
  if (canvas.width !== w || canvas.height !== h) {
    canvas.width = w;
    canvas.height = h;
  }
}

function addDrip(born: number, x: number, y: number, r: number, color: string, big: boolean, oil: boolean): void {
  drips.push({
    born,
    oil,
    delay: oil ? rand(500, big ? 1200 : 2000) : rand(250, big ? 900 : 1600),
    x,
    y: y + r * 0.4,
    w: Math.max(oil ? 2.4 : 1.6, r * (oil ? rand(0.55, 0.8) : rand(0.45, 0.7))),
    max: oil ? (big ? rand(110, 240) : rand(40, 130)) : (big ? rand(70, 170) : rand(25, 90)),
    k: oil ? rand(0.00018, 0.00038) : rand(0.00045, 0.0009),
    seed: rand(0, 100),
    color
  });
}

export function splatBlood(x: number, y: number, oil = false): void {
  ensureCanvas();
  const born = performance.now();
  const palette = oil ? OIL_COLORS : COLORS;

  // Macchia centrale: resta ferma e sfuma con il resto.
  const blobs = oil ? 18 : 16;
  for (let i = 0; i < blobs; i++) {
    const a = rand(0, Math.PI * 2);
    const d = rand(0, oil ? 30 : 20);
    const r = oil ? rand(3, 8) : rand(3, 10);
    const color = pick(palette);
    drops.push({ oil, born, x: x + Math.cos(a) * d, y: y + Math.sin(a) * d, vx: 0, vy: 0, r, color, trail: [], still: true, flight: 0 });
    if (i < (oil ? 3 : 4)) { addDrip(born, x + Math.cos(a) * d, y + Math.sin(a) * d, r, color, true, oil); }
  }

  if (!oil) {
    // Raggi sottili che si irradiano dal centro, tipici dello schizzo reale.
    for (let i = 0; i < 12; i++) {
      rays.push({ born, x, y, a: rand(0, Math.PI * 2), len: rand(18, 70), w: rand(1.5, 4), color: pick(palette) });
    }
  }

  // Gocce proiettate verso l'esterno: le piccole sono veloci, le grandi pesanti.
  const count = Math.round(rand(45, 70));
  for (let i = 0; i < count; i++) {
    const a = rand(0, Math.PI * 2);
    const r = rand(1.4, oil ? 6.5 : 6) * (Math.random() < 0.12 ? 1.6 : 1);
    const speed = rand(3, 16) * (1 - r / 14) * (oil ? 0.75 : 1);
    drops.push({ oil, born, x, y, vx: Math.cos(a) * speed, vy: Math.sin(a) * speed - rand(0, 3), r, color: pick(palette), trail: [], still: false, flight: rand(10, 38) });
  }

  if (!running) {
    running = true;
    last = born;
    requestAnimationFrame(frame);
  }
}

// Petrolio: filo denso che si assottiglia man mano che si stira, goccia allungata in punta,
// bordo chiaro sottile e riflesso freddo lungo un lato (senza il "pallino" tondo del sangue).
function drawOilDrip(c: CanvasRenderingContext2D, d: Drip, len: number, steps: number): void {
  const pts: { x: number; y: number; w: number }[] = [];
  for (let i = 0; i <= steps; i++) {
    const u = i / steps;
    const y = d.y + len * u;
    // Larghezza irregolare, molto più stretta verso il basso: il fluido denso si stira.
    const w = d.w * (1 - 0.6 * u) * (1 + 0.08 * Math.sin(y * 0.12 + d.seed));
    pts.push({ x: d.x + Math.sin(y * 0.02 + d.seed) * 0.5, y, w: Math.max(1.2, w) });
  }
  const tip = pts[pts.length - 1];
  const stroke = (color: string, extra: number) => {
    c.strokeStyle = color;
    for (let i = 1; i < pts.length; i++) {
      c.lineWidth = pts[i].w + extra;
      c.beginPath();
      c.moveTo(pts[i - 1].x, pts[i - 1].y);
      c.lineTo(pts[i].x, pts[i].y);
      c.stroke();
    }
    c.fillStyle = color;
    c.beginPath();
    c.ellipse(tip.x, tip.y + tip.w * 0.6, tip.w * 0.55 + extra / 2, tip.w * 1.15 + extra / 2, 0, 0, Math.PI * 2);
    c.fill();
  };
  stroke('rgba(150, 165, 190, 0.26)', 1.6);
  stroke(d.color, 0);
  c.strokeStyle = 'rgba(210, 225, 255, 0.32)';
  c.lineWidth = Math.max(0.7, d.w * 0.16);
  c.beginPath();
  c.moveTo(d.x - d.w * 0.22, d.y + d.w * 0.4);
  c.lineTo(tip.x - tip.w * 0.2, tip.y);
  c.stroke();
}

function drawDrip(c: CanvasRenderingContext2D, d: Drip, age: number): void {
  const t = age - d.delay;
  if (t <= 0) { return; }
  // Cresce piano piano: ease-out, la colata rallenta man mano che si allunga.
  const len = d.max * (1 - Math.exp(-d.k * t));
  const steps = Math.max(1, Math.ceil(len / 5));
  c.lineCap = 'round';

  if (d.oil) {
    drawOilDrip(c, d, len, steps);
    return;
  }

  c.strokeStyle = d.color;
  let px = d.x;
  let py = d.y;
  for (let i = 1; i <= steps; i++) {
    const u = i / steps;
    const y = d.y + len * u;
    const x = d.x + Math.sin(y * 0.045 + d.seed) * 0.9;
    c.lineWidth = d.w * (1 - 0.4 * u);
    c.beginPath();
    c.moveTo(px, py);
    c.lineTo(x, y);
    c.stroke();
    px = x;
    py = y;
  }
  // Goccia più grossa in testa alla colata + riflesso umido lungo il filo.
  c.fillStyle = d.color;
  c.beginPath();
  c.arc(px, py, d.w * 0.75, 0, Math.PI * 2);
  c.fill();
  c.strokeStyle = 'rgba(255, 190, 190, 0.22)';
  c.lineWidth = Math.max(0.8, d.w * 0.22);
  c.beginPath();
  c.moveTo(d.x - d.w * 0.2, d.y);
  c.lineTo(px - d.w * 0.2, py - d.w * 0.3);
  c.stroke();
}

function frame(now: number): void {
  const c = ctx!;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const f = Math.min((now - last) / 16.67, 3);
  last = now;
  c.setTransform(dpr, 0, 0, dpr, 0, 0);
  c.clearRect(0, 0, window.innerWidth, window.innerHeight);

  for (let i = rays.length - 1; i >= 0; i--) {
    const ry = rays[i];
    const age = now - ry.born;
    if (age >= BLOOD_LIFE) { rays.splice(i, 1); continue; }
    c.globalAlpha = fadeAlpha(age, false);
    c.fillStyle = ry.color;
    const ex = ry.x + Math.cos(ry.a) * ry.len;
    const ey = ry.y + Math.sin(ry.a) * ry.len;
    const nx = -Math.sin(ry.a) * ry.w;
    const ny = Math.cos(ry.a) * ry.w;
    c.beginPath();
    c.moveTo(ry.x + nx, ry.y + ny);
    c.lineTo(ex, ey);
    c.lineTo(ry.x - nx, ry.y - ny);
    c.closePath();
    c.fill();
  }

  for (let i = drips.length - 1; i >= 0; i--) {
    const dr = drips[i];
    const age = now - dr.born;
    if (age >= (dr.oil ? OIL_LIFE : BLOOD_LIFE)) { drips.splice(i, 1); continue; }
    c.globalAlpha = fadeAlpha(age, dr.oil);
    drawDrip(c, dr, age);
  }

  for (let i = drops.length - 1; i >= 0; i--) {
    const d = drops[i];
    const life = d.oil ? OIL_LIFE : BLOOD_LIFE;
    const age = now - d.born;
    if (age >= life) { drops.splice(i, 1); continue; }

    if (!d.still) {
      d.trail.push({ x: d.x, y: d.y });
      if (d.trail.length > 8) { d.trail.shift(); }
      const drag = Math.pow(d.oil ? 0.965 : 0.975, f);
      d.vx *= drag;
      d.vy = d.vy * drag + (d.oil ? 0.28 : 0.32) * f;
      d.x += d.vx * f;
      d.y += d.vy * f;
      d.flight -= f;
      if (d.flight <= 0) {
        // Atterra e si appiattisce: da qui in poi è una macchia ferma, le più grosse colano.
        d.still = true;
        d.trail = [];
        d.r *= d.oil ? 1.25 : 1.15;
        if (d.r > (d.oil ? 3.8 : 3.2) && Math.random() < (d.oil ? 0.4 : 0.55)) {
          addDrip(d.born, d.x, d.y, d.r, d.color, false, d.oil);
        }
      }
    } else if (d.oil && age < 4000) {
      // Il petrolio depositato si allarga lentamente, come un fluido viscoso.
      d.r *= 1 + 0.00125 * f;
    }

    c.globalAlpha = fadeAlpha(age, d.oil);
    c.lineCap = 'round';
    // Il nero su fondo scuro sparisce: un bordo chiaro sottile e un riflesso lo rendono lucido.
    if (d.oil) {
      c.strokeStyle = 'rgba(150, 165, 190, 0.16)';
      for (let k = 1; k < d.trail.length; k++) {
        c.lineWidth = d.r * 1.7 * (k / d.trail.length) + 1.6;
        c.beginPath();
        c.moveTo(d.trail[k - 1].x, d.trail[k - 1].y);
        c.lineTo(d.trail[k].x, d.trail[k].y);
        c.stroke();
      }
      c.beginPath();
      c.arc(d.x, d.y, d.r + 0.8, 0, Math.PI * 2);
      c.fillStyle = 'rgba(150, 165, 190, 0.18)';
      c.fill();
    }
    c.fillStyle = d.color;
    c.strokeStyle = d.color;
    for (let k = 1; k < d.trail.length; k++) {
      c.lineWidth = d.r * 1.7 * (k / d.trail.length);
      c.beginPath();
      c.moveTo(d.trail[k - 1].x, d.trail[k - 1].y);
      c.lineTo(d.trail[k].x, d.trail[k].y);
      c.stroke();
    }
    c.beginPath();
    c.arc(d.x, d.y, d.r, 0, Math.PI * 2);
    c.fill();
    if (d.oil && d.r > 3.5) {
      // Riflesso a striscia sottile, non un puntino tondo: meno "pallina", più liquido steso.
      c.beginPath();
      c.ellipse(d.x - d.r * 0.3, d.y - d.r * 0.38, d.r * 0.36, d.r * 0.12, -0.6, 0, Math.PI * 2);
      c.fillStyle = 'rgba(210, 225, 255, 0.3)';
      c.fill();
    } else if (!d.oil && d.r > 2.5) {
      c.beginPath();
      c.arc(d.x - d.r * 0.35, d.y - d.r * 0.35, d.r * 0.28, 0, Math.PI * 2);
      c.fillStyle = 'rgba(255, 190, 190, 0.3)';
      c.fill();
    }
  }
  c.globalAlpha = 1;

  if (drops.length || drips.length || rays.length) {
    requestAnimationFrame(frame);
  } else {
    running = false;
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);
    // A riposo il canvas a schermo intero non deve restare come livello composito.
    canvas!.style.display = 'none';
  }
}
