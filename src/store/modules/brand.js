import API from 'api/firebase'
import * as types from 'store/types'

const state = {
  list: [
    { enable: false, name: "코시노칸바이", nameJP: "越乃寒梅" },
    { enable: false, name: "쿠보타", nameJP: "久保田" },
    { enable: false, name: "핫카이산", nameJP: "八海山" },
    { enable: false, name: "닷사이", nameJP: "獺祭" },
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
