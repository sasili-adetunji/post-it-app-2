import express from 'express';
import firebase from 'firebase';
import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';
import Nexmo from 'nexmo';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const fb = firebase.database();
const emails = [];
const userIds = [];
const numbers = [];

const transporter = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  auth: {
    user: process.env.user,
    pass: process.env.pass
  }
}));

const mailOptions = {
  from: process.env.user,
  subject: 'A new message from PostIt',
};

const nexmo = new Nexmo({
  apiKey: process.env.nexmoApiKey,
  apiSecret: process.env.nexmoApiSecret
});

/**
   * post messages to particular group
   * Route: POST: '/message'
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {Response} response object
   */

const message = (app) => {
  app.post('/message', (req, res) => {
    const { message, groupId, priorityLevel, date, author } = req.body;
    const user = firebase.auth().currentUser;
    if (user) {
      const messageKey = firebase.database().ref(`groups/${groupId}/messages`)
        .push({
          message,
          author,
          date,
          priorityLevel
        }).key;
      const userRef = firebase.database().ref(`groups/${groupId}/users/`)
        .once('value', (snapshot) => {
          snapshot.forEach((childSnapShot) => {
            firebase.database().ref(`users/${childSnapShot.val().userId}/groups/${groupId}/messages/${messageKey}`)
              .set({
                message,
                author,
                date,
                priorityLevel,
                status: 'Unread'
              });
            if ((priorityLevel === 'Critical') || (priorityLevel === 'Urgent')) {
              firebase.database().ref(`users/${childSnapShot.val().userId}/`)
                .once('value', (snap) => {
                  emails.push(snap.val().email);
                  emails.forEach((email) => {
                    mailOptions.to = email;
                    mailOptions.text = message;
                    transporter.sendMail(mailOptions, (error, info) => {
                      if (error) {
                        return console.log(error);
                      }
                      console.log('Message %s sent: %s', info.messageId, info.response);
                    });
                  });
                });
            }
            if (priorityLevel === 'Critical') {
              firebase.database().ref(`users/${childSnapShot.val().userId}/`)
                .once('value', (msg) => {
                  numbers.push(msg.val().phoneNumber);
                  numbers.forEach((number) => {
                    nexmo.message.sendSms(
                      'PostIt', number, message,
                      (err, responseData) => {
                        if (err) {
                          console.log(err);
                        } else {
                          console.log(responseData);
                        }
                      });
                  });
                });
            }
          });
          res.status(200).json({ message: 'Message Sent successfully to Group' });
        })
        .catch((error) => {
          res.status(500).json({
            message: `Error occurred ${error.message}`,
          });
        });
    } else {
      res.status(403).json({
        message: 'Please log in to see a list of your groups'
      });
    }
  });
};

export default message;
