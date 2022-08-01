import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(createI18n({ locale: "en", legacy: false }));
app.use(router);

app.mount("#app");
