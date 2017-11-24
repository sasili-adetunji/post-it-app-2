import firebase from 'firebase';
import 'babel-polyfill';
import {
  serverError,
  createToken,
  serverAuthError, checkUser
} from '../helpers/serverHelper';


export default {
/**
 * @description: Creates a user account
 * Route: POST: /user/signup
 *
 * @param {Object} req requset from the client
 * @param {Object} res response send back to the client
 *
 * @returns {Object} response containing authentication token
 */
  signup(req, res) {
    const { email, password, userName, phoneNumber } = req.body;
    checkUser(userName)
      .then((response) => {
        if (response === true) {
          return res.status(409).json({
            message: 'Username already exist'
          });
        }
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((user) => {
            user.updateProfile({
              displayName: userName,
            });
            firebase.database().ref(`users/${user.uid}`)
              .set({
                userName,
                email,
                phoneNumber,
              });
            const token = createToken(user.uid, userName, email);
            res.status(201).json({
              message: 'Signup was successful', token
            });
          })
          .catch((error) => {
            const errorCode = error.code;
            serverAuthError(errorCode, res);
          });
      });
  },


/**
* @description:  singns in a user
* Route: POST: /user/signin
*
* @param {Object} req request from the client
* @param {Object} res response back to the client
*
* @returns {Object} response containing authentication token
*/
  signin(req, res) {
    const { email, password } = req.body;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        const uid = user.uid;
        const userName = user.displayName;
        const token = createToken(uid, userName, email);
        res.status(200).json({
          message: 'Success: you have successfuly signed in.', token
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        serverAuthError(errorCode, res);
      });
  },


/**
* @description: sign out a user
* Route: POST: /user/signout
*
* @param {Object} req incoming request from the client
* @param {Object} res response sent back to client
*
* @returns {Object} response  that you have been signed out
*/
  signout(req, res) {
    firebase.auth().signOut()
      .then(() => {
        res.status(200).json({
          message: 'You have signed out of the Application',
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        serverAuthError(errorCode, res);
      });
  },


/**
* @description: reset a user password
* Route: POST: /user/reset
*
* @param {Object} req incoming request from the client
* @param {Object} res response sent back to client
*
* @returns {Object} response  that a password have been reset
*/
  resetPassword(req, res) {
    const { email } = req.body;
    firebase.auth().sendPasswordResetEmail(email)
      .then(() => {
        res.status(200).json({
          message: 'An email has been sent to your email',
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        serverAuthError(errorCode, res);
      });
  },


  /**
   * @description: fetches all the users in the app
   * Route: GET: /user/users
   *
   * @param {Object} req incoming request from the client
   * @param {Object} res response sent back to client
   *
   * @returns {Object} response containing all users in the app
   */
  getUsersList(req, res) {
    // create an empty array to hold the users
    const users = [];
    firebase.database().ref('users/').once('value', (msg) => {
      msg.forEach((snapshot) => {
        const userDetails = {
          userId: snapshot.key,
          userName: snapshot.val().userName,
        };
        users.push(userDetails);
      });
    })
      .then(() => {
        res.status(200).json({
          users,
        });
      })
      .catch(() => {
        serverError(res);
      });
  },


/**
 * @description: reates a user account with google
 * Route: POST: /user/google
 *
 * @param {Object} req incoming request from the client
 * @param {Object} res response sent back to client
 *
 * @returns {Object} response containing authentication token
 */
  googleLogin(req, res) {
    const { result } = req.body;
    const credential = firebase.auth.GoogleAuthProvider
      .credential(result);
    firebase.auth().signInWithCredential(credential)
      .then((user) => {
        const uid = user.uid;
        const userName = user.displayName;
        const email = user.email;
        const token = createToken(uid, userName, email);
        firebase.database()
          .ref('users').child(user.uid).once('value', (snapshot) => {
            if (!snapshot.exists()) {
              firebase.database().ref(`users/${user.uid}`)
                .set({
                  userName: user.displayName,
                  email: user.email,
                  phoneNumber: user.phoneNumber,
                });
              return res.status(201).send({
                message: 'You have successfully signed', token
              });
            }
            return res.status(200).send({
              message: 'You have successfully signed', token
            });
          });
      });
  },
};
