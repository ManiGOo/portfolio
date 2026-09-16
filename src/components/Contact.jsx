import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

const channels = [
  { Icon: Mail, label: "Email", value: "its.nathmanish@gmail.com", href: "mailto:its.nathmanish@gmail.com" },
  { Icon: Linkedin, label: "LinkedIn", value: "manishforyou", href: "https://www.linkedin.com" },
  { Icon: Github, label: "GitHub", value: "ManiGOo", href: "https://github.com/ManiGOo" },
];

export default function Contact() {
  return (
    <section id="contact" aria-label="Contact" className="relative scroll-mt-28 overflow-hidden border-t hairline">
      {/* finale signal band */}
      <div className="bg-emerald-500 text-black dark:bg-emerald-400">
        <div className="content-container flex flex-col gap-8 py-16 md:py-20 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-black/60">
              06 — Final chapter · Booking new projects
            </p>
            <h2 className="mt-4 font-display display-tight font-bold text-[clamp(2.8rem,7vw,5.5rem)]">
              Have a project<br />in mind?
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-[15px] font-medium leading-relaxed text-black/70">
              Tell me what you&apos;re building — you&apos;ll get a fixed-scope quote
              and next steps within 24 hours. No pressure, no sales calls.
            </p>
            <a
              href="mailto:its.nathmanish@gmail.com"
              className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-black px-7 py-4 text-sm font-bold text-white transition-transform duration-200 hover:-translate-y-0.5"
            >
              its.nathmanish@gmail.com <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* channels + footer */}
      <div className="bg-[#eef1ed] dark:bg-[#060807]">
        <div className="content-container py-14">
          <div className="grid gap-4 md:grid-cols-3">
            {channels.map(({ Icon, label, value, href }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08, ease }}
                className="group relative overflow-hidden rounded-3xl border border-zinc-900/10 bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-emerald-600/40 hover:shadow-[0_20px_45px_-24px_rgba(24,27,25,0.35)] dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-emerald-400/40 dark:hover:shadow-none"
              >
                <ArrowUpRight size={18} className="absolute right-5 top-5 text-zinc-400 transition-all duration-200 group-hover:rotate-45 group-hover:text-emerald-700 dark:text-zinc-700 dark:group-hover:text-emerald-300" />
                <Icon size={30} strokeWidth={1.6} className="text-zinc-700 transition-colors group-hover:text-emerald-700 dark:text-zinc-300 dark:group-hover:text-emerald-300" />
                <p className="mono-label mt-6 !text-[10px] text-zinc-500 dark:text-zinc-600">{label}</p>
                <p className="mt-1.5 truncate text-[15px] font-semibold text-zinc-900 dark:text-zinc-100">{value}</p>
              </motion.a>
            ))}
          </div>

          <footer className="mt-14 flex flex-col gap-5 border-t hairline pt-8 md:flex-row md:items-center md:justify-between">
            <a href="#top" className="flex items-center gap-3">
              <span className="grid size-8 place-items-center rounded-lg bg-emerald-600 font-display text-sm font-bold text-white dark:bg-emerald-400 dark:text-black">M</span>
              <span className="font-display text-sm font-bold text-zinc-900 dark:text-white">Manish<span className="text-emerald-700 dark:text-emerald-400">.dev</span></span>
            </a>
            <nav aria-label="Footer">
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-500 dark:text-zinc-500">
                <li><a href="#about" className="transition-colors hover:text-zinc-900 dark:hover:text-white">About</a></li>
                <li><a href="#services" className="transition-colors hover:text-zinc-900 dark:hover:text-white">Services</a></li>
                <li><a href="#work" className="transition-colors hover:text-zinc-900 dark:hover:text-white">Work</a></li>
                <li><a href="#process" className="transition-colors hover:text-zinc-900 dark:hover:text-white">Process</a></li>
                <li><a href="#contact" className="transition-colors hover:text-zinc-900 dark:hover:text-white">Contact</a></li>
              </ul>
            </nav>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-600">
              Designed & built by Manish · 2026
            </p>
          </footer>
        </div>
      </div>
    </section>
  );
}
