import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import Calendar from './Calendar'
import About from './About'
import Signup from './Signup'


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
      path: '/signup',
      component: Signup
    },
    {
      path: '/login',
      component: () => import('./Login.vue')
    },
  ]
})