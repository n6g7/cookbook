import firebase from 'firebase'
import ReduxSagaFirebase from 'redux-saga-firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAHEKRi0wSzEMkI4XyTmGepWoGv_-S5WxY',
  authDomain: 'abstract-robot-156419.firebaseapp.com',
  databaseURL: 'https://abstract-robot-156419.firebaseio.com',
  projectId: 'abstract-robot-156419',
  storageBucket: 'abstract-robot-156419.appspot.com',
  messagingSenderId: '146332288099'
})

const rsf = new ReduxSagaFirebase(firebaseApp)

export const authProvider = new firebase.auth.GoogleAuthProvider()

export default rsf
