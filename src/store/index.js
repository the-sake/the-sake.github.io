import Vue from 'vue'
import Vuex from 'vuex'

import sake from './modules/sake'
// import pronunciationsOne from './modules/pronunciationsOne'
// import pronunciationsTwo from './modules/pronunciationsTwo'
// import greetings from './modules/greetings'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    sake,
    // pronunciationsOne,
    // pronunciationsTwo,
    // greetings,
  },

  strict: process.env.NODE_ENV !== 'production'
})
