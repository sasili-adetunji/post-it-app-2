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
        username = req.body.username;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(saveUser)
    .then(() => {
          res.send({ message: 'Registration successful. You have successfully been registered'});
      })
      .catch((error) => {
         const errorMessage = error.message;
         res.status(400).send({ message: 'Error signing up: ', errorMessage });
       });
})

  }

  export function saveUser (user) {
  return fb.child(`users/${user.uid}/info`)
    .set({
      email: user.email
    })
    .then(() => user)
}

export default signup;