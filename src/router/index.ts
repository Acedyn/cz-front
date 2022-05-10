import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TeamView from '../views/TeamView.vue'
import RoadmapView from '../views/RoadmapView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { transition: "slide" }
    },
    {
      path: '/team',
      name: 'team',
      component: () => TeamView,
      meta: { transition: "fade" }
    },
    {
      path: '/roadmap',
      name: 'roadmap',
      component: () => RoadmapView,
      meta: { transition: "flip" }
    },
  ]
})

export default router
