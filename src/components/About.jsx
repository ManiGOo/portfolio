import { motion } from "framer-motion";
import { BookOpen, Code2, GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";

const ease = [0.16, 1, 0.3, 1];

const traits = [
  { icon: Code2, label: "Focus", value: "Python Full Stack" },
  { icon: GraduationCap, label: "Education", value: "BCA Student" },
  { icon: BookOpen, label: "Mode", value: "Daily Learner" },
];

const stack = ["Python", "Django", "DRF", "React", "JavaScript", "PostgreSQL", "Tailwind CSS", "Git", "REST APIs"];

export default function About() {
  return (
    <section id="about" aria-label="About" className="content-container relative scroll-mt-28 py-24 md:py-32">
      <SectionHeading
        index="01"
        eyebrow="Profile — Point of view"
        title="Logic first, interfaces that respect it."
        lede="BCA undergraduate specializing in Python-driven web development — robust Django backends, seamless React frontends, and codebases a team can actually maintain."
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
          <p className="mono-label text-zinc-600">CH.01 — Bio</p>
          <p className="mt-5 text-lg md:text-xl leading-relaxed text-zinc-300">
            I am a <span className="font-semibold text-white">BCA undergraduate</span> architecting
            backends with <span className="text-emerald-300">Django & DRF</span> and pairing them with
            considered frontend integration. I value clean code architecture — applications that are
            not just functional, but scalable.
          </p>
          <p className="mt-4 text-base leading-relaxed text-zinc-500">
            Actively seeking an internship to apply these skills in a collaborative environment
            and contribute to real-world software. Strong fundamentals in data structures,
            PEP 8 discipline, and REST design.
          </p>

          <div className="mt-9 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {traits.map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.08, ease }}
                className="rounded-2xl border border-white/8 bg-white/[0.02] p-5 transition-colors hover:border-emerald-400/35"
              >
                <Icon size={19} className="text-emerald-400" />
                <p className="mt-3 font-display text-base font-bold text-white">{value}</p>
                <p className="mono-label mt-1.5 !text-[9px] text-zinc-600">{label}</p>
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
          className="gradient-border-quiet flex flex-col justify-between rounded-[1.75rem] bg-[#0b0e0d]/90 p-8 lg:col-span-4"
        >
          <div>
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg font-bold text-white">Operating stack</h3>
              <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-400">
                <i className="size-1.5 animate-pulse rounded-full bg-emerald-400" /> Live
              </span>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {stack.map((t) => (
                <span
                  key={t}
                  className="cursor-default rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-zinc-400 transition-colors hover:border-emerald-400/45 hover:text-white"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-8 border-t hairline pt-6">
            <p className="text-sm font-bold text-emerald-300">Internship ready</p>
            <p className="mt-1.5 text-[13px] leading-relaxed text-zinc-500">
              Data structures, Python depth, and web frameworks — committed to readable,
              reviewed, tested code.
            </p>
            <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-emerald-300">
              Start a conversation <span aria-hidden="true">→</span>
            </a>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
