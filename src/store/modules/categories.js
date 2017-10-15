import API from 'api/firebase'
import * as types from 'store/types'

const state = {
  content: [
  /*
  {
    "nameKO": "준마이다이긴죠",
    "nameJA": "純米大吟醸",
    "furigana": "じゅんまいだいぎんじょう",
    "mean": "순미대음양",
    "description": "정미보합 50% 이하",
    "price": "2,500円 ~",
    "type": "junmai"
  },
  */
  ],
}

const getters = {
}

const mutations = {
  [types.RECEIVE_CATEGORIES] (state, {categories}) {
    state.content = categories
  },
}

const actions = {
  [types.FETCH_CATEGORIES] (context) {
    API.getCategories()
      .then(categories => {
        context.commit(types.RECEIVE_CATEGORIES, {categories})
      })
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
