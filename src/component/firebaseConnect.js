import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAoZXBhgWxPMbBoCkNz6EwqFgyqTbGldJk",
    authDomain: "redux-react-firebase-6c45c.firebaseapp.com",
    databaseURL: "https://redux-react-firebase-6c45c-default-rtdb.firebaseio.com",
    projectId: "redux-react-firebase-6c45c",
    storageBucket: "redux-react-firebase-6c45c.appspot.com",
    messagingSenderId: "1069028836251",
    appId: "1:1069028836251:web:2e3a933cef2fb64f76573e",
    measurementId: "G-ZNWBWR6498"
  };
  firebase.initializeApp(firebaseConfig);
  
  export const noteData = firebase.database().ref('dataForNote')