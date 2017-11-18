import jwt from 'jsonwebtoken';
require('dotenv').config();

/**
 * @description: function return server error
 *
 * @param {Object} res response from the server
 * @param {Object} error error from the server
 *
 * @return {Object} response containing the error message
 */

export const serverError = (res, error) => res.status(500).send({
  message: `Error occurred ${error.message}`,
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
