import jwt from 'jsonwebtoken';
import dbConfig from '../config/database';

require('dotenv').config();

/**
 * @description: function return server error
 *
 * @param {Object} res response from the server
 * @param {Object} error error from the server
 *
 * @return {Object} response containing the error message
 */

export const serverError = res => res.status(500).send({
  message: 'There is a network error',
});


/**
 * @description: function that create token
 *
 * @param {String} uid request object
 * @param {String} userName request object
 * @param {String} email request object
 *
 * @return {String} the generated token
 */
export const createToken = (uid, userName, email) => jwt.sign({
  data: {
    uid,
    userName,
    email,
  }
}, process.env.TOKEN_SECRET, { expiresIn: '12h' });


/**
 * @description: function that return authentication errors
 *
 * @param {String} errorCode the error message from firebase
 * @param {Object} res request object
 *
 * @return {Object} returns custom error message
 */
export const serverAuthError = (errorCode, res) => {
  switch (errorCode) {
    case 'auth/email-already-in-use':
      return res.status(409).json({ message: 'email already in use' });
    case 'auth/invalid-email':
      return res.status(400).json({ message: 'invalid email' });
    case 'auth/weak-password':
      return res.status(400).json({
        message: 'password strength is too weak' });
    case 'auth/user-not-found':
      return res.status(404).json({ message: 'The user does not exist.' });
    case 'auth/wrong-password':
      return res.status(401).json({ message: 'wrong password' });
    default:
      return res.status(500).json({ message: 'There is a network error' });
  }
};

/**
 * @description: function that return check for existing username
 *
 * @param {String} userName the userName to check
 *
 * @return {Promise} return a promise
 */
export const checkUser = userName => new Promise((resolve) => {
  dbConfig.database().ref('users/').orderByChild('userName/')
      .startAt(userName)
      .endAt(`${userName}\uf8ff`)
      .once('value', (snapshot) => {
        let response;
        if (snapshot.val()) {
          response = true;
        } else {
          response = false;
        }
        resolve(response);
      });
});
