import express from 'express'; 
import firebase from 'firebase';
import db from '../../config/db';
import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';
const app = express();
const fb = firebase.database();

let emails = [];
let userIds = [];
let transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
        user: 'sasil.adetunji@gmail.com',
        pass: 'olanrewaju2012?'
    }
}));

let mailOptions = {
    from: 'sasil.adetunji@gmail.com',
    subject: 'A new message from PostIt',
};
const message = (app, db) => {
  app.post('/message', (req, res) => {
    let message = req.body.message;
    let groupId = req.body.groupId;
    let priorityLevel = req.body.priorityLevel;

firebase.auth().onAuthStateChanged((user) => {
        const groupRef = firebase.database().ref(`groups/${groupId}/messages`)
        .push().set({
          message: message         
        })
        .then(() => {
           const userRef = firebase.database().ref(`groups/${groupId}/users/`);
            userRef.orderByKey().once('value', (snapshot) => {
                    snapshot.forEach((childSnapShot) => {
                    userIds.push(childSnapShot.val().Id);
              })
            userIds.forEach((uid) => {    
              const userRef2 = firebase.database().ref(`users/${uid}/groups/${groupId}/messages`);
                  userRef2.push().set({
                      message: message
                    })  
            if((priorityLevel==="Critical") || (priorityLevel==="Urgent")){
                  const userEmailRef = firebase.database().ref(`users/${uid}/`)
                        .once('value', (snap) => {
                            emails.push(snap.val().email);
                            emails.forEach((email) => {
                  mailOptions.to = email; 
                  mailOptions.text = message                
                  transporter.sendMail(mailOptions, (error, info) => {
                       if (error) {
                          return console.log(error);
                  }
                        console.log('Message %s sent: %s', info.messageId, info.response);
                });    
                          })
                        })
              }
       
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