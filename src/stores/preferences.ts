import { defineStore } from "pinia";

export const usePreferencesStore = defineStore({
  id: "preferences",
  state: () => ({
    theme: "light",
  }),
  getters: {
    getTheme: (state) => state.theme,
  },
  actions: {
    toggleTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
    },
  },
});
