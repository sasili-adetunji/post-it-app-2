// create group routes

import express from 'express';
import firebase from 'firebase';

const app = express();

const group = (app) => {
  app.post('/group', (req, res) => {
    const groupname = req.body.groupname;
    firebase.auth().onAuthStateChanged((user) => {
      const groupKey = firebase.database().ref('groups/').push({
        groupname,
        groupadmin: user.email,
      }).key;
      const groupRef = firebase.database().ref(`groups/${groupKey}/users/${user.uid}/`)
          .set({
            groupId: groupKey,
            groupName: req.body.groupname
          });
      const userRef = firebase.database().ref(`users/${user.uid}/groups/${groupKey}/groupInfo`)
      .set({
        userId: user.uid,
        groupName: req.body.groupname
      })
    .catch((error) => {
    });
    });
  });
};

export default group;
