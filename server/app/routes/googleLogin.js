// google route
//using firebase authentication method

import express from 'express'; 
import firebase from 'firebase';
import db from '../../config/db';
import { firebaseAuth, ref } from '../../config/db'


const app = express();
const googleLogin = (app, db) => {
  app.post('/user/google', (req, res) => {
const provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider)
.then((result) => {
  var token = result.credential.accessToken;
  var user = result.user;
  console.log('googleuser info', user)
  res.send({ 
    token: token,
    user: user
    })
})
.catch((err) => {
     const errorMessage = err.message;
       res.status(400).send({ 
        message: 'Error signing up with Google: ', errorMessage 
          });
    });
    
  })
}

export default googleLogin;