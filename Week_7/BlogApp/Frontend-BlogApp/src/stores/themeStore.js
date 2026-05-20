import { create } from "zustand";

// Read persisted preference, default to dark
const saved = localStorage.getItem("theme");
const initial = saved ? saved : "dark";

// Apply on load immediately (before React renders)
document.documentElement.setAttribute("data-theme", initial);

export const useTheme = create((set) => ({
  theme: initial,

  toggleTheme: () =>
    set((state) => {
      const next = state.theme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", next);
      document.documentElement.setAttribute("data-theme", next);
      return { theme: next };
    }),
}));
