import firebase from 'firebase';
import { sendEmail, sendSMS } from '../helpers/messageHelper';
import { serverError } from '../helpers/serverHelper';


export default {
  /**
   * @description: Send mesage to a particular group
   * Route: POST: /message
   *
   * @param {any} req incoming request from the client
   * @param {any} res response sent back to client
   *
   * @returns {response} response object
   */
  postMessage(req, res) {
    const { message, groupId, priorityLevel, date } = req.body;
    const messages = [];
    const userData = req.decoded.data;
    const messageKey = firebase.database().ref(`groups/${groupId}/messages`)
      .push({
        message,
        author: userData.userName,
        date,
        priorityLevel,
      }).key;
    firebase.database().ref(`groups/${groupId}/users/`)
      .once('value', (snapshot) => {
        snapshot.forEach((childSnapShot) => {
          firebase.database()
          .ref(`users/${childSnapShot.val().userId}/groups/${groupId}/`)
          .child(`messages/${messageKey}`)
            .set({
              message,
              author: userData.userName,
              date,
              priorityLevel,
              status: 'Unread',
            });
          if ((priorityLevel === 'critical') ||
              (priorityLevel === 'urgent')) {
            firebase.database().ref(`users/${childSnapShot.val().userId}/`)
              .once('value', (snap) => {
                const emailObject = {
                  To: snap.val().email,
                  text: message
                };
                sendEmail(emailObject);
              });
          }
          if (priorityLevel === 'critical') {
            firebase.database().ref(`users/${childSnapShot.val().userId}/`)
              .once('value', (msg) => {
                const smsObject = {
                  phoneNumber: msg.val().phoneNumber,
                  message
                };
                sendSMS(smsObject);
              });
          }
          const messageDetails = {
            messageId: messageKey,
            messageText: message,
            author: userData.userName,
            priorityLevel,
            date,
            status: 'Unread',
            groupId,
          };
          messages.push(messageDetails);
        });
        res.status(201).json({ message: 'Message Sent successfully to Group',
          messages });
      })
      .catch((error) => {
        serverError(res, error);
      });
  },
  /**
   * @description: fetches messages of a particular group
   * Route: GET: /group/:groupId/messages
   *
   * @param {any} req incoming request from the client
   * @param {any} res response sent back to client
   *
   * @returns {response} rresponse containing all messages in a particular group
   */
  getUserMessages(req, res) {
    const userData = req.decoded.data;
    const messages = [];
    const messageRef = firebase.database()
    .ref(`users/${userData.uid}/groups/${req.params.groupId}/messages/`);
    messageRef.once('value', (snapshot) => {
      snapshot.forEach((childSnapShot) => {
        const message = {
          messageText: childSnapShot.val().message,
          author: childSnapShot.val().author,
          priorityLevel: childSnapShot.val().priorityLevel,
          date: childSnapShot.val().date,
          status: childSnapShot.val().status,
        };
        messages.push(message);
        firebase.database()
        .ref(`users/${userData.uid}/groups/${req.params.groupId}/`)
        .child(`messages/${childSnapShot.key}/`)
          .update({
            status: 'Read',
          });
        firebase.database()
        .ref(`readUsers/${childSnapShot.key}/${userData.uid}`)
          .set({
            userId: userData.uid,
            userName: userData.userName,
          });
      });
    })
      .then(() => {
        res.status(200).json({
          messages,
        });
      })
      .catch((error) => {
        serverError(res, error);
      });
  },
   /**
   * @description: fetches mthe users that read a particular message
   * Route: GET: /group/:messageId/readUsers
   *
   * @param {any} req incoming request from the client
   * @param {any} res response sent back to client
   *
   * @returns {response} rresponse containing all messages in a particular group
   */
  getReadusers(req, res) {
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
          res.status(200).json({
            readUsers,
          });
        })
        .catch((error) => {
          serverError(res, error);
        });
  },
};
