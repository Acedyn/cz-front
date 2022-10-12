import { createRouter, createWebHistory } from "vue-router";
import LandingView from "@/views/landing/LandingView.vue";
import { usePreferencesStore } from "@/stores/preferences";

import authRoutes from "./authRoutes";
import immersionRoute from "./immersionRoutes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: LandingView,
      beforeEnter() {
        const preferences = usePreferencesStore();
        preferences.setHeaderCollapse(false);
      },
    },
    {
      path: "/marketplace",
      name: "maketplace",
      component: () => {
        return;
      },
      beforeEnter() {
        location.href = "https://magiceden.io/marketplace/cardboard_citizens";
      },
    },

    immersionRoute,

    ...authRoutes,
  ],
});

export default router;
