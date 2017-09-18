// login route
// using firebase authentication method

import express from 'express';
import firebase from 'firebase';


  /**
   *  signin route
   * Route: POST: /users/signin
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {Response} response object
   */

const app = express();
const signin = (app) => {
  app.post('/user/signin', (req, res) => {
    const { email, password } = req.body;
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((user) => {
    res.status(200).json({
      message: 'Success: you have successfuly signed in.',
      user
    });
  })
.catch((err) => {
  res.send({ message: 'Error: The email or password of the user is invalid' });
});
  });
};

export default signin;
