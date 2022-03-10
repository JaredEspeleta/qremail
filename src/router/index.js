import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/serieEmailQR.vue'
import Next from '../views/serieMailversand.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/next',
    name: 'next',
    component: Next
  }
]

const router = new VueRouter({
  routes
})

export default router
