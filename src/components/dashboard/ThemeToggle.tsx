"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="h-10 w-10 rounded-lg border border-slate-200 dark:border-slate-700" />
    );
  }

  return (
    <button
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
    >
      {theme === "dark" ? (
        <Sun size={20} />
      ) : (
        <Moon size={20} />
      )}
    </button>
  );
}