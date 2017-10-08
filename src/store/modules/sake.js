import API from 'api/firebase'
import * as types from 'store/types'

const state = {
  content: [
  ]
}

const getters = {
}

const mutations = {
  [types.RECEIVE_SAKE] (state, {sake}) {
    state.content = sake
  },
}

const actions = {
  [types.FETCH_SAKE] (context) {
    API.getSake()
      .then(sake => {
        context.commit(types.RECEIVE_SAKE, {sake})
      })
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
