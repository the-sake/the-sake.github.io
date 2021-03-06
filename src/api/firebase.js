// import axios from 'axios'
import firebase from 'firebase'

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

  getSake() {
    return firebase.database()
      .ref('/sake/')
      .once('value')
      .then((snapshot) => snapshot.val())
  },

  getCategories() {
    return firebase.database()
      .ref('/categories/')
      .once('value')
      .then((snapshot) => snapshot.val())
  },

  getCompanies() {
    return firebase.database()
      .ref('/brands/')
      .once('value')
      .then((snapshot) => snapshot.val())
  },

}
