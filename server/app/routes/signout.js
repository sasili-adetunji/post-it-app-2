// signout route

import express from 'express';
import firebase from 'firebase';

const app = express();

const signout = (app) => {
  app.post('/user/signout', (req, res) => {
    firebase.auth().signOut()
  .then(() => {
    res.send({
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
