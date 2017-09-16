import express from 'express';
import firebase from 'firebase';

const app = express();
const fb = firebase.database();

/**
   * Get messages of a particular user
   * Route: GET: group/:groupId/messages'
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {Response} response object
   */

const userMessage = (app) => {
  app.get('/group/:groupId/messages', (req, res) => {
    const user = firebase.auth().currentUser;
    if (user) {
      const messages = [];
      firebase.database().ref(`users/${user.uid}/groups/${req.params.groupId}/messages/`)
        .orderByKey().once('value', (snapshot) => {
          snapshot.forEach((childSnapShot) => {
            const message = {
              messageId: childSnapShot.key,
              messageText: childSnapShot.val().message,
              author: childSnapShot.val().author,
              priorityLevel: childSnapShot.val().priorityLevel,
              date: childSnapShot.val().date,
              status: childSnapShot.val().status
            };
            messages.push(message);
            firebase.database().ref(`users/${user.uid}/groups/${req.params.groupId}/messages/${childSnapShot.key}/`)
              .update({
                status: 'Read'
              });
            firebase.database().ref(`readUsers/${childSnapShot.key}/${user.uid}`)
              .set({
                userId: user.uid,
                userName: user.displayName
              });
          });
        })
        .then(() => {
          res.json({
            messages
          });
        })
        .catch((error) => {
          res.status(500).json({
            message: `Error occurred ${error.message}`,
          });
        });
    } else {
      res.status(403).json({
        message: 'Please log in to see a list of your messages'
      });
    }
  });
};

export default userMessage;

