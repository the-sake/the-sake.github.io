import API from 'api/firebase'
import * as types from 'store/types'

const state = {
  content: [
  /*
  {
    "brandKO": "쿠보타",
    "brandJA": "久保田",
    "brandFU": "くぼた",
    "brandEN": "KUBOTA",
    "companyKO": "아사히슈조",
    "companyJA": "朝日酒造",
    "locationKO": "니가타",
    "locationJA": "新潟県",
    "feature": "처음으로 니혼슈를 접한다면 쿠보타를 마셔라라는 표현이 말해주듯, 사케마니아는 물론이고 일반인들에게가지 폭넓은 인지도를 자랑하는 브랜드입니다. 맛이 달고 무겁던 사케들이 주류를 이루던 1970년대, 깔끔하고 쌉싸름한 타입이 유행할 것이란 판단에 '쿠보타' 시리즈를 투입하여 시장에 진입, 본고장인 니이가타는 물론이고 전국에 그 맛과 명성을 떨쳤습니다.",
    "links": {
      "JA": "http://www.asahi-shuzo.co.jp/",
      "EN": "http://www.asahi-shuzo.co.jp/en/",
      "KO": "http://www.asahi-shuzo.co.jp/kr/"
    },
    "ruby": [
      {
        "kanji": "久",
        "furigana": "く",
        "mean": "오랠 구"
      },
      {
        "kanji": "保",
        "furigana": "ほ",
        "mean": "지킬 보"
      },
      {
        "kanji": "田",
        "furigana": "た",
        "mean": "밭 전"
      }
    ],
    "imageURL": "b_kubota_001.png"
  },
  */
  ],
}

const getters = {
}

const mutations = {
  [types.RECEIVE_COMPANIES] (state, {companies}) {
    state.content = companies
  },
}

const actions = {
  [types.FETCH_COMPANIES] (context) {
    API.getCompanies()
      .then(companies => {
        context.commit(types.RECEIVE_COMPANIES, {companies})
      })
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
