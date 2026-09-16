import { useEffect, useRef } from "react";

/**
 * WordReveal — staggered-word-reveal skill
 * Splits plain text into words, reveals once at 20% visibility.
 * Keeps original sentence as aria-label. No-JS content stays visible.
 */
export default function WordReveal({ text, as: Tag = "span", className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    document.documentElement.classList.add("js");

    const original = text;
    el.setAttribute("aria-label", original.trim());
    el.textContent = "";
    const parts = original.split(/(\s+)/);
    let idx = 0;
    parts.forEach((part) => {
      if (!part.trim()) {
        el.appendChild(document.createTextNode(part));
        return;
      }
      const s = document.createElement("span");
      s.className = "word-reveal__word";
      s.setAttribute("aria-hidden", "true");
      s.style.setProperty("--word-index", String(idx));
      s.textContent = part;
      el.appendChild(s);
      idx += 1;
    });
    el.classList.add("is-ready");

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [text]);

  return (
    <Tag ref={ref} data-word-reveal className={`word-reveal ${className}`}>
      {text}
    </Tag>
  );
}
