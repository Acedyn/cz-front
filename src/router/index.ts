import { createRouter, createWebHistory } from "vue-router";
import LandingView from "@/views/landing/LandingView.vue";

import immersionRoute from "./immersionRoutes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: LandingView,
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
  ],
});

export default router;
