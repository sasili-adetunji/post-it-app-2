import firebase from 'firebase';
import dotenv from 'dotenv';

dotenv.config();

const nodeEnv = process.env.NODE_ENV || 'development';
let prefix = '';

if (nodeEnv === 'test') {
  prefix = 'TEST_';
}

const config = {
  apiKey: process.env[`${prefix}apiKey`],
  authDomain: process.env[`${prefix}authDomain`],
  databaseURL: process.env[`${prefix}databaseURL`],
  projectId: process.env[`${prefix}projectId`],
  storageBucket: process.env[`${prefix}storageBucket`],
  messagingSenderId: process.env[`${prefix}messagingSenderId`]
};

const db = firebase.initializeApp(config);


// export const firebaseAuth = firebase.auth;
// export const ref = firebase.database().ref();
export default db;

// export const messaging = firebase.messaging

