import { motion } from "framer-motion";
import { Briefcase, Code2, MessagesSquare } from "lucide-react";
import SectionHeading from "./SectionHeading";

const ease = [0.16, 1, 0.3, 1];

const traits = [
  { icon: Code2, label: "Capability", value: "End-to-End Delivery" },
  { icon: Briefcase, label: "Experience", value: "1+ Years Client Work" },
  { icon: MessagesSquare, label: "Working style", value: "Direct, No Layers" },
];

const stack = ["Python", "Django", "FastAPI", "DRF", "React", "Node.js", "JavaScript", "PostgreSQL", "Tailwind CSS", "Git", "REST APIs"];

export default function About() {
  return (
    <section id="about" aria-label="About" className="content-container relative scroll-mt-28 py-24 md:py-32">
      <SectionHeading
        index="01"
        eyebrow="Profile — Your builder"
        title="One developer, full accountability."
        lede="1+ years delivering client work across Python and JavaScript — Django and FastAPI backends, Node.js services, React frontends. You talk to the person writing the code."
      />

      <div className="grid gap-5 lg:grid-cols-12">
        {/* Bio chapter */}
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, ease }}
          className="gradient-border relative overflow-hidden rounded-[1.75rem] p-8 md:p-10 lg:col-span-8"
        >
          <span className="corner top-left" aria-hidden="true" />
          <span className="corner bottom-right" aria-hidden="true" />
          <p className="mono-label text-zinc-500 dark:text-zinc-600">CH.01 — Why me</p>
          <p className="mt-5 text-lg md:text-xl leading-relaxed text-zinc-700 dark:text-zinc-300">
            I&apos;m <span className="font-semibold text-zinc-900 dark:text-white">Manish</span> — a freelance full-stack
            developer. For the past year I&apos;ve shipped inventory systems, realtime apps, and data-driven sites
            with <span className="text-emerald-700 dark:text-emerald-300">clean architecture and documented handovers</span>.
          </p>
          <p className="mt-4 text-base leading-relaxed text-zinc-500 dark:text-zinc-500">
            No agency layers, no handoffs, no jargon. You describe the outcome, I scope it fixed,
            demo it weekly, and hand over code your next developer will thank you for.
          </p>

          <div className="mt-9 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {traits.map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.08, ease }}
                className="rounded-2xl border border-zinc-900/10 bg-zinc-900/[0.03] p-5 transition-colors hover:border-emerald-600/40 dark:border-white/8 dark:bg-white/[0.02] dark:hover:border-emerald-400/35"
              >
                <Icon size={19} className="text-emerald-700 dark:text-emerald-400" />
                <p className="mt-3 font-display text-base font-bold text-zinc-900 dark:text-white">{value}</p>
                <p className="mono-label mt-1.5 !text-[9px] text-zinc-500 dark:text-zinc-600">{label}</p>
              </motion.div>
            ))}
          </div>
        </motion.article>

        {/* Stack rail */}
        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, delay: 0.12, ease }}
          className="gradient-border-quiet flex flex-col justify-between rounded-[1.75rem] p-8 lg:col-span-4"
        >
          <div>
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg font-bold text-zinc-900 dark:text-white">Client-ready stack</h3>
              <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">
                <i className="size-1.5 animate-pulse rounded-full bg-emerald-600 dark:bg-emerald-400" /> Live
              </span>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {stack.map((t) => (
                <span
                  key={t}
                  className="cursor-default rounded-lg border border-zinc-900/10 bg-zinc-900/[0.03] px-3 py-1.5 text-xs font-medium text-zinc-600 transition-colors hover:border-emerald-600/45 hover:text-zinc-900 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-400 dark:hover:border-emerald-400/45 dark:hover:text-white"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-8 border-t hairline pt-6">
            <p className="text-sm font-bold text-emerald-700 dark:text-emerald-300">Why clients hire me</p>
            <p className="mt-1.5 text-[13px] leading-relaxed text-zinc-500 dark:text-zinc-500">
              Fixed quotes, weekly demos, documented handover — and code I&apos;d be happy to inherit myself.
            </p>
            <a href="#process" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 transition-colors hover:text-emerald-700 dark:text-white dark:hover:text-emerald-300">
              See how I work <span aria-hidden="true">→</span>
            </a>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
