import firebase from 'firebase';
import dotenv from 'dotenv';
dotenv.config();

const config = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId
};

let db = firebase.initializeApp(config);
export const firebaseAuth = firebase.auth;
export const ref = firebase.database().ref();
export default db;