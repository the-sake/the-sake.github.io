import Vue from 'vue'
import Vuex from 'vuex'

// import * as actions from './actions'
import * as getters from './getters'
import sake from './modules/sake'
import brand from './modules/brand'
import level from './modules/level'
import categories from './modules/categories'

Vue.use(Vuex)

export default new Vuex.Store({
  // actions,
  getters,
  modules: {
    sake,
    brand,
    level,
    categories,
  },

  strict: process.env.NODE_ENV !== 'production'
})
