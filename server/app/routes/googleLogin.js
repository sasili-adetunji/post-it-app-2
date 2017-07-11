// google route
//using firebase authentication method

import express from 'express'; 
import firebase from 'firebase';
import db from '../../config/db';
import { firebaseAuth, ref } from '../../config/db'


const app = express();
const googleLogin = (app, db) => {
  app.post('/user/google', (req, res) => {
const provider = new firebaseAuth().GoogleAuthProvider()
return firebase.auth().signInWithPopup(provider);
    res.send({ 
      message: 'Success: you have successfuly signed in with google.' 
    })
    .catch((err) => {
        const errorMessage = error.message;
         res.status(400).send({ 
          message: 'Error signing up with Google: ', errorMessage 
          });
    });
    
  })
}

export default googleLogin;