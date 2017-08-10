import express from 'express';
import firebase from 'firebase';

const app = express();
const fb = firebase.database();


const userMessage = (app) => {
  app.get('/group/:groupId/messages', (req, res) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const messages = [];
        firebase.database().ref(`users/${user.uid}/groups/${req.params.groupId}
        /messages/`)
        .orderByKey().once('value', (snapshot) => {
          snapshot.forEach((childSnapShot) => {
            const message = {
              messageId: childSnapShot.key,
              messageText: childSnapShot.val().message,
              isRead: childSnapShot.val().isRead
            };
            messages.push(message);
// firebase.database().ref(`users/${user.uid}/groups/${req.params.groupId}/messages/${childSnapShot.key}`);
      //   .update({
      //                 isRead: true
      //               })
          });
        })
        .then(() => {
          res.send({
            messages
          });
        })
.catch((error) => {
  res.status(500).send({
    message: `Error occurred ${error.message}`,
  });
});
      } else {
        res.status(403).send({
          message: 'Please log in to see a list of your groups'
        });
      }
    });
  });
};

export default userMessage;

