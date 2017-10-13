import Vue from 'vue'
import VueRouter from 'vue-router'

import store from 'store'
import App from './App.vue'
import Home from 'components/Home.vue'
import './assets/style.css'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  // { path: '/hiragana', component: hiragana },
  // { path: '/pronunciations1', component: pronunciationsOne },
  // { path: '/pronunciations2', component: pronunciationsTwo },
  // { path: '/greetings', component: greetings },
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
