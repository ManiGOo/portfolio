import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Layout, Server, Wrench } from "lucide-react";
import SectionHeading from "./SectionHeading";

const ease = [0.16, 1, 0.3, 1];

const icons = { Frontend: Layout, Backend: Server, Tools: Wrench };

export default function Skills() {
  const [groups, setGroups] = useState({ Frontend: [], Backend: [], Tools: [] });

  useEffect(() => {
    let live = true;
    fetch("/data/skills.json")
      .then((r) => r.json())
      .then((d) => {
        if (!live) return;
        setGroups({
          Frontend: d.frontend ?? [],
          Backend: d.backend ?? [],
          Tools: d.tools ?? [],
        });
      })
      .catch(() => {});
    return () => { live = false; };
  }, []);

  return (
    <section id="stack" aria-label="Technical stack" className="content-container scroll-mt-28 py-24 md:py-32">
      <SectionHeading
        index="03"
        eyebrow="Stack & tooling — The arsenal"
        title="Depth where it counts, breadth where it helps."
        lede="Python (Django, FastAPI) and Node.js carry the backend. React carries the interface. Everything else exists to ship, test and deploy with confidence."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {Object.entries(groups).map(([title, items], gi) => {
          const Icon = icons[title] ?? Wrench;
          return (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.65, delay: gi * 0.1, ease }}
              className="gradient-border-quiet group relative flex flex-col overflow-hidden rounded-[1.75rem] p-7 md:p-8"
            >
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-600/[0.07] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-emerald-500/[0.06]" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-2xl border border-emerald-600/25 bg-emerald-600/10 text-emerald-700 transition-transform duration-300 group-hover:scale-105 dark:border-emerald-400/25 dark:bg-emerald-400/10 dark:text-emerald-300">
                      <Icon size={20} />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold text-zinc-900 dark:text-white">{title}</h3>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-600">
                        0{gi + 1} · {items.length} items
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="mt-7 space-y-5">
                  {items.map((s, si) => (
                    <motion.li
                      key={s.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.08 + si * 0.05, ease }}
                    >
                      <div className="flex items-baseline justify-between gap-3">
                        <p className="font-semibold text-zinc-900 dark:text-zinc-100">{s.name}</p>
                        <span className="hidden h-px flex-1 bg-zinc-900/10 sm:block dark:bg-white/8" aria-hidden="true" />
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-zinc-500 transition-colors group-hover:text-zinc-600 dark:text-zinc-500 dark:group-hover:text-zinc-400">
                        {s.desc}
                      </p>
                      {si !== items.length - 1 && <div className="mt-5 h-px bg-gradient-to-r from-zinc-900/10 to-transparent dark:from-white/8" aria-hidden="true" />}
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-7 border-t hairline pt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-600">
                  {title === "Backend" ? "◆ Primary depth" : "◇ Supporting range"}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
