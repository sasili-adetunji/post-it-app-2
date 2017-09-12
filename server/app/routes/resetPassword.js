// resetpassword route

import express from 'express';
import firebase from 'firebase';

const app = express();
/**
   *  reset password route
   * Route: POST: /user/reset
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {Response} response object
   */

const resetPassword = (app) => {
  app.post('/user/reset', (req, res) => {
    const { email } = req.body;
    firebase.auth().sendPasswordResetEmail(email)
  .then(() => {
    res.json({
      message: 'An email has been sent to your email'
    });
  })
  .catch((err) => {
    res.json({
      message: `There appear to be ${err.message}`
    });
  });
  });
};
export default resetPassword;
