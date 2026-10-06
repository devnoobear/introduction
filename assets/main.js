(() => {
  "use strict";
  const preference = window.matchMedia("(prefers-color-scheme: dark)");
  const storageKey = "introduction-color-theme";
  let chosenTheme = null;
  try {
    const saved = localStorage.getItem(storageKey);
    if (saved === "light" || saved === "dark") chosenTheme = saved;
  } catch { /* The page works when browser storage is unavailable. */ }
  const setTheme = (theme) => {
    document.documentElement.dataset.theme = theme;
    const toggle = document.querySelector(".theme-toggle");
    if (toggle) {
      toggle.setAttribute("aria-pressed", String(theme === "dark"));
      toggle.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} theme`);
    }
  };
  setTheme(chosenTheme || (preference.matches ? "dark" : "light"));
  preference.addEventListener("change", (event) => {
    if (!chosenTheme) setTheme(event.matches ? "dark" : "light");
  });
  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".theme-toggle");
    toggle.hidden = false;
    setTheme(document.documentElement.dataset.theme);
    toggle.addEventListener("click", () => {
      chosenTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      setTheme(chosenTheme);
      try { localStorage.setItem(storageKey, chosenTheme); } catch { /* Optional persistence. */ }
    });
    const links = [...document.querySelectorAll("nav a[href^='#']")];
    const sections = links.map((link) => document.querySelector(link.getAttribute("href")));
    const header = document.querySelector(".site-header");
    const updateNavigation = () => {
      const offset = header.getBoundingClientRect().height + 64;
      let current = 0;
      sections.forEach((section, index) => {
        if (section.getBoundingClientRect().top <= offset) current = index;
      });
      // The last section may never reach the header on a tall viewport.
      if (window.scrollY > 0 && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        current = sections.length - 1;
      }
      links.forEach((link, index) => {
        if (index === current) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    };
    let queued = false;
    const scheduleUpdate = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => { updateNavigation(); queued = false; });
    };
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", scheduleUpdate);
    updateNavigation();
  });
})();
