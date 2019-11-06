import Vue from 'vue'
import { IonicVueRouter } from '@ionic/vue';
import Home from './views/Home.vue'
import About from './views/About.vue'
import Report from './views/Report.vue'
import LoginPage from './views/LoginPage.vue'

Vue.use(IonicVueRouter)

export default new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/report',
      name: 'report',
      component: Report
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    }
  ]
})
