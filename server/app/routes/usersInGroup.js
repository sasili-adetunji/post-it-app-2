import express from 'express';
import firebase from 'firebase';

const app = express();

const usersInGroup = (app) => {
  app.get('/group/:groupId/users', (req, res) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const users = [];
        const userRef = firebase.database().ref(`/groups/${req.params.groupId}/users`).once('value', (msg) => {
          msg.forEach((snapshot) => {
            const user = {
              userId: snapshot.key,
            };
            users.push(user);
          });
        })
        .then(() => {
          res.send({
            users
          });
        })
    .catch((error) => {
      res.status(500).send({
        message: `Error occurred ${error.message}`,
      });
    });
      } else {
        res.status(403).send({
          message: 'You are not signed in right now! '
        });
      }
    });
  });
};


export default usersInGroup;

