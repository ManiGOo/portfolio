import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const links = [
  { n: "01", name: "About", href: "#about" },
  { n: "02", name: "Work", href: "#work" },
  { n: "03", name: "Stack", href: "#stack" },
  { n: "04", name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [progress, setProgress] = useState(0);
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setIsHidden(latest > prev && latest > 160 && !isOpen);
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => setProgress(v));

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <motion.header
      variants={{ visible: { y: 0 }, hidden: { y: "-110%" } }}
      animate={isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-[100] px-4 sm:px-6 pt-4 pointer-events-none"
    >
      <div className="mx-auto max-w-[1200px] pointer-events-auto">
        <div className="gradient-border-quiet relative flex items-center justify-between rounded-2xl bg-black/55 px-4 sm:px-5 py-3 backdrop-blur-xl">
          {/* scroll progress hairline */}
          <div className="absolute top-0 left-4 right-4 h-px bg-white/5 overflow-hidden rounded-full" aria-hidden="true">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-emerald-300 transition-[width] duration-150"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </div>

          <a href="#top" className="flex items-center gap-3 group" aria-label="Manish — back to top">
            <span className="grid size-8 place-items-center rounded-lg bg-emerald-400 font-display text-sm font-bold text-black shadow-[0_0_24px_rgba(16,185,129,0.35)]">
              M
            </span>
            <span className="leading-none">
              <span className="block font-display text-[15px] font-bold tracking-tight text-white">
                Manish<span className="text-emerald-400">.dev</span>
              </span>
              <span className="mono-label mt-1 block !text-[9px] text-zinc-500">BCA — PY FULL STACK</span>
            </span>
          </a>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group flex items-baseline gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    <span className="font-mono text-[10px] text-emerald-500/70">{l.n}</span>
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="gradient-border inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold tracking-widest uppercase text-white transition-transform duration-200 hover:-translate-y-0.5"
            >
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
              Hire me
            </a>
          </div>

          <button
            onClick={() => setIsOpen((v) => !v)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="md:hidden grid size-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white"
          >
            <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
              <motion.span animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 7 : 0 }} className="h-0.5 w-full rounded bg-current" />
              <motion.span animate={{ opacity: isOpen ? 0 : 1 }} className="h-0.5 w-2/3 rounded bg-emerald-400" />
              <motion.span animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -7 : 0 }} className="h-0.5 w-full rounded bg-current" />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 -z-10 bg-black/70 backdrop-blur-xl md:hidden pointer-events-auto flex items-center justify-center"
          >
            <ul className="flex flex-col gap-2 text-center px-6 w-full max-w-sm">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ y: 18, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.06 * i, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href={l.href}
                    onClick={() => setIsOpen(false)}
                    className="gradient-border-quiet flex items-center justify-between rounded-2xl bg-white/[0.03] px-6 py-5"
                  >
                    <span className="font-mono text-xs text-emerald-400">{l.n}</span>
                    <span className="font-display text-3xl font-bold text-white">{l.name}</span>
                    <span aria-hidden="true" className="text-zinc-600">→</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
