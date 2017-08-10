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
            Id: user.uid,
          });
      const userRef = firebase.database().ref(`users/${user.uid}/groups/${groupKey}/groupInfo`).set({
        groupname
      })
    .catch((error) => {
    });
    });
  });
};

export default group;
