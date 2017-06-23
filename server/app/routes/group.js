// create group routes

import express from 'express';
import firebase from 'firebase';
import db from '../../config/db';
const app = express();
const fb = firebase.database();

const group = (app, db) => {
  app.post('/group', (req, res) => {
    const groupname = req.body.groupname;
    firebaseAuth().onAuthStateChanged((user) => {
        const groupKey = fb.ref('groups/').push({
          groupName: groupName,
          groupadmin: user.email,
        }).key;
        const groupRef = fb.ref(`groups/${groupKey}/users/`)
          .set({
          Id: user.uid,
      })
        const userRef = fb.ref(`users/${user.uid}/groups/groupInfo`).set(
          { groupid: groupKey,
            groupname: groupName
        })
        .then(() => {
      alert("Group Successfully created")
    })
    .catch((error) => {
    });
  
});
  })
}

 export default group;