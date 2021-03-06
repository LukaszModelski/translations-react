import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC8XPV72_v-phXq6p4kY9Kec9po1b-y9cY",
  authDomain: "translations-3c0c8.firebaseapp.com",
  databaseURL: "https://translations-3c0c8.firebaseio.com",
  projectId: "translations-3c0c8",
  storageBucket: "translations-3c0c8.appspot.com",
  messagingSenderId: "613261569807",
  appId: "1:613261569807:web:bde86c3efbe782b7"
};

firebase.initializeApp(config);

export const firebaseListenIfUserLoged = (callback) => {
  firebase.auth().onAuthStateChanged(user => callback(user))
}

export const firebaseSingOut = () => {
  firebase.auth().signOut()
    .then(function() {
      console.log('user signed out');
    })
    .catch(function(error) {
      console.log(error);
    });
}

export const firebaseAuth = (login, pass) => {
  firebase.auth().signInWithEmailAndPassword(login, pass)
    .then(function(val) {
      console.log('logged succesful');
      console.log(val);
    })
    .catch(function(error) {
      console.log(error.code);
      console.log(error.message);
    });
}

export const loadFirebaseData = () => {
  const databeseRef = firebase.database().ref();
	return databeseRef.once('value')
}

export const updateDB = (path, pl, en, attempts, success, percent) => {
  firebase.database().ref('/'+path+'/pl').set(pl);
  firebase.database().ref('/'+path+'/en').set(en);
  firebase.database().ref('/'+path+'/attempts').set(attempts);
  firebase.database().ref('/'+path+'/success').set(success);
  firebase.database().ref('/'+path+'/percent').set(percent);
}
