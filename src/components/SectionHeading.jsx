import { motion } from "framer-motion";
import WordReveal from "./WordReveal";

/**
 * SectionHeading — number-details + editorial-tech + animation-systems
 * Mono index (01), utility label, word-reveal headline, hairline rule.
 */
export default function SectionHeading({ index, eyebrow, title, lede, align = "left" }) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "text-center" : "text-left"} mb-14 md:mb-20`}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`flex items-center gap-4 mb-6 ${centered ? "justify-center" : ""}`}
      >
        <span className="mono-label text-emerald-700 dark:text-emerald-400/90">{index}</span>
        <span className="h-px w-10 bg-emerald-600/40 dark:bg-emerald-400/40" aria-hidden="true" />
        <span className="mono-label text-zinc-500 dark:text-zinc-500">{eyebrow}</span>
      </motion.div>

      <WordReveal
        as="h2"
        text={title}
        className="font-display display-tight text-balance font-bold text-4xl sm:text-5xl md:text-6xl text-zinc-900 dark:text-zinc-50"
      />

      {lede && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className={`mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 ${centered ? "mx-auto" : ""}`}
        >
          {lede}
        </motion.p>
      )}
    </div>
  );
}
