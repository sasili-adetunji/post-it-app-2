import firebase from 'firebase';
import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';
import Nexmo from 'nexmo';
import dotenv from 'dotenv';

dotenv.config();

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


export default {
  message(req, res) {
    const { message, groupId, priorityLevel, date, author } = req.body;
    const messages = [];
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
            const messageDetails = {
              messageId: messageKey,
              messageText: message,
              author,
              priorityLevel,
              date,
              status: 'Unread'
            };
            messages.push(messageDetails);
          });
          res.status(200).json({ message: 'Message Sent successfully to Group',
            messages });
        })
        .catch((error) => {
          res.status(500).json({
            message: `Error occurred ${error.message}`,
          });
        });
    } else {
      res.status(401).json({
        message: 'Please log in to see a list of your groups'
      });
    }
  },
  userMessage(req, res) {
    const user = firebase.auth().currentUser;
    if (user) {
      const messages = [];
      const messageRef = firebase.database().ref(`users/${user.uid}/groups/${req.params.groupId}/messages/`);
      messageRef.once('value', (snapshot) => {
        snapshot.forEach((childSnapShot) => {
          const message = {
            messageId: childSnapShot.key,
            messageText: childSnapShot.val().message,
            author: childSnapShot.val().author,
            priorityLevel: childSnapShot.val().priorityLevel,
            date: childSnapShot.val().date,
            status: childSnapShot.val().status
          };
          messages.push(message);
          firebase.database().ref(`users/${user.uid}/groups/${req.params.groupId}/messages/${childSnapShot.key}/`)
            .update({
              status: 'Read'
            });
          firebase.database().ref(`readUsers/${childSnapShot.key}/${user.uid}`)
            .set({
              userId: user.uid,
              userName: user.displayName
            });
        });
      })
        .then(() => {
          res.status(200).json({
            messages
          });
        })
        .catch((error) => {
          res.status(500).json({
            message: `Error occurred ${error.message}`,
          });
        });
    } else {
      res.status(401).json({
        message: 'Please log in to see a list of your messages'
      });
    }
  },
  userReadMessage(req, res) {
    const user = firebase.auth().currentUser;
    if (user) {
      const readUsers = [];
      firebase.database().ref(`readUsers/${req.params.messageId}`)
      .orderByChild('userName').once('value', (snapshot) => {
        snapshot.forEach((childSnapShot) => {
          const userDetails = {
            userName: childSnapShot.val().userName,
          };
          readUsers.push(userDetails);
        });
      })
        .then(() => {
          res.json({
            readUsers
          });
        })
        .catch((error) => {
          res.status(500).json({
            message: 'Error occurred',
          });
        });
    } else {
      res.status(401).json({
        message: 'Please log in to see a list of users that read messages'
      });
    }
  }
};
