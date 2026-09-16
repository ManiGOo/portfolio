/**
 * Marquee — marquee-loop skill
 * Seamless duplicated track, edge fade mask, reduced-motion static wrap.
 */
const items = [
  "Python", "Django", "DRF", "React", "JavaScript", "PostgreSQL",
  "Tailwind CSS", "REST APIs", "Git", "Docker", "Node.js", "Express",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <section aria-label="Technologies" className="relative border-y hairline bg-black/30 py-5">
      <div className="marquee-mask overflow-hidden">
        <div className="marquee-track items-center gap-3 pr-3">
          {row.map((t, i) => (
            <span
              key={`${t}-${i}`}
              aria-hidden={i >= items.length}
              className="inline-flex shrink-0 items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 font-mono text-xs uppercase tracking-[0.14em] text-zinc-400"
            >
              <i className="size-1.5 rounded-full bg-emerald-400/80" aria-hidden="true" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
