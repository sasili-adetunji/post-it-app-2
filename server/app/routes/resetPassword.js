// resetpassword route

import express from 'express';
import firebase from 'firebase';

const app = express();

const resetPassword = (app) => {
  app.post('/user/reset', (req, res) => {
    const { email } = req.body;
    firebase.auth().sendPasswordResetEmail(email)
  .then(() => {
    res.send({
      message: 'An email has been sent to your email'
    });
  })
  .catch((err) => {
    res.send({
      message: `There appear to be ${err.message}`
    });
  });
  });
};
export default resetPassword;
