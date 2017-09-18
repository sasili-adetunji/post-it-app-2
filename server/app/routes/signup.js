// signin route
// using firebase authentication method

import express from 'express';
import firebase from 'firebase';

const app = express();

 /**
   *  signup route
   * Route: POST: /user/signup
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {Response} response object
   */

const signup = (app) => {
  app.post('/user/signup', (req, res) => {
    const { email, password, userName, phoneNumber } = req.body;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
      user.updateProfile({
        displayName: userName
      });
      firebase.database().ref(`users/${user.uid}`)
      .set({
        userName,
        email,
        phoneNumber
      });
      res.status(200).json({ message: `Welcome ${user.email}. You have successfully registered. You can proceed to login now`,
        user });
    })
    .catch((err) => {
      const errorMessage = err.message;
      res.json({ message: errorMessage });
    });
  });
};


export default signup;
