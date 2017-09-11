// signout route

import express from 'express';
import firebase from 'firebase';

const app = express();

 /**
   *  signout route
   * Route: POST: /user/signout
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {Response} response object
   */
const signout = (app) => {
  app.get('/user/signout', (req, res) => {
    firebase.auth().signOut()
  .then(() => {
    res.json({
      message: 'You have signed out of the Appliction'
    });
  })
  .catch((err) => {
    res.json({
      message: `There appear to be ${err.message} with signing out`
    });
  });
  });
};
export default signout;
