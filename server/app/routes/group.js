// create group routes

import express from 'express';
import firebase from 'firebase';
import db from '../../config/db';
const app = express();
const fb = firebase.database();

const group = (app, db) => {
  app.post('/group', (req, res) => {
    const groupName = req.body.groupName;

    // check that a user is signed in before you try to add group
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // This means a user is signed in
        const userId = user.uid;

        // create a new group and return the unique key
        const newGroupKey = fb.ref().child('groups').push({
          groupName: groupName,
          groupadmin: userId,
        }).key;

        // add user id to list of group members. An admin of a group is an automatic member of the group
        fb.ref().child(`groups/${newGroupKey}/users/${userId}`).set({
          Id: userId,
        });

        // add group key to list of a user's/admin group
        fb.ref(`/users/${userId}/groups/`).child(newGroupKey).set(
          { id: newGroupKey }
          );

        res.send({
          message: 'Group ' + groupName + ' was successfully created ',
        });
      } else {
        res.status(403).send({
          // user is not signed in
          message: 'You are not signed in right now!'
        });
      }
    });
  });
};
<<<<<<< HEAD
<<<<<<< HEAD
 export default group;
=======
 export default group;
>>>>>>> fb950ca865531320c85b57abb71633b9d726a2e4
=======

 export default group;

>>>>>>> 5a5222c40ad3aa257050eefb27abcf15c6be3595
