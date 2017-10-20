import Vue from 'vue'
import VueRouter from 'vue-router'

import store from 'store'
import App from './App.vue'
import Home from 'components/Home.vue'
import Sake from 'components/Sake.vue'
import Classification from 'components/Classification.vue'
import Brands from 'components/Brands.vue'
import './assets/style.css'


Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/sake', component: Sake },
  { path: '/classification', component: Classification },
  { path: '/brands', component: Brands },
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

new Vue({
  el: '#app-sake',
  router,
  store,
  render: h => h(App)
})
