import { useEffect, useRef } from "react";

/**
 * AtmosphereBackground — atmosphere-background skill
 * Dark near-black base + drifting vertical emerald light folds,
 * screen-blended, luminous lower-right bloom. Canvas 2D, DPR-capped,
 * pauses offscreen / hidden tab / reduced motion.
 */
export default function AtmosphereBackground() {
  const ref = useRef(null);

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
      alpha: 0.10 + (i % 3) * 0.05,
      hue: i % 2 === 0 ? 160 : 175,
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
      // base
      const base = ctx.createLinearGradient(0, 0, 0, h);
      base.addColorStop(0, "#060807");
      base.addColorStop(0.55, "#070a09");
      base.addColorStop(1, "#080c0b");
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = base;
      ctx.fillRect(0, 0, w, h);

      // folds — screen blend
      ctx.globalCompositeOperation = "screen";
      folds.forEach((f) => {
        const drift = Math.sin(t * f.speed + f.phase) * w * 0.035;
        const cx = f.x * w + drift;
        const fw = f.width * w;
        const g = ctx.createLinearGradient(cx - fw, 0, cx + fw, 0);
        g.addColorStop(0, "rgba(16,185,129,0)");
        g.addColorStop(0.5, `hsla(${f.hue}, 70%, 45%, ${f.alpha})`);
        g.addColorStop(1, "rgba(16,185,129,0)");
        ctx.fillStyle = g;
        // vertical shape: fade top, intensify bottom
        ctx.save();
        ctx.beginPath();
        ctx.rect(cx - fw, 0, fw * 2, h);
        ctx.clip();
        const v = ctx.createLinearGradient(0, 0, 0, h);
        v.addColorStop(0, "rgba(0,0,0,1)");
        v.addColorStop(0.45, "rgba(0,0,0,0.35)");
        v.addColorStop(1, "rgba(0,0,0,0)");
        ctx.globalCompositeOperation = "destination-in";
        ctx.fillStyle = v;
        ctx.fillRect(cx - fw, 0, fw * 2, h);
        ctx.restore();
        ctx.globalCompositeOperation = "screen";
        ctx.fillStyle = g;
        // repaint with vertical alpha via second pass is complex in 2d;
        // simple approach: draw gradient rect with globalAlpha shaped by height bands
        ctx.globalAlpha = 0.85;
        ctx.fillRect(cx - fw, h * 0.15, fw * 2, h * 0.85);
        ctx.globalAlpha = 1;
      });

      // focal bloom lower-right
      const bx = w * 0.82, by = h * 0.88;
      const bloom = ctx.createRadialGradient(bx, by, 0, bx, by, Math.max(w, h) * 0.45);
      bloom.addColorStop(0, "rgba(16,185,129,0.16)");
      bloom.addColorStop(0.4, "rgba(16,185,129,0.06)");
      bloom.addColorStop(1, "rgba(16,185,129,0)");
      ctx.fillStyle = bloom;
      ctx.fillRect(0, 0, w, h);

      // faint top vignette for nav legibility
      const vg = ctx.createLinearGradient(0, 0, 0, h * 0.3);
      vg.addColorStop(0, "rgba(0,0,0,0.5)");
      vg.addColorStop(1, "rgba(0,0,0,0)");
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = vg;
      ctx.fillRect(0, 0, w, h * 0.3);
    }

    function frame(t) {
      if (!running) return;
      paint(t);
      if (!reduced) raf = requestAnimationFrame(frame);
    }

    resize();
    paint(1200);
    if (!reduced) raf = requestAnimationFrame(frame);

    const onResize = () => { resize(); if (reduced) paint(1200); };
    window.addEventListener("resize", onResize);

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
