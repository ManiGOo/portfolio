import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const ease = [0.16, 1, 0.3, 1];

const steps = [
  {
    n: "01",
    title: "Discover",
    desc: "A short call about your goal, users, and must-haves. You get a written scope and a fixed quote — approved by you before anything starts.",
  },
  {
    n: "02",
    title: "Build",
    desc: "Weekly demos on a live staging link. You watch it take shape and steer early, when changes are still cheap.",
  },
  {
    n: "03",
    title: "Review",
    desc: "You click through the finished build against the agreed scope. Revisions inside scope are included, not invoiced.",
  },
  {
    n: "04",
    title: "Ship & support",
    desc: "Deploy, documentation, and full repo handover — plus two weeks of launch support while real users settle in.",
  },
];

const faqs = [
  {
    q: "How much will my project cost?",
    a: "Every project is quoted fixed after a short discovery call — you approve the price before work starts, and it doesn't move unless the scope does. No hourly meters running in the background.",
  },
  {
    q: "How long does a typical project take?",
    a: "Most projects ship in 2–6 weeks depending on scope. You'll get a timeline with the quote, plus weekly demos so you can see progress instead of taking my word for it.",
  },
  {
    q: "Who owns the code?",
    a: "You do — 100%. Full repository access, documentation, and deployment notes are handed over at launch. No lock-in, no hostage code.",
  },
  {
    q: "Can you take over my existing project?",
    a: "Yes. I start with a focused audit — what's solid, what's risky, what it costs to fix — and then we agree on a fix or rebuild plan before I touch anything.",
  },
  {
    q: "How do we communicate during the build?",
    a: "Async updates as work lands, plus one demo call per week on a staging link you can click through. You always know exactly where things stand.",
  },
  {
    q: "What happens if something breaks after launch?",
    a: "Two weeks of launch support are included with every build. After that, a monthly care plan covers updates, backups, monitoring, and small fixes.",
  },
];

export default function Process() {
  return (
    <section id="process" aria-label="Process and FAQ" className="content-container scroll-mt-28 py-24 md:py-32">
      <SectionHeading
        index="05"
        eyebrow="Process — How we'll work"
        title="No black boxes. Progress you can see weekly."
        lede="A simple four-step engagement designed for non-technical founders and busy teams: fixed quote, staging demos, documented handover."
      />

      <ol className="grid gap-4 md:grid-cols-4">
        {steps.map((s, i) => (
          <motion.li
            key={s.n}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 0.55, delay: i * 0.08, ease }}
            className="gradient-border-quiet relative overflow-hidden rounded-3xl p-7"
          >
            <span className="font-mono text-xs text-emerald-700 dark:text-emerald-500/80">{s.n}</span>
            <h3 className="mt-3 font-display text-xl font-bold text-zinc-900 dark:text-white">{s.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{s.desc}</p>
            {i < steps.length - 1 && (
              <span aria-hidden="true" className="absolute right-5 top-7 hidden text-zinc-300 md:block dark:text-zinc-700">→</span>
            )}
          </motion.li>
        ))}
      </ol>

      {/* FAQ — semantic disclosures */}
      <div className="mt-16 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="mono-label text-zinc-500 dark:text-zinc-500">FAQ — Objections, answered</p>
          <h3 className="mt-4 font-display text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Fair questions, straight answers.
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
            Anything else on your mind? Ask it directly —{" "}
            <a href="#contact" className="font-semibold text-emerald-700 underline-offset-4 hover:underline dark:text-emerald-300">
              that&apos;s what the inbox is for.
            </a>
          </p>
        </div>
        <div className="lg:col-span-8">
          {faqs.map((f, i) => (
            <motion.details
              key={f.q}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.2), ease }}
              className="group border-b hairline py-5 first:border-t"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold text-zinc-900 marker:hidden dark:text-white [&::-webkit-details-marker]:hidden">
                {f.q}
                <span aria-hidden="true" className="grid size-8 shrink-0 place-items-center rounded-full border border-zinc-900/15 text-zinc-500 transition-transform duration-300 group-open:rotate-45 group-open:border-emerald-600/50 group-open:text-emerald-700 dark:border-white/15 dark:text-zinc-400 dark:group-open:border-emerald-400/50 dark:group-open:text-emerald-300">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">{f.a}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
