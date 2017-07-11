// add to group route

import express from 'express';
import firebase from 'firebase';
import db from '../../config/db';
const app = express();
const fb = firebase.database();

const groupAdd = (app, db) => {
   app.post('/group/:groupId/user', (req, res) => {

    const groupId = req.params.groupId;
     const newUser = req.body.userId;
    firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const groupRef = fb.ref(`groups/${groupId}/users/`);
      groupRef.child(newUser).set({
        userId: userId,
      })
     .then(() => {
       const userRef = fb.ref(`users/${userId}/groups/`);
       userRef.child(groupId).set({
         groupId: groupId,
       });
       res.send({
         message: 'User successfully added',
       });
     })
     .catch((error) => {
       res.status(500).send({
         message: `Error occurred ${error.message}`,
       });
     });
    } 
    else {
      res.status(403).send({
        message: 'Only logged users can add users to groups'
        });
      }
    })
  })
};

export default groupAdd;

