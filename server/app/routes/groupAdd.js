// add to group route

import express from 'express';
import firebase from 'firebase';

const app = express();

const groupAdd = (app) => {
  app.post('/group/:groupId/user', (req, res) => {
    const groupId = req.body.groupId;
    const newUser = req.body.userId;
    firebase.auth().onAuthStateChanged((user) => {
      const groupRef = firebase.database().ref(`groups/${groupId}/users/${newUser}/`).set({
        Id: newUser
      });
      const groupNames = firebase.database().ref(`groups/${groupId}`).orderByKey()
              .once('value', (snap) => {
                const groupname = snap.val().groupname;
                const userRef = firebase.database().ref(`users/${newUser}/groups/${groupId}/groupInfo`).set({
                  groupname
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

