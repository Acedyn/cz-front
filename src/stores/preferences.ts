import { defineStore } from "pinia";

const preferencesLocal = JSON.parse(
  localStorage.getItem("preferences") || "{}"
);
export const usePreferencesStore = defineStore({
  id: "preferences",
  state: () => ({
    theme: preferencesLocal.theme || "light",
  }),
  getters: {
    getTheme: (state) => state.theme,
  },
  actions: {
    toggleTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";

      preferencesLocal.theme = this.theme;
      localStorage.setItem("preferences", JSON.stringify(preferencesLocal));
    },
  },
});
