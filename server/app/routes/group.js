// create group routes

import express from 'express';
import firebase from 'firebase';
import db from '../../config/db';

const app = express();
const fb = firebase.database();

const group = (app, db) => {
  app.post('/group', (req, res) => {
    const groupname = req.body.groupname;
    firebase.auth().onAuthStateChanged((user) => {
      const groupKey = fb.ref('groups/').push({
        groupname,
        groupadmin: user.email,
      }).key;
      const groupRef = fb.ref(`groups/${groupKey}/users/${user.uid}/`)
          .set({
            Id: user.uid,
          });
      const userRef = fb.ref(`users/${user.uid}/groups/${groupKey}/groupInfo`).set({
        groupname
      })
    .catch((error) => {
    });
    });
  });
};

export default group;
