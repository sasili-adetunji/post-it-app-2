import firebase from 'firebase';
import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';
import Nexmo from 'nexmo';

require('dotenv').config();

const transporter = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  auth: {
    user: process.env.user,
    pass: process.env.pass,
  },
}));

const mailOptions = {
  from: process.env.user,
  subject: 'A new message from PostIt',
};

const nexmo = new Nexmo({
  apiKey: process.env.nexmoApiKey,
  apiSecret: process.env.nexmoApiSecret,
});

/**
 * controls all message routes
 * @class
 */

export default {

    /**
 * @description: This method post message to groups
 * route POST: /message
 * @param {Object} req request object
 * @param {Object} res response object
 * @return {Object} response containing the posted message
 */
  message(req, res) {
    const { message, groupId, priorityLevel, date, author } = req.body;

    // validating  using express-validator

    req.check('message', 'Please enter a valid message').notEmpty();
    const errors = req.validationErrors();
    if (errors) {
      const errorMessage = errors[0].msg;
      res.status(400).json({ errorMessage });
    } else {
      const messages = [];
      const user = firebase.auth().currentUser;
      if (user) {
        const messageKey = firebase.database().ref(`groups/${groupId}/messages`)
        .push({
          message,
          author,
          date,
          priorityLevel,
        }).key;
        firebase.database().ref(`groups/${groupId}/users/`)
        .once('value', (snapshot) => {
          snapshot.forEach((childSnapShot) => {
            firebase.database().ref(`users/${childSnapShot.val().userId}/groups/${groupId}/messages/${messageKey}`)
              .set({
                message,
                author,
                date,
                priorityLevel,
                status: 'Unread',
              });
            if ((priorityLevel === 'Critical') || (priorityLevel === 'Urgent')) {
              firebase.database().ref(`users/${childSnapShot.val().userId}/`)
                .once('value', (snap) => {
                  mailOptions.to = snap.val().email;
                  mailOptions.text = message;
                  transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                      return console.log(error);
                    }
                    console.log('Message %s sent: %s', info.messageId, info.response);
                    return true;
                  });
                });
            }
            if (priorityLevel === 'Critical') {
              firebase.database().ref(`users/${childSnapShot.val().userId}/`)
                .once('value', (msg) => {
                  nexmo.message.sendSms(
                      'PostIt', msg.val().phoneNumber, message,
                      (err, responseData) => {
                        if (err) {
                          console.log(err);
                        } else {
                          console.log(responseData);
                        }
                      });
                });
            }
            const messageDetails = {
              messageId: messageKey,
              messageText: message,
              author,
              priorityLevel,
              date,
              status: 'Unread',
              groupId,
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
          message: 'Please log in to send messages to groups',
        });
      }
    }
  },

    /**
 * @description: THis method retrieves message of a particular group
 * route GET: /group/:groupId/messages
 * @param {Object} req request object
 * @param {Object} res response object
 * @return {Object} response containing all messages in a particular group
 */

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
            status: childSnapShot.val().status,
          };
          messages.push(message);
          firebase.database().ref(`users/${user.uid}/groups/${req.params.groupId}/messages/${childSnapShot.key}/`)
            .update({
              status: 'Read',
            });
          firebase.database().ref(`readUsers/${childSnapShot.key}/${user.uid}`)
            .set({
              userId: user.uid,
              userName: user.displayName,
            });
        });
      })
        .then(() => {
          res.status(200).json({
            messages,
          });
        })
        .catch((error) => {
          res.status(500).json({
            message: `Error occurred ${error.message}`,
          });
        });
    } else {
      res.status(401).json({
        message: 'Please log in to see a list of your messages',
      });
    }
  },

  /**
 * @description: THis method retrieves the users that read a particular message
 * route GET: /group/:messageId/readUsers
 * @param {Object} req request object
 * @param {Object} res response object
 * @return {Object} response containing all users that read a particular message
 */

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
            readUsers,
          });
        })
        .catch((error) => {
          res.status(500).json({
            message: `Error occurred ${error.message}`,
          });
        });
    } else {
      res.status(401).json({
        message: 'Please log in to see a list of users that read messages',
      });
    }
  },
};
