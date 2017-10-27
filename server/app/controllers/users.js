import firebase from 'firebase';


/**
 * controls all user routes
 * @class
 */

export default {
  /**
 * @description: THis method creates a user account
 * route POST: user/signup
 * @param {Object} req request object
 * @param {Object} res response object
 * @return {Object} response containing the registered user
 */

  signup(req, res) {
    const { email, password, userName, phoneNumber } = req.body;

// validating email, password, phonenumber and username using express-validator

    req.check('phoneNumber', 'phone number is required').notEmpty();
    req.check('password', 'Password is required').notEmpty();
    req.check('userName', 'Username is required').notEmpty();
    req.check('password', 'Password must be a mininum of 6 character')
    .isLength(6, 50);
    req.check('email', 'Email Address is Required').notEmpty();
    req.check('email', 'Please put a valid email').isEmail();
    req.check('phoneNumber', 'Enter a valid phone Number')
    .isMobilePhone('en-NG');

    const errors = req.validationErrors();
    if (errors) {
      const message = errors[0].msg;
      res.status(400).json({ message });
    } else {
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
        res.status(200).json({
          message: `Welcome ${user.email}. 
          You have successfully registered. You can proceed to login now`,
          user,
        });
      })
      .catch((error) => {
        res.status(403).json({
          message: error.message,
        });
      });
    }
  },

   /**
 * @description: This method controls a user's login
 * route POST: user/signin
 * @param {Object} req request object
 * @param {Object} res response object
 * @return {Object} response containing the logged-in user
 */

  signin(req, res) {
    const { email, password } = req.body;

// validating email and password using express-validator

    req.check('email', 'Email is required').notEmpty();
    req.check('password', 'Password is required').notEmpty();
    req.check('email', 'Please put a valid email').isEmail();
    req.check('password', 'Password must be a mininum of 6 character')
    .isLength(6, 50);

    const errors = req.validationErrors();
    if (errors) {
      const message = errors[0].msg;
      res.status(400).json({ message });
    } else {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        res.status(200).json({
          message: 'Success: you have successfuly signed in.',
          user,
        });
      })
      .catch((error) => {
        res.status(403).json({
          message: error.message,
        });
      });
    }
  },

   /**
 * @description: This method controls a signout
 * route POST: user/signout
 * @param {Object} req request object
 * @param {Object} res response object
 * @return {Object} response containing the logged-in user
 */
  signout(req, res) {
    firebase.auth().signOut()
      .then(() => {
        res.status(200).json({
          message: 'You have signed out of the Application',
        });
      })
      .catch((error) => {
        res.status(403).json({
          message: error.message,
        });
      });
  },

   /**
 * @description: This method controls reset password
 * route GET: user/reset
 * @param {Object} req request object
 * @param {Object} res response object
 * @return {Object}
 */
  resetPassword(req, res) {
    const { email } = req.body;
    req.check('email', 'Email is required').notEmpty();
    req.check('email', 'Please put a valid email').isEmail();

    const errors = req.validationErrors();
    if (errors) {
      const message = errors[0].msg;
      res.status(400).json({ message });
    } else {
      firebase.auth().sendPasswordResetEmail(email)
      .then(() => {
        res.json({
          message: 'An email has been sent to your email',
        });
      })
      .catch((error) => {
        res.status(403).json({
          message: error.message,
        });
      });
    }
  },

   /**
 * @description: This method retrieves all the users in database
 * route GET: user/users
 * @param {Object} req request object
 * @param {Object} res response object
 * @return {Object} response containing all the users
 */
  usersList(req, res) {
    const user = firebase.auth().currentUser;
    if (user) {
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
          res.send({
            users,
          });
        })
        .catch((error) => {
          res.status(500).json({
            message: `Error occurred ${error.message}`,
          });
        });
    } else {
      res.status(401).json({
        message: 'You are not signed in right now! ',
      });
    }
  },
  googleLogin(req, res) {
    const result = req.body;
    const credential = firebase.auth.GoogleAuthProvider.credential(result.credential.idToken);

    firebase.database().ref('users').child(result.user.uid).once('value', (snapshot) => {
      if (!snapshot.exists()) {
        firebase.database().ref(`users/${result.user.uid}`)
        .set({
          userName: result.user.displayName,
          email: result.user.email,
          phoneNumber: result.user.phoneNumber
        });
        firebase.auth().signInWithCredential(credential)
        .then((user) => {
          res.status(200).json({
            message: 'Success: you have successfuly signed in. with Google',
            user,
          });
        });
      } else {
        firebase.auth().signInWithCredential(credential)
        .then((user) => {
          res.status(200).json({
            message: 'Success: you have successfuly signed in. with Google',
            user,
          });
        });
      }
    });
  },
};
