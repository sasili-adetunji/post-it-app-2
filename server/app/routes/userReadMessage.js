import express from 'express';
import firebase from 'firebase';

const app = express();
const fb = firebase.database();

const userReadMessage = (app) => {
  app.get('/group/:messageId/readUsers', (req, res) => {
    // const messageId = req.body.messageId;
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const readUsers = [];
        firebase.database().ref(`readUsers/${req.params.messageId}`)
        .orderByKey().once('value', (snapshot) => {
          snapshot.forEach((childSnapShot) => {
            const userDetails = {
              userName: childSnapShot.val().userName,
            };
            readUsers.push(userDetails);
          });
        })
        .then(() => {
          res.json({
            readUsers
          });
        })
.catch((error) => {
  res.status(500).json({
    message: `Error occurred ${error.message}`,
  });
});
      } else {
        res.status(403).json({
          message: 'Please log in to see a list of users that read messages'
        });
      }
    });
  });
};

export default userReadMessage;

