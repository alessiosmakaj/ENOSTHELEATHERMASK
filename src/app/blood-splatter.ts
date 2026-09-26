const DURATION = 3000;
const COLORS = ['#9c2333', '#8a1c2b', '#6e1420', '#b02a3c', '#5a0f19'];

interface Drop {
  born: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  color: string;
  trail: { x: number; y: number }[];
  still: boolean;
}

const drops: Drop[] = [];
let canvas: HTMLCanvasElement | null = null;
let ctx: CanvasRenderingContext2D | null = null;
let running = false;
let last = 0;

const rand = (min: number, max: number) => min + Math.random() * (max - min);
const pick = () => COLORS[Math.floor(Math.random() * COLORS.length)];

function ensureCanvas(): void {
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.setAttribute('aria-hidden', 'true');
    canvas.style.cssText = 'position:fixed;inset:0;width:100vw;height:100vh;pointer-events:none;z-index:3000';
    document.body.appendChild(canvas);
    ctx = canvas.getContext('2d');
  }
  const dpr = window.devicePixelRatio || 1;
  const w = Math.round(window.innerWidth * dpr);
  const h = Math.round(window.innerHeight * dpr);
  if (canvas.width !== w || canvas.height !== h) {
    canvas.width = w;
    canvas.height = h;
  }
}

export function splatBlood(x: number, y: number): void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { return; }
  ensureCanvas();
  const born = performance.now();

  // Macchia centrale: resta ferma e sfuma con il resto.
  for (let i = 0; i < 12; i++) {
    const a = rand(0, Math.PI * 2);
    const d = rand(0, 22);
    drops.push({ born, x: x + Math.cos(a) * d, y: y + Math.sin(a) * d, vx: 0, vy: 0, r: rand(3, 9), color: pick(), trail: [], still: true });
  }
  // Gocce proiettate verso l'esterno: le piccole sono veloci, le grandi pesanti.
  const count = Math.round(rand(45, 70));
  for (let i = 0; i < count; i++) {
    const a = rand(0, Math.PI * 2);
    const r = rand(1.2, 6) * (Math.random() < 0.12 ? 1.6 : 1);
    const speed = rand(3, 16) * (1 - r / 14);
    drops.push({ born, x, y, vx: Math.cos(a) * speed, vy: Math.sin(a) * speed - rand(0, 3), r, color: pick(), trail: [], still: false });
  }

  if (!running) {
    running = true;
    last = born;
    requestAnimationFrame(frame);
  }
}

function frame(now: number): void {
  const c = ctx!;
  const dpr = window.devicePixelRatio || 1;
  const f = Math.min((now - last) / 16.67, 3);
  last = now;
  c.setTransform(dpr, 0, 0, dpr, 0, 0);
  c.clearRect(0, 0, window.innerWidth, window.innerHeight);

  for (let i = drops.length - 1; i >= 0; i--) {
    const d = drops[i];
    const t = (now - d.born) / DURATION;
    if (t >= 1) { drops.splice(i, 1); continue; }

    if (!d.still) {
      d.trail.push({ x: d.x, y: d.y });
      if (d.trail.length > 8) { d.trail.shift(); }
      const drag = Math.pow(0.975, f);
      d.vx *= drag;
      d.vy = d.vy * drag + 0.32 * f;
      d.x += d.vx * f;
      d.y += d.vy * f;
    }

    c.globalAlpha = 1 - t;
    c.fillStyle = d.color;
    c.strokeStyle = d.color;
    c.lineCap = 'round';
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
  }
  c.globalAlpha = 1;

  if (drops.length) {
    requestAnimationFrame(frame);
  } else {
    running = false;
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);
  }
}
