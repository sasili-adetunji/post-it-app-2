import firebase from 'firebase';


const config = {
  apiKey: "AIzaSyAPkaQ0wLHWqT_u20dcXLqPENZsmea7mgs",
  authDomain: "postit-335c1.firebaseapp.com",
  databaseURL: "https://postit-335c1.firebaseio.com",
  projectId: "postit-335c1",
  storageBucket: "postit-335c1.appspot.com",
  messagingSenderId: "63329792793"
};

let db = firebase.initializeApp(config);

export const ref = firebase.database().ref
export const firebaseAuth = firebase.auth
export default db;