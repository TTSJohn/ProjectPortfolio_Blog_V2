

import * as firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyB0WeSN4nRRXj8NSKnAYL4Mjlh3zpQIfEE",
    authDomain: "thetaoofjavascript.firebaseapp.com",
    databaseURL: "https://thetaoofjavascript.firebaseio.com",
    projectId: "thetaoofjavascript",
    storageBucket: "thetaoofjavascript.appspot.com",
    messagingSenderId: "388991367398"
  };
  firebase.initializeApp(config);

function getFirebaseRef(refPath) {
  return firebase.database().ref(refPath);
}

export default {
  getFirebaseRef: getFirebaseRef
};