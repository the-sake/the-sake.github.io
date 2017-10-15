import API from 'api/firebase'
import * as types from 'store/types'

const state = {
  list: [
    { enable: false, name: "준마이다이긴죠" },
    { enable: false, name: "다이긴죠" },
    { enable: false, name: "준마이긴죠" },
    { enable: false, name: "긴죠" },
    { enable: false, name: "토쿠베츠준마이" },
    { enable: false, name: "토쿠베츠혼죠조" },
    { enable: false, name: "준마이" },
    { enable: false, name: "혼죠조" },
    { enable: false, name: "후츠슈" },
  ],
}

const getters = {
  enableLevels: state => {
    return state.list.filter(level => level.enable)
  }
}

const mutations = {
  [types.SWITCH_LEVEL] (state, {name, enable}) {
    const index = state.list.findIndex(element => element.name === name)
    state.list[index].enable = enable
  },
}

const actions = {
}

export default {
  state,
  getters,
  mutations,
  actions,
}
