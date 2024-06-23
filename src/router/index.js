import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/HomePage.vue'
import About from '@/pages/AboutPage.vue'
import Mixin from '@/pages/MixinPage.vue'
import ColorShare from '@/pages/ColorSharePage.vue'
import ErrorPage from '@/pages/ErrorPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/mixin',
    name: 'Mixin',
    component: Mixin
  },
  {
    path: '/color/:red?/:green?/:blue?',
    name: 'ColorShare',
    component: ColorShare,
    props: route => ({
      red: Number(route.params.red),
      green: Number(route.params.green),
      blue: Number(route.params.blue)
    })
  },
  {
    path: '/color',
    redirect: '/error'
  },
  {
    path: '/error',
    name: 'Error',
    component: ErrorPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
