// google route
// using firebase authentication method

import express from 'express';
import firebase from 'firebase';
import { firebaseAuth } from '../../config/db';

const app = express();

/**
   * google signin
   * Route: post: '/user/google'
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {Response} response object
   */

const googleLogin = (app) => {
  app.post('/user/google', (req, res) => {
    let token,
      email,
      uid,
      displayName;
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    firebase.auth().signInWithPopup(provider)
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
      });
    res.json({
      message: 'You have successfully signed in with  Google'
    })
      .catch((error) => {
        res.json({
          message: error.message
        });
      });
  });
};

export default googleLogin;
