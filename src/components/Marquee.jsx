/**
 * Marquee — marquee-loop skill
 * Seamless duplicated track, edge fade mask, reduced-motion static wrap.
 */
const items = [
  "Python", "Django", "FastAPI", "DRF", "React", "Node.js",
  "JavaScript", "PostgreSQL", "Tailwind CSS", "REST APIs", "Git", "Docker",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <section aria-label="Technologies" className="relative border-y hairline bg-white/50 py-5 dark:bg-black/30">
      <div className="marquee-mask overflow-hidden">
        <div className="marquee-track items-center gap-3 pr-3">
          {row.map((t, i) => (
            <span
              key={`${t}-${i}`}
              aria-hidden={i >= items.length}
              className="inline-flex shrink-0 items-center gap-2.5 rounded-full border border-zinc-900/10 bg-white px-5 py-2.5 font-mono text-xs uppercase tracking-[0.14em] text-zinc-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-400"
            >
              <i className="size-1.5 rounded-full bg-emerald-600/80 dark:bg-emerald-400/80" aria-hidden="true" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
