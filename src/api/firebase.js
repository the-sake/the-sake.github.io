// import axios from 'axios'
import firebase from 'firebase'
// require("firebase/auth");
// require("firebase/database");

var config = {
  apiKey: "AIzaSyBTXMWQ7ShVdCu-rQ4Uix7r_qgmKkyP2GQ",
  authDomain: "the-sake.firebaseapp.com",
  databaseURL: "https://the-sake.firebaseio.com",
  projectId: "the-sake",
  storageBucket: "the-sake.appspot.com",
  messagingSenderId: "1022858914083",
}

firebase.initializeApp(config)

export default {

  // getHiragana() {
  //   return axios.get('/api/h.json')
  //               .then(response => response.data)
  // },

  getSake() {
    return firebase.database()
                   .ref('/sake/')
                   .once('value')
                   .then((snapshot) => snapshot.val())
  },
}
