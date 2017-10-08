import Vue from 'vue'
import Vuex from 'vuex'

// import hiragana from './modules/hiragana'
// import pronunciationsOne from './modules/pronunciationsOne'
// import pronunciationsTwo from './modules/pronunciationsTwo'
// import greetings from './modules/greetings'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    // hiragana,
    // pronunciationsOne,
    // pronunciationsTwo,
    // greetings,
  },

  strict: process.env.NODE_ENV !== 'production'
})
