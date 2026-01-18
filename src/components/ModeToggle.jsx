import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";

function ModeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    // Initialize from localStorage or system preference
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("darkMode");
      if (saved !== null) return saved === "true";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return true; // Default to dark for terminal theme
  });

  useEffect(() => {
    // Apply dark mode class to document
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Save preference to localStorage
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  return (
    <div className="flex items-center gap-3">
      <Switch
        checked={darkMode}
        onChange={setDarkMode}
        className={`${
          darkMode ? "bg-terminal-green" : "bg-terminal-bg-tertiary"
        } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-terminal-green focus:ring-offset-2 focus:ring-offset-terminal-bg-primary`}
      >
        <span className="sr-only">Toggle dark mode</span>
        <span
          className={`${
            darkMode ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-terminal-bg-primary transition-transform`}
        />
      </Switch>
    </div>
  );
}

export default ModeToggle;
