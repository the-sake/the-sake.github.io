import API from 'api/firebase'
import * as types from 'store/types'

const state = {
  content: [
  /*
  {
    "brandKO": "쿠보타",
    "brandJA": "久保田",
    "brandEN": "KUBOTA",
    "productKO": "만쥬",
    "productJA": "萬壽",
    "productFU": "まんじゅ",
    "descriptionKO": "향기로운 맛을 절묘하게 빗어낸 '쿠보타 시리즈'의 최고봉입니다. 조화로운 감칠맛으로 존재감을 어필합니다.",
    "classificationKO": "준마이다이긴죠",
    "classificationJA": "純米大吟醸",
    "ingredientsKO": "고햐쿠만고쿠",
    "ingredientsJA": "五百万石",
    "ricePolishingRate": "50%",
    "alcoholByVolume": "15%",
    "sakeMeterValue": "+2",
    "acidityLevel": "1.2",
    "volumePrice": [
      {
        "volume": "1800ml",
        "price": "8,110円"
      },
      {
        "volume": "720ml",
        "price": "3,640円"
      }
    ],
    "companyKO": "아사히주조",
    "companyJA": "朝日酒造",
    "locationKO": "니가타",
    "locationJA": "新潟県",
    "imageURL": "p_kubota_001.png"
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
