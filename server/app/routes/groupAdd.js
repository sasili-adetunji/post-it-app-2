// add to group route

import express from 'express';
import firebase from 'firebase';
import db from '../../config/db';
const app = express();
const fb = firebase.database();

const groupAdd = (app, db) => {
   app.post('/group/:groupId/user', (req, res) => {
    
    const groupId = req.params.groupId;

    const newUserId = req.body.userId;

    // check if this is a signed in user
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // get a reference to the groups users
        const groupRef = db.ref(`/groups/${groupId}/users`);

        // add new user to the group
        groupRef.child(newUserId).set({
          Id: newUserId,
        });

        // add group to user's list of groups
        db.ref(`/users/${newUserId}/groups`).child(groupId).set({
          id: groupId,
        });

        res.send({
          message: 'User added to group',
        });
      } else {
        res.send({
          message: 'You are not signed in right now!'
        });
      }
    });
  });
};
export default groupAdd;