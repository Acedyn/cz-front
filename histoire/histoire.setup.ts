import { defineSetupVue3 } from "@histoire/plugin-vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
import "../src/styles/histoire.css";
import "../src/styles/fonts.css";

export const setupVue3 = defineSetupVue3(({ app }) => {
  const head = document.getElementsByTagName("HEAD")[0];
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
  head.appendChild(link);

  const preferencesLocal = JSON.parse(
    localStorage.getItem("preferences") || "{}"
  );
  app.use(createPinia());
  app.use(
    createI18n({ locale: preferencesLocal.language || "en", legacy: false })
  );
});
