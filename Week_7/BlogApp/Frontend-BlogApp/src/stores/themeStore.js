import { create } from "zustand";

export const useTheme = create((set) => ({
  // Initialize from localStorage or default to false (light mode)
  isDarkMode: JSON.parse(localStorage.getItem("isDarkMode")) || false,
  
  toggleTheme: () => set((state) => {
    const newTheme = !state.isDarkMode;
    localStorage.setItem("isDarkMode", JSON.stringify(newTheme));
    
    // Toggle the .dark class on the document body
    if (newTheme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    
    return { isDarkMode: newTheme };
  }),

  // Optional: Function to initialize theme on app load
  initTheme: () => set((state) => {
    if (state.isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    return { isDarkMode: state.isDarkMode };
  })
}));
