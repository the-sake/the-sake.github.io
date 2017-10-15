import API from 'api/firebase'
import * as types from 'store/types'

const state = {
  content: [
  /*
  {
    "nameKO": "쥰마이",
    "nameJA": "純米",
    "nameFurigana": "じゅんまい",
    "mean": "순미",
    "ruby": [
      {
        "kanji": "純",
        "furigana": "じゅん",
        "mean": "순수할 순"
      },
      {
        "kanji": "米",
        "furigana": "まい",
        "mean": "쌀 미"
      }
    ],
    "ricePolishingRate": "규제없음",
    "price": "1,700 ~ 3,600円"
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
