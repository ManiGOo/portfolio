import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * HeroObject3D — webgl-3d-object skill
 * One faceted emerald icosahedron: PBR standard material, key + rim + ambient,
 * slow rotation + float, mouse parallax, DPR cap, full cleanup, still frame on reduced motion.
 */
export default function HeroObject3D() {
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    } catch {
      return;
    }
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0.15, 5.4);

    const geo = new THREE.IcosahedronGeometry(1.42, 1);
    const mat = new THREE.MeshStandardMaterial({
      color: 0x0e2a22,
      metalness: 0.62,
      roughness: 0.3,
      emissive: 0x10b981,
      emissiveIntensity: 0.14,
      flatShading: true,
    });
    const mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh);

    const wire = new THREE.LineSegments(
      new THREE.WireframeGeometry(geo),
      new THREE.LineBasicMaterial({ color: 0x34d399, transparent: true, opacity: 0.14 })
    );
    mesh.add(wire);

    // orbit ring — restrained technical accent
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(2.15, 0.008, 12, 128),
      new THREE.MeshBasicMaterial({ color: 0x10b981, transparent: true, opacity: 0.35 })
    );
    ring.rotation.x = Math.PI / 2.35;
    scene.add(ring);

    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(2.5, 0.005, 12, 128),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.1 })
    );
    ring2.rotation.x = Math.PI / 2.1;
    ring2.rotation.y = 0.3;
    scene.add(ring2);

    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    const key = new THREE.DirectionalLight(0xffffff, 2.2);
    key.position.set(3.4, 4.2, 4.8);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0x34d399, 1.1);
    rim.position.set(-4.2, 1.2, -2.8);
    scene.add(rim);

    let raf = 0;
    let tx = 0, ty = 0, cx = 0, cy = 0;
    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      tx = ((e.clientX - r.left) / Math.max(r.width, 1) - 0.5) * 0.5;
      ty = ((e.clientY - r.top) / Math.max(r.height, 1) - 0.5) * 0.35;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    function resize() {
      const el = wrapRef.current;
      const w = Math.max(1, el ? el.clientWidth : 400);
      const h = Math.max(1, el ? el.clientHeight : 400);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    resize();
    window.addEventListener("resize", resize);

    const t0 = performance.now();
    function render(now) {
      const t = (now - t0) * 0.001;
      cx += (tx - cx) * 0.04;
      cy += (ty - cy) * 0.04;
      mesh.rotation.y = t * 0.28 + cx;
      mesh.rotation.x = -0.16 + Math.sin(t * 0.45) * 0.06 + cy;
      mesh.rotation.z = Math.sin(t * 0.32) * 0.06;
      mesh.position.y = Math.sin(t * 0.8) * 0.08;
      ring.rotation.z = t * 0.12;
      ring2.rotation.z = -t * 0.08;
      camera.position.x = cx * 0.5;
      camera.position.y = 0.15 - cy * 0.4;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
      if (!reduced) raf = requestAnimationFrame(render);
    }

    if (reduced) {
      // single static poster frame
      mesh.rotation.set(-0.16, 0.6, 0.06);
      renderer.render(scene, camera);
    } else {
      raf = requestAnimationFrame(render);
    }

    const onLoss = (e) => e.preventDefault();
    canvas.addEventListener("webglcontextlost", onLoss);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("webglcontextlost", onLoss);
      geo.dispose();
      mat.dispose();
      wire.geometry.dispose();
      wire.material.dispose();
      ring.geometry.dispose();
      ring.material.dispose();
      ring2.geometry.dispose();
      ring2.material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={wrapRef} className="relative aspect-square w-full">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
      {/* static fallback ring glow if WebGL fails — canvas simply stays transparent */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-8 -z-10 rounded-full bg-emerald-500/[0.07] blur-3xl" />
    </div>
  );
}
