import firebase from 'firebase';

  var firebaseConfig = {
    apiKey: "AIzaSyBBlg9nmQSq8bflP4DVxxZwqj_cKABgAb4",
    authDomain: "quiz-buzzer-app-24f8b.firebaseapp.com",
    databaseURL: "https://quiz-buzzer-app-24f8b-default-rtdb.firebaseio.com",
    projectId: "quiz-buzzer-app-24f8b",
    storageBucket: "quiz-buzzer-app-24f8b.appspot.com",
    messagingSenderId: "532038136132",
    appId: "1:532038136132:web:1735fcf415c8189ab46711",
    measurementId: "G-F9SNGR0SPE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();