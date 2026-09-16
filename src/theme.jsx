import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({ theme: "light", toggle: () => {} });

function getInitialTheme() {
  try {
    return localStorage.getItem("portfolio-theme") === "dark" ? "dark" : "light";
  } catch {
    return "light";
  }
}

/**
 * ThemeProvider — light mode by default, persisted toggle.
 * Drives Tailwind's class-based dark variant + the ambient canvas.
 */
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      /* storage unavailable — theme still applies for the session */
    }
    window.dispatchEvent(new CustomEvent("theme-change", { detail: theme }));
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);
