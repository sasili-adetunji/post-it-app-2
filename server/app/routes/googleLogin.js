// google route
//using firebase authentication method

import express from 'express'; 
import firebase from 'firebase';
import db from '../../config/db';
import { firebaseAuth } from '../../config/db'


const app = express();
const googleLogin = (app, db) => {
  app.post('/user/google', (req, res) => {

  	let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    return firebaseAuth().signInWithPopup(provider)
        res.json({ message: 'Success: you have successfuly signed in with google.' })
		res.redirect('/dashboard')
.catch((err) => {
    res.send({ message: 'Error: Can not login using Google' } );
    });
  });  
};

export default googleLogin;