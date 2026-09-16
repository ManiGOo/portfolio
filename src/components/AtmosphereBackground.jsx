import { useEffect, useRef } from "react";

/**
 * AtmosphereBackground — atmosphere-background skill (theme-aware)
 * Light: warm paper base + soft emerald folds, gentle lower-right bloom.
 * Dark: near-black base + luminous emerald folds, stronger corner bloom.
 * Canvas 2D, DPR-capped, pauses offscreen / hidden tab / reduced motion.
 */
const PALETTES = {
  light: {
    top: "#f1f3f0", mid: "#edf0eb", bottom: "#e6eae4",
    foldHue: [158, 172], foldAlpha: [0.07, 0.09, 0.11],
    bloom: ["rgba(5,150,105,0.10)", "rgba(5,150,105,0.04)", "rgba(5,150,105,0)"],
    shade: ["rgba(255,255,255,0.55)", "rgba(255,255,255,0)"],
  },
  dark: {
    top: "#060807", mid: "#070a09", bottom: "#080c0b",
    foldHue: [160, 175], foldAlpha: [0.10, 0.15, 0.20],
    bloom: ["rgba(16,185,129,0.16)", "rgba(16,185,129,0.06)", "rgba(16,185,129,0)"],
    shade: ["rgba(0,0,0,0.5)", "rgba(0,0,0,0)"],
  },
};

export default function AtmosphereBackground() {
  const ref = useRef(null);
  const themeRef = useRef(
    typeof document !== "undefined" && document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let w = 0, h = 0;
    let running = true;
    const DPR = Math.min(window.devicePixelRatio || 1, 1.5);

    const folds = Array.from({ length: 7 }, (_, i) => ({
      x: 0.08 + i * 0.14,
      width: 0.10 + (i % 3) * 0.035,
      speed: 0.00012 + (i % 4) * 0.00005,
      phase: i * 1.7,
      band: i % 3,
      huePick: i % 2,
    }));

    function resize() {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      w = vw; h = vh;
      canvas.width = Math.floor(vw * DPR);
      canvas.height = Math.floor(vh * DPR);
      canvas.style.width = `${vw}px`;
      canvas.style.height = `${vh}px`;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    function paint(t) {
      const P = PALETTES[themeRef.current] ?? PALETTES.light;
      const base = ctx.createLinearGradient(0, 0, 0, h);
      base.addColorStop(0, P.top);
      base.addColorStop(0.55, P.mid);
      base.addColorStop(1, P.bottom);
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 1;
      ctx.fillStyle = base;
      ctx.fillRect(0, 0, w, h);

      ctx.globalCompositeOperation = "screen";
      folds.forEach((f) => {
        const drift = Math.sin(t * f.speed + f.phase) * w * 0.035;
        const cx = f.x * w + drift;
        const fw = f.width * w;
        const hue = P.foldHue[f.huePick];
        const alpha = P.foldAlpha[f.band];
        const g = ctx.createLinearGradient(cx - fw, 0, cx + fw, 0);
        g.addColorStop(0, "rgba(16,185,129,0)");
        g.addColorStop(0.5, `hsla(${hue}, 70%, 45%, ${alpha})`);
        g.addColorStop(1, "rgba(16,185,129,0)");
        ctx.globalAlpha = 0.85;
        ctx.fillStyle = g;
        ctx.fillRect(cx - fw, h * 0.15, fw * 2, h * 0.85);
        ctx.globalAlpha = 1;
      });

      const bx = w * 0.82, by = h * 0.88;
      const bloom = ctx.createRadialGradient(bx, by, 0, bx, by, Math.max(w, h) * 0.45);
      bloom.addColorStop(0, P.bloom[0]);
      bloom.addColorStop(0.4, P.bloom[1]);
      bloom.addColorStop(1, P.bloom[2]);
      ctx.fillStyle = bloom;
      ctx.fillRect(0, 0, w, h);

      const vg = ctx.createLinearGradient(0, 0, 0, h * 0.3);
      vg.addColorStop(0, P.shade[0]);
      vg.addColorStop(1, P.shade[1]);
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = vg;
      ctx.fillRect(0, 0, w, h * 0.3);
    }

    function frame(t) {
      if (!running) return;
      paint(t);
      if (!reduced) raf = requestAnimationFrame(frame);
    }

    const syncTheme = () => {
      themeRef.current = document.documentElement.classList.contains("dark") ? "dark" : "light";
      paint(1200);
      if (!reduced && !running) { running = true; raf = requestAnimationFrame(frame); }
    };

    resize();
    themeRef.current = document.documentElement.classList.contains("dark") ? "dark" : "light";
    paint(1200);
    if (!reduced) raf = requestAnimationFrame(frame);

    const onResize = () => { resize(); if (reduced) paint(1200); };
    window.addEventListener("resize", onResize);
    window.addEventListener("theme-change", syncTheme);

    const io = new IntersectionObserver(([e]) => {
      const visible = e.isIntersecting && document.visibilityState === "visible";
      if (visible && !reduced && !running) { running = true; raf = requestAnimationFrame(frame); }
      if (!visible) { running = false; cancelAnimationFrame(raf); }
      if (visible && reduced) paint(1200);
    });
    io.observe(canvas);

    const onVis = () => {
      if (document.visibilityState !== "visible") { running = false; cancelAnimationFrame(raf); }
      else if (!reduced) { running = true; raf = requestAnimationFrame(frame); }
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      cancelAnimationFrame(raf);
      running = false;
      window.removeEventListener("resize", onResize);
      window.removeEventListener("theme-change", syncTheme);
      document.removeEventListener("visibilitychange", onVis);
      io.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
}
