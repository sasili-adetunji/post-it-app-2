// google route
// using firebase authentication method

import express from 'express';
import firebase from 'firebase';
import { firebaseAuth, ref, db } from '../../config/db';


const app = express();
const googleLogin = (app, db) => {
  app.post('/user/google', (req, res) => {
    let token,
      email,
      uid,
      displayName;
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    firebaseAuth().signInWithPopup(provider)
      .then((result) => {
        token = result.credential.accessToken;
        email = result.user.email;
        uid = result.user.uid;
        displayName = result.user.displayName;
      })
      .then((snap) => {
        const userRef = firebase.database()
       .ref('users/').child(uid).set({
         username: displayName,
         email
       });
      })
      .catch((error) => {
        res.send({
          message: error.message
        });
      });
  });
};

export default googleLogin;
