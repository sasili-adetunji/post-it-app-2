// add to group route

import express from 'express';
import firebase from 'firebase';

const app = express();

const groupAdd = (app) => {
  app.post('/group/:groupId/user', (req, res) => {
    const { groupId, userId, userName } = req.body;
    firebase.auth().onAuthStateChanged((user) => {
      const groupRef = firebase.database().ref(`groups/${groupId}/users/${userId}/`).set({
        userId,
        userName
      });
      const groupNames = firebase.database().ref(`groups/${groupId}`).orderByKey()
              .once('value', (snap) => {
                const groupName = snap.val().groupName;
                const userRef = firebase.database().ref(`users/${userId}/groups/${groupId}/groupInfo`).set({
                  groupId,
                  groupName
                });
              });
      res.send({
        message: 'User successfully added',
      })
     .catch((error) => {
       res.status(500).send({
         message: `Error occurred ${error.message}`,
       });
     });
    });
  });
};

export default groupAdd;

