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
    pageLeft: "120px",
    headerCollapse: false,
  }),
  getters: {
    getTheme: (state) => state.theme,
    getLanguage: (state) => state.language,
    getPageLeft: (state) => state.pageLeft,
    getHeaderCollapse: (state) => state.headerCollapse,
  },
  actions: {
    setHeaderCollapse(value: boolean) {
      this.headerCollapse = value;
    },
    toggleTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";

      preferencesLocal.theme = this.theme;
      localStorage.setItem("preferences", JSON.stringify(preferencesLocal));
    },
    setPageLeft(value: string) {
      this.pageLeft = value;
    },
    setLanguage(language: "en" | "fr" | "es", locale: Ref<string>) {
      this.language = language;
      locale.value = language;

      preferencesLocal.language = this.language;
      localStorage.setItem("preferences", JSON.stringify(preferencesLocal));
    },
  },
});
