import API from 'api/firebase'
import * as types from 'store/types'

const state = {
  content: [
  /*
  {
    "brandKO": "쿠보타",
    "brandJP": "久保田",
    "brandEN": "KUBOTA",
    "productKO": "만쥬",
    "productJA": "萬壽",
    "productFU": "まんじゅ",
    "descriptionKO": "향기로운 맛을 절묘하게 빗어낸 '쿠보타 시리즈'의 최고봉입니다. 조화로운 감칠맛으로 존재감을 어필합니다.",
    "classificationKO": "준마이다이긴죠",
    "classificationJA": "純米大吟醸",
    "ingredientsKO": "고햐쿠만고쿠",
    "ingredientsJP": "五百万石",
    "ricePolishingRate": "50%",
    "alcoholByVolume": "15%",
    "sakeMeterValue": "+2",
    "acidityLevel": "1.2",
    "volumePrice": [
      "1.8L 8,110円",
      "720ml 3,640円"
    ],
    "companyKO": "아사히주조",
    "companyJP": "朝日酒造",
    "locationKO": "니가타",
    "locationJP": "新潟県",
    "imageURL": "product02_001"
  }
  */
  ],
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
