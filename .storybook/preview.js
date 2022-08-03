import { app } from "@storybook/vue3";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";

app.use(createPinia());
app.use(createI18n({}));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
