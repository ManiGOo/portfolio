import { Moon, Sun } from "lucide-react";
import { useTheme } from "../theme";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className={`grid size-9 place-items-center rounded-xl border border-zinc-900/10 bg-zinc-900/[0.04] text-zinc-600 transition-colors hover:border-emerald-600/50 hover:text-emerald-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-300 dark:hover:border-emerald-400/50 dark:hover:text-emerald-300 ${className}`}
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
