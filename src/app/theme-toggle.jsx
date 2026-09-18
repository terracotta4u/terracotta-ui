"use client";

import { useEffect, useState } from "react";

const options = ["system", "light", "dark"];

function explicitTheme() {
  const value = document.documentElement.getAttribute("data-theme");
  if (value === "light" || value === "dark") return value;
  return null;
}

function resolvedTheme() {
  return (
    explicitTheme() ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
  );
}

function isTypingTarget(target) {
  if (!(target instanceof HTMLElement)) return false;
  if (target.isContentEditable) return true;
  const tag = target.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState("system");

  function applyTheme(value) {
    setTheme(value);
    if (value === "system") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", value);
    }
  }

  function toggle() {
    applyTheme(resolvedTheme() === "dark" ? "light" : "dark");
  }

  useEffect(() => {
    applyTheme(explicitTheme() || "system");

    function onKey(event) {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (event.key !== "d" && event.key !== "D") return;
      if (isTypingTarget(event.target)) return;
      event.preventDefault();
      applyTheme(resolvedTheme() === "dark" ? "light" : "dark");
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="cluster gap-2 items-center" role="group" aria-label="Theme">
      {options.map((value) => (
        <button
          key={value}
          className="btn btn-ghost"
          type="button"
          aria-pressed={theme === value}
          onClick={() => applyTheme(value)}
        >
          {value}
        </button>
      ))}
      <button
        className="preview-kbd type-data"
        type="button"
        aria-keyshortcuts="d"
        aria-label="Toggle light and dark"
        title="Toggle light and dark"
        onClick={toggle}
      >
        D
      </button>
    </div>
  );
}
