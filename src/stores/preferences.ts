import { defineStore } from "pinia";
import type { Ref } from "vue";

const preferencesLocal = JSON.parse(
  localStorage.getItem("preferences") || "{}"
);
export const usePreferencesStore = defineStore({
  id: "preferences",
  state: () => ({
    theme: preferencesLocal.theme || "light",
    language: preferencesLocal.language || "en",
  }),
  getters: {
    getTheme: (state) => state.theme,
    getLanguage: (state) => state.language,
  },
  actions: {
    toggleTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";

      preferencesLocal.theme = this.theme;
      localStorage.setItem("preferences", JSON.stringify(preferencesLocal));
    },
    setLanguage(language: "en" | "fr" | "es", locale: Ref<string>) {
      this.language = language;
      locale.value = language;

      preferencesLocal.language = this.language;
      localStorage.setItem("preferences", JSON.stringify(preferencesLocal));
    },
  },
});
