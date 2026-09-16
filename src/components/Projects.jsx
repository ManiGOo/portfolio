import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, X } from "lucide-react";
import SectionHeading from "./SectionHeading";

const ease = [0.16, 1, 0.3, 1];

const meta = {
  Inventofy: { role: "Full-stack · Lead build", year: "2025", note: "Inventory ops with live stock, billing flow and Neon Postgres." },
  "Feed App": { role: "Full-stack · Realtime", year: "2025", note: "Micro-blogging plus WebSocket chat, presence and feeds." },
  FootballHub: { role: "Django · MVT + API", year: "2024", note: "Event creation plus live fixtures from football-data.org." },
  "Sky Watcher": { role: "Django × React", year: "2024", note: "Flight tracking on OpenSky data with map-grade UI." },
};

function useProjects() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    let live = true;
    fetch("/data/projects.json")
      .then((r) => r.json())
      .then((d) => { if (live) setItems(Array.isArray(d) ? d : []); })
      .catch(() => { if (live) setItems([]); });
    return () => { live = false; };
  }, []);
  return items;
}

export default function Projects() {
  const projects = useProjects();
  const [active, setActive] = useState(null);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setActive(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [active]);

  return (
    <section id="work" aria-label="Selected work" className="relative scroll-mt-28 border-t hairline bg-white/40 py-24 md:py-32 dark:bg-black/25">
      <div className="content-container">
        <SectionHeading
          index="03"
          eyebrow="Delivered work — Proof before promises"
          title="Real systems, live in production."
          lede="A sample of shipped client-style builds — real data, real deploys, real trade-offs. Your project gets the same standard."
        />

        <div className="overflow-hidden rounded-[1.75rem] border border-zinc-900/10 bg-white shadow-[0_24px_60px_-32px_rgba(24,27,25,0.3)] dark:border-white/8 dark:bg-transparent dark:shadow-none">
          {projects.map((p, i) => {
            const m = meta[p.name] ?? { role: "Full-stack", year: "2025", note: p.description };
            const wide = i % 3 === 0;
            return (
              <motion.article
                key={p.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 0.65, delay: Math.min(i * 0.06, 0.2), ease }}
                className={`group relative grid gap-6 bg-white p-7 md:p-10 transition-colors hover:bg-emerald-50/50 dark:bg-[#0b0e0d]/80 dark:hover:bg-[#0d1211] ${i !== 0 ? "border-t border-zinc-900/10 dark:border-white/8" : ""} lg:grid-cols-12 lg:items-center`}
              >
                {/* index + identity */}
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-emerald-700 dark:text-emerald-500/80">0{i + 1}</span>
                    <span className="h-px w-8 bg-zinc-900/15 dark:bg-white/12" aria-hidden="true" />
                    <span className="mono-label !text-[9px] text-zinc-500 dark:text-zinc-600">{m.role} · {m.year}</span>
                  </div>
                  <h3 className="mt-4 font-display text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 transition-colors group-hover:text-emerald-800 dark:text-white dark:group-hover:text-emerald-200">
                    {p.name}
                  </h3>
                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">{m.note}</p>
                </div>

                {/* tech + visual meter */}
                <div className="lg:col-span-4">
                  <div className="flex flex-wrap gap-2">
                    {(p.tech ?? []).map((t) => (
                      <span key={t} className="rounded-md border border-zinc-900/10 bg-zinc-900/[0.03] px-2.5 py-1 font-mono text-[11px] text-zinc-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-400">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 h-1 overflow-hidden rounded-full bg-zinc-900/10 dark:bg-white/6" aria-hidden="true">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r from-emerald-700 to-emerald-400 dark:from-emerald-600 dark:to-emerald-300 ${wide ? "w-11/12" : "w-3/4"}`}
                    />
                  </div>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-600">
                    {wide ? "Flagship build" : "Production build"} — {p.tech?.length ?? 0} services
                  </p>
                </div>

                {/* actions — always visible, never hover-only */}
                <div className="flex flex-wrap items-center gap-2.5 lg:col-span-3 lg:justify-end">
                  <button
                    onClick={() => setActive(p)}
                    className="gradient-border inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-zinc-900 transition-transform duration-200 hover:-translate-y-0.5 dark:text-white"
                    aria-haspopup="dialog"
                  >
                    Inspect <ArrowUpRight size={15} className="text-emerald-700 dark:text-emerald-400" />
                  </button>
                  {p.github && p.github !== "#" && (
                    <a href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.name} source on GitHub`}
                      className="grid size-11 place-items-center rounded-xl border border-zinc-900/10 bg-zinc-900/[0.03] text-zinc-500 transition-colors hover:border-emerald-600/50 hover:text-zinc-900 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-400 dark:hover:border-emerald-400/50 dark:hover:text-white">
                      <Github size={17} />
                    </a>
                  )}
                  {p.demo && p.demo !== "#" && (
                    <a href={p.demo} target="_blank" rel="noreferrer" aria-label={`${p.name} live demo`}
                      className="grid size-11 place-items-center rounded-xl border border-zinc-900/10 bg-zinc-900/[0.03] text-zinc-500 transition-colors hover:border-emerald-600/50 hover:text-zinc-900 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-400 dark:hover:border-emerald-400/50 dark:hover:text-white">
                      <ExternalLink size={17} />
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>

        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-600">
          More experiments live on GitHub — this index shows maintained work only.
        </p>
      </div>

      {/* Inspection dialog */}
      <AnimatePresence>
        {active && (
          <div role="dialog" aria-modal="true" aria-label={`${active.name} details`} className="fixed inset-0 z-[90] flex items-end sm:items-center justify-center p-3 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
              className="absolute inset-0 bg-zinc-900/50 backdrop-blur-md dark:bg-black/75"
            />
            <motion.div
              initial={{ opacity: 0, y: 32, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.4, ease }}
              className="gradient-border relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-[1.75rem] p-7 md:p-10"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close details"
                className="absolute right-5 top-5 grid size-10 place-items-center rounded-full border border-zinc-900/10 bg-zinc-900/[0.04] text-zinc-600 transition-colors hover:bg-zinc-900/[0.08] hover:text-zinc-900 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white"
              >
                <X size={18} />
              </button>
              <p className="mono-label text-emerald-700 dark:text-emerald-400">{(meta[active.name]?.role ?? "Project")} · {meta[active.name]?.year ?? ""}</p>
              <h3 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">{active.name}</h3>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">{active.description}</p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500 dark:text-zinc-500">{meta[active.name]?.note}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {(active.tech ?? []).map((t) => (
                  <span key={t} className="rounded-lg border border-zinc-900/10 bg-zinc-900/[0.03] px-3.5 py-2 text-sm font-medium text-zinc-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-200">{t}</span>
                ))}
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {active.github && active.github !== "#" && (
                  <a href={active.github} target="_blank" rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-zinc-900/15 bg-zinc-900/[0.04] px-5 py-4 text-sm font-bold text-zinc-900 transition-colors hover:bg-zinc-900/[0.08] dark:border-white/12 dark:bg-white/[0.04] dark:text-white dark:hover:bg-white/[0.08]">
                    <Github size={17} /> Source code
                  </a>
                )}
                {active.demo && active.demo !== "#" && (
                  <a href={active.demo} target="_blank" rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-5 py-4 text-sm font-bold text-white transition-colors hover:bg-emerald-500 dark:bg-emerald-400 dark:text-black dark:hover:bg-emerald-300">
                    <ExternalLink size={17} /> Live demo
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
