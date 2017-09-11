// signin route
// using firebase authentication method

import express from 'express';
import firebase from 'firebase';

const app = express();

const signup = (app) => {
  app.post('/user/signup', (req, res) => {
    const { email, password, userName, phoneNumber } = req.body;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
      user.updateProfile({
        displayName: userName
      });
      firebase.database().ref('users/')
      .child(user.uid).set({
        userName,
        email,
        phoneNumber
      });
      res.json({ message: `Welcome ${user.email}. You have successfully registered`,
        user });
    })
    .catch((err) => {
      const errorMessage = err.message;
      res.json({ message: errorMessage });
    });
  });
};


export default signup;
