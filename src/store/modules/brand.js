import API from 'api/firebase'
import * as types from 'store/types'

const state = {
  list: [
    { enable: false, name: "코시노 칸바이", nameJP: "" },
    { enable: false, name: "쿠보타", nameJP: "" },
    { enable: false, name: "핫까이산", nameJP: "" },
    { enable: false, name: "닷사이", nameJP: "" },
  ],
}

const getters = {
  enableBrands: state => {
    return state.list.filter(brand => brand.enable)
  }
}

const mutations = {
  [types.SWITCH_BRAND] (state, {name, enable}) {
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
