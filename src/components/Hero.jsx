import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Terminal } from "lucide-react";
import WordReveal from "./WordReveal";

const HeroObject3D = lazy(() => import("./HeroObject3D"));

const ease = [0.16, 1, 0.3, 1];

const stats = [
  { k: "04+", v: "Full-stack projects shipped" },
  { k: "10+", v: "Tools across Python + JS" },
  { k: "7 mo", v: "Hands-on dev experience" },
];

export default function Hero() {
  return (
    <section aria-label="Introduction" className="content-container relative pt-32 sm:pt-40 pb-16 md:pb-24">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        {/* Editorial headline column */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-emerald-600/25 bg-emerald-600/[0.07] px-4 py-2 dark:border-emerald-400/25 dark:bg-emerald-400/[0.07]"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-600 opacity-60 dark:bg-emerald-400 dark:opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-600 dark:bg-emerald-400" />
            </span>
            <span className="mono-label !text-[10px] text-emerald-800 dark:text-emerald-300">Open to work — 2026</span>
          </motion.div>

          <p className="mono-label mb-5 text-zinc-500 dark:text-zinc-500">Portfolio — Manish Nath · Full-Stack Developer</p>

          <WordReveal
            as="h1"
            text="Building calm, fast software with Python at the core."
            className="font-display display-tight text-balance font-bold text-[clamp(2.6rem,6.2vw,4.9rem)] text-zinc-900 dark:text-white"
          />

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease }}
            className="mt-7 max-w-xl text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400"
          >
            I&apos;m <span className="font-semibold text-zinc-900 dark:text-white">Manish</span> — a full-stack developer
            working across <span className="text-zinc-800 dark:text-zinc-200">Django, FastAPI, React and Node.js</span>.
            I care about clean architecture, readable code, and interfaces that feel engineered, not decorated.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease }}
            className="mt-9 flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#work"
              className="gradient-border group inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-4 text-sm font-bold tracking-wide text-zinc-900 transition-transform duration-200 hover:-translate-y-0.5 dark:text-white"
            >
              View selected work
              <ArrowDown size={16} className="text-emerald-700 transition-transform group-hover:translate-y-0.5 dark:text-emerald-400" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-zinc-900/10 bg-white/70 px-7 py-4 text-sm font-bold tracking-wide text-zinc-800 backdrop-blur transition-colors hover:border-emerald-600/40 hover:text-zinc-900 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-200 dark:hover:border-emerald-400/40 dark:hover:text-white"
            >
              Get in touch
              <ArrowUpRight size={16} className="text-zinc-400 dark:text-zinc-500" />
            </a>
          </motion.div>

          {/* mono stats rail */}
          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 grid grid-cols-3 divide-x divide-zinc-900/10 border-y hairline dark:divide-white/8"
          >
            {stats.map((s) => (
              <div key={s.v} className="px-4 sm:px-6 py-5 first:pl-0">
                <dt className="order-2 mt-1 block text-[11px] leading-snug text-zinc-500 dark:text-zinc-500">{s.v}</dt>
                <dd className="font-display text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">
                  {s.k}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* 3D + terminal panel column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease }}
          className="lg:col-span-5"
        >
          <div className="gradient-border relative overflow-hidden rounded-[1.75rem] shadow-[0_24px_60px_-24px_rgba(24,27,25,0.25)] dark:shadow-none">
            <div className="flex items-center justify-between border-b border-zinc-900/10 px-5 py-3.5 dark:border-white/8">
              <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-500">
                <Terminal size={14} className="text-emerald-700 dark:text-emerald-400" /> hero.object — live
              </span>
              <span className="flex gap-1.5" aria-hidden="true">
                <i className="size-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                <i className="size-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                <i className="size-2.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
              </span>
            </div>

            <div className="relative">
              <Suspense fallback={<div className="aspect-square w-full animate-pulse bg-zinc-900/[0.04] dark:bg-white/[0.02]" />}>
                <HeroObject3D />
              </Suspense>
              {/* corner ticks */}
              <span className="corner top-left" aria-hidden="true" />
              <span className="corner top-right" aria-hidden="true" />
            </div>

            <div className="grid grid-cols-3 divide-x divide-zinc-900/10 border-t border-zinc-900/10 bg-white/60 font-mono text-[11px] dark:divide-white/8 dark:border-white/8 dark:bg-black/40">
              <div className="px-4 py-3.5">
                <p className="uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-600">Backend</p>
                <p className="mt-1 font-semibold text-zinc-800 dark:text-zinc-200">FastAPI · Django</p>
              </div>
              <div className="px-4 py-3.5">
                <p className="uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-600">Frontend</p>
                <p className="mt-1 font-semibold text-zinc-800 dark:text-zinc-200">React · TW</p>
              </div>
              <div className="px-4 py-3.5">
                <p className="uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-600">Runtime</p>
                <p className="mt-1 font-semibold text-emerald-700 dark:text-emerald-300">Node.js</p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between px-1">
            <p className="font-mono text-[11px] text-zinc-500 dark:text-zinc-600">FIG.01 — SIGNAL GEOMETRY / POINTER PARALLAX</p>
            <div className="flex gap-2">
              {[
                { Icon: Github, href: "https://github.com/ManiGOo", label: "GitHub" },
                { Icon: Linkedin, href: "https://www.linkedin.com", label: "LinkedIn" },
                { Icon: Mail, href: "mailto:its.nathmanish@gmail.com", label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="grid size-9 place-items-center rounded-xl border border-zinc-900/10 bg-white/70 text-zinc-500 transition-colors hover:border-emerald-600/50 hover:text-emerald-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-400 dark:hover:border-emerald-400/50 dark:hover:text-emerald-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
