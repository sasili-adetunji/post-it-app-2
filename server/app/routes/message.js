import express from 'express'; 
import firebase from 'firebase';
import db from '../../config/db';
const app = express();
const fb = firebase.database();


const message = (app, db) => {
  app.post('/message', (req, res) => {
    const message = req.body.message;
    const groupId = req.body.groupId;
firebase.auth().onAuthStateChanged((user) => {
        const groupRef = firebase.database().ref(`groups/${groupId}/messages`)
        .push().set({
          message: message
        })
        .then(() => {
            const userRef = firebase.database().ref(`groups/${groupId}/users/`);
            userRef.orderByKey().once('value', (snapshot) => {
                snapshot.forEach((childSnapShot) => {
            const userRef2 = firebase.database().ref(`users/${childSnapShot.val()}/groups/${groupId}/messages`);
                  userRef2.push().set({
                      message: message
                     })
                  })
                })

             res.send({ message: 'Message Sent successfully to Group'})
           })
            .catch((error) => {
              result.status(500).send({
              message: `Error occurred ${error.message}`,
            });
          })
        })
      })
      
  }

export default message;