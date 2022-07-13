import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '@/views/Landing/LandingView.vue'
import ExploreView from '@/views/Explore/ExploreView.vue'
import ToolsView from '@/views/Tools/ToolsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingView
    },
    {
      path: '/explore',
      name: 'explore',
      component: ExploreView
    },
    {
      path: '/tools',
      name: 'tools',
      component: ToolsView
    },
  ]
})

export default router
