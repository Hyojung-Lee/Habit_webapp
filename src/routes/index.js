import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import Calendar from './Calendar'
import About from './About'


export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/calendar',
      component: Calendar
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/login',
      component: () => import('./Login.vue')
    },
  ]
})