import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
import * as getters from './getters'
import sake from './modules/sake'
import brand from './modules/brand'
import level from './modules/level'
// import pronunciationsOne from './modules/pronunciationsOne'
// import pronunciationsTwo from './modules/pronunciationsTwo'
// import greetings from './modules/greetings'

Vue.use(Vuex)

export default new Vuex.Store({
  // actions,
  getters,
  modules: {
    sake,
    brand,
    level,
    // pronunciationsOne,
    // pronunciationsTwo,
    // greetings,
  },

  strict: process.env.NODE_ENV !== 'production'
})
