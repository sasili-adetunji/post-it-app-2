import express from 'express';
import firebase from 'firebase';

const app = express();

/**
   * Get users in the a particular group
   * Route: GET: /group/:groupId/users
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {Response} response object
   */
const usersInGroup = (app) => {
  app.get('/group/:groupId/users', (req, res) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
                // create an empty array to hold the users

        const users = [];
        const userRef = firebase.database().ref(`/groups/${req.params.groupId}/users`)
        .once('value', (msg) => {
          msg.forEach((snapshot) => {
            const userDetails = {
              userId: snapshot.val().userId,
              userName: snapshot.val().userName,
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


export default usersInGroup;

