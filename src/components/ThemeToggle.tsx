import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

function currentTheme() {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(currentTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full border border-rule p-2 text-ink-muted transition-colors hover:border-accent hover:text-accent"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
}
