import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView/HomeView.vue";
import TeamView from "../views/TeamView.vue";
import RoadmapView from "../views/RoadmapView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      beforeEnter: () => {
        const app = document.querySelector("#app");
        const logo = document.querySelector("#main-logo");
        document.body.style.overflow = "hidden";
        if (app && logo) {
          app.classList.remove("roadmap-background");
          logo.removeAttribute("style");
        }
      },
    },
    {
      path: "/team",
      name: "team",
      component: TeamView,
      beforeEnter: () => {
        const app = document.querySelector("#app");
        const logo = document.querySelector("#main-logo");
        if (app && logo) {
          app.classList.remove("roadmap-background");
          logo.removeAttribute("style");
        }
      },
    },
    {
      path: "/billoflading",
      name: "billoflading",
      component: RoadmapView,
      beforeEnter: () => {
        const app = document.querySelector("#app");
        const logo = document.querySelector("#main-logo");
        if (app && logo) {
          app.classList.add("roadmap-background");
          logo.setAttribute("style", "filter: brightness(250%)");
        }
      },
    },
  ],
});

export default router;
