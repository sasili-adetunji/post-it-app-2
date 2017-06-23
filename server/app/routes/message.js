import express from 'express'; 
import firebase from 'firebase';
import db from '../../config/db';
const app = express();
const fb = firebase.database();


const message = (app, db) => {
  app.post('/message', (req, res) => {
    const messageBody = req.body.messageBody;
     const groupId = req.body.groupId;
firebaseAuth().onAuthStateChanged((user) => {
        const groupRef = fb.ref(`groups/${groupId}`).child('messages')
        .push({
          message: messageBody,
          postedby: user.email
        })
        fb.ref(`users/${user.uid}/groups/${groupId}`).set(
          { messages: messageBody }
          )
         res.send({ message: 'Message Sent successfully to Group'})

        .then(() => {
			    })
    .catch((error) => {
    })
  })
 })
}
export default message;