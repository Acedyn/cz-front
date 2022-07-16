import { createRouter, createWebHistory } from "vue-router";
import LandingView from "@/views/landing/LandingView.vue";
import ExploreView from "@/views/explore/ExploreView.vue";
import ToolsView from "@/views/tools/ToolsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: LandingView,
    },
    {
      path: "/explore",
      name: "explore",
      component: ExploreView,
    },
    {
      path: "/tools",
      name: "tools",
      component: ToolsView,
    },
  ],
});

export default router;
