import axios from 'axios'

export default {

  getHiragana() {
    return axios.get('/api/h.json')
                .then(response => response.data)
  },

  getPronunciationsOne() {
    return axios.get('/api/p1.json')
                .then(response => response.data)
  },

  getPronunciationsTwo() {
    return axios.get('/api/p2.json')
                .then(response => response.data)
  },

  getGreetings() {
    return axios.get('/api/g.json')
                .then(response => response.data)
  },
}
