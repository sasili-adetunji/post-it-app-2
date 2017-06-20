// login route
//using firebase authentication method

import express from 'express'; 
import firebase from 'firebase';
import db from '../../config/db';

const app = express();
const signin = (app, db) => {
  app.post('/user/signin', (req, res) => {
    const email = req.body.email,
      password = req.body.password;
 const promise =   firebase.auth().signInWithEmailAndPassword(email, password)
        res.json({ message: 'Success: you have successfuly signed in.' })
  promise.catch((err) => {
    res.send({ message: 'Error: The email or password of the user is invalid' } );
    });
  });  
};

export default signin;