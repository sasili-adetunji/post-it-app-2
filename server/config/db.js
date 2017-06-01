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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 5a5222c40ad3aa257050eefb27abcf15c6be3595

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
export default db;


<<<<<<< HEAD
=======
export const firebaseAuth = firebase.auth;
export const ref = firebase.database().ref();
export default db;
>>>>>>> fb950ca865531320c85b57abb71633b9d726a2e4
=======

>>>>>>> 5a5222c40ad3aa257050eefb27abcf15c6be3595
