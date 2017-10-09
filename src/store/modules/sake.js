import API from 'api/firebase'
import * as types from 'store/types'

const state = {
  content: [
  /*
    {
      "kName": "쿠보타 30주년 기념 준마이다이긴죠",
      "jName": "久保田 三十周年 記念 純米大吟釀",
      "eName": "KUBOTA 30th Anniversary Junmaidaiginjyo",
      "description": "창업 당시의 초심과, 쿠보타 탄생30주년의 새로운 결의로  당신의 가슴을 울리는 최고의 쿠보타를 양조하였습니다. 배와 메론을 연상시키는 화려한 향이 먼저 탄성을 부르고, 절묘한 밸런스의 감미와 산미의 조화가 혀를 만족시키며, 잡미 없는 깔끔한 목넘김이 ‘역시 쿠보타’라는 찬사를 불러옵니다. 향미를 풍부하게 즐기시고 싶으시면 상온에서, 깔끔한 뒷맛을 느끼시고 싶으시면 매우 차갑게, 둘 다 놓치고 싶지 않으시면 살짝 차갑게 드십시오.",
      "type": "다이긴죠(大吟釀)",
      "alcohol": "15%",
      "nihonShudo": "±0",
      "acidity": "1.3",
      "ricePolishingRate": "50%",
      "volume": "720ml",
      "company": "朝日酒造 아사히주조",
      "local": "니이가타",
      "importation": "(주)니혼슈코리아",
      "sales": "구입가능"
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
