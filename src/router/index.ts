import { createRouter, createWebHistory } from "vue-router";
import LandingView from "@/views/landing/LandingView.vue";
import ImmersionView from "@/views/immersion/ImmersionView.vue";
import ToolsView from "@/views/tools/ToolsView.vue";

import immersionRoutes from "./immersionRoutes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: LandingView,
    },
    {
      path: "/immersion",
      name: "immersion",
      component: ImmersionView,
    },
    {
      path: "/tools",
      name: "tools",
      component: ToolsView,
    },

    ...immersionRoutes,
  ],
});

export default router;
