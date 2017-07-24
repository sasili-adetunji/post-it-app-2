// add to group route

import express from 'express';
import firebase from 'firebase';
import db from '../../config/db';
const app = express();
const fb = firebase.database();

const groupAdd = (app, db) => {
   app.post('/group/:groupId/user', (req, res) => {

    let groupId = req.params.groupId;
     let newUser = req.body.userId;
    firebase.auth().onAuthStateChanged((user) => {
      const groupRef = fb.ref(`groups/${groupId}/users/${newUser}/`).set({
               Id: newUser
             })
      
        const groupNames = fb.ref(`groups/${groupId}`).orderByKey()
              .once('value', (snap) => {
                  let groupname = snap.val().groupname
    
       const userRef = fb.ref(`users/${newUser}/groups/${groupId}/groupInfo`).set({
          groupname: groupname
       });
     })
  
       res.send({
         message: 'User successfully added',
       })
    
     .catch((error) => {
       res.status(500).send({
         message: `Error occurred ${error.message}`,
       });
     });
    })
  })
};

export default groupAdd;

