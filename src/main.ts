import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

const preferencesLocal = JSON.parse(
  localStorage.getItem("preferences") || "{}"
);

app.use(createPinia());
app.use(
  createI18n({ locale: preferencesLocal.language || "en", legacy: false })
);
app.use(router);

app.mount("#app");
