// signin route
// using firebase authentication method

import express from 'express'; 
import firebase from 'firebase';
import db from '../../config/db';
const app = express();
const fb = firebase.database();


const signup = (app, db) => {
    app.post('/user/signup', (req, res) => {
    const email =     req.body.email,
        password = req.body.password,
        username = req.body.username,
        phoneNumber = req.body.phoneNumber;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
    user.updateProfile({
      displayName: username,
    })
    .then(() => {
      const userRef = firebase.database().ref(`users/`);
      userRef.child(user.uid).set({
        username: username,
        email: email,
        phoneNumber: phoneNumber
      })
      res.send({ message: `Welcome ${user.email}. You have successfully registered`});
      })
  })
    .catch((error) => {
         const errorMessage = error.message;
         res.status(400).send({ message: 'Error signing up: ', errorMessage });
      });
  })
}


export default signup;