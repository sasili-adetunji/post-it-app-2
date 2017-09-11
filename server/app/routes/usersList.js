import express from 'express';
import firebase from 'firebase';

const app = express();


  /**
   * Get users in the app
   * Route: GET: /users/users/
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {Response} response object
   */

const usersList = (app) => {
  app.get('/user/users', (req, res) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // create an empty array to hold the users
        const users = [];
        const userRef = firebase.database().ref('users/').once('value', (msg) => {
          msg.forEach((snapshot) => {
            const userDetails = {
              userId: snapshot.key,
              userName: snapshot.val().username
            };
            users.push(userDetails);
          });
        })
        .then(() => {
          res.send({
            users
          });
        })
    .catch((error) => {
      res.status(500).json({
        message: `Error occurred ${error.message}`,
      });
    });
      } else {
        res.status(403).json({
          message: 'You are not signed in right now! '
        });
      }
    });
  });
};


export default usersList;

