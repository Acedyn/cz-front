import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";

import SolanaWallets from "solana-wallets-vue";
import {
  GlowWalletAdapter,
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import "solana-wallets-vue/styles.css";

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
app.use(SolanaWallets, {
  wallets: [
    new SolflareWalletAdapter(),
    new LedgerWalletAdapter(),
    new PhantomWalletAdapter(),
    new GlowWalletAdapter(),
    new SlopeWalletAdapter(),
    new TorusWalletAdapter(),
  ],
  autoConnect: false,
});

app.mount("#app");
