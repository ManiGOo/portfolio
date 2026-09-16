import { motion } from "framer-motion";
import { BarChart3, Blocks, FileCheck, Wrench } from "lucide-react";
import SectionHeading from "./SectionHeading";

const ease = [0.16, 1, 0.3, 1];

const services = [
  {
    Icon: Blocks,
    title: "Custom Web Apps",
    desc: "Django or FastAPI backends with React frontends — auth, dashboards, workflows, roles. Built to be extended, not rewritten.",
  },
  {
    Icon: FileCheck,
    title: "APIs & Integrations",
    desc: "REST APIs, payment hooks, third-party services and webhooks — documented, versioned, and tested before they touch production.",
  },
  {
    Icon: BarChart3,
    title: "Business Dashboards",
    desc: "Inventory, bookings, reporting — your day-to-day operations on one fast screen instead of five spreadsheets.",
  },
  {
    Icon: Wrench,
    title: "Fixes & Maintenance",
    desc: "Already have a codebase? I'll audit it, fix what's broken, close security gaps, and keep it updated month to month.",
  },
];

const engagement = [
  {
    name: "Fixed-scope",
    tag: "Most popular",
    desc: "One price agreed up front. Written scope, weekly demos, launch support included. No surprise invoices.",
  },
  {
    name: "Weekly sprint",
    tag: "Flexible",
    desc: "A focused week of build time on your backlog. Ideal for MVPs, feature pushes, and rescue work.",
  },
  {
    name: "Care plan",
    tag: "Ongoing",
    desc: "Updates, backups, monitoring and small fixes every month — so the app you paid for keeps paying you back.",
  },
];

export default function Services() {
  return (
    <section id="services" aria-label="Services" className="relative scroll-mt-28 border-t hairline bg-white/40 py-24 md:py-32 dark:bg-black/25">
      <div className="content-container">
        <SectionHeading
          index="02"
          eyebrow="Services — What you can hire me for"
          title="From idea to live URL, handled end to end."
          lede="One developer, full accountability. Fixed quotes before work starts, demos every week, and a handover you can actually maintain."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {services.map(({ Icon, title, desc }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.6, delay: Math.min(i * 0.07, 0.2), ease }}
              className="gradient-border group relative overflow-hidden rounded-[1.75rem] p-8 transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between">
                <span className="grid size-12 place-items-center rounded-2xl border border-emerald-600/25 bg-emerald-600/10 text-emerald-700 transition-transform duration-300 group-hover:scale-105 dark:border-emerald-400/25 dark:bg-emerald-400/10 dark:text-emerald-300">
                  <Icon size={22} />
                </span>
                <span className="font-mono text-xs text-zinc-400 dark:text-zinc-600">0{i + 1}</span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">{title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">{desc}</p>
            </motion.article>
          ))}
        </div>

        {/* engagement models */}
        <div className="mt-12">
          <p className="mono-label text-zinc-500 dark:text-zinc-500">How we can work together</p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {engagement.map((e, i) => (
              <motion.div
                key={e.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08, ease }}
                className="gradient-border-quiet rounded-3xl p-7"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-display text-lg font-bold text-zinc-900 dark:text-white">{e.name}</h4>
                  <span className="rounded-full border border-emerald-600/30 bg-emerald-600/[0.08] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-emerald-800 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-300">
                    {e.tag}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{e.desc}</p>
              </motion.div>
            ))}
          </div>
          <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-zinc-900 transition-colors hover:text-emerald-700 dark:text-white dark:hover:text-emerald-300">
            Get a scoped quote <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
