import firebase from 'firebase';
import jwt from 'jsonwebtoken';


export default {
  /**
   * @description: Creates a user account
   * Route: POST: /user/signup
   *
   * @param {any} req incoming request from the client
   * @param {any} res response sent back to client
   *
   * @returns {response} response object
   */
  signup(req, res) {
    const { email, password, userName, phoneNumber } = req.body;
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
        const uid = user.uid;
        const token = jwt.sign({
          data: {
            uid,
            userName,
            email,
          }
        }, process.env.TOKEN_SECRET, { expiresIn: '24h' });
        res.status(201).json({
          message: 'Signup was successful', token });
      })
      .catch((error) => {
        res.status(401).json({
          message: error.message,
        });
      });
  },
 /**
   * @description:  singns in a user
   * Route: POST: /user/signin
   *
   * @param {any} req incoming request from the client
   * @param {any} res response sent back to client
   *
   * @returns {response} response object
   */
  signin(req, res) {
    const { email, password } = req.body;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        const uid = user.uid;
        const userName = user.displayName;
        const token = jwt.sign({
          data: {
            uid,
            userName,
            email,
          }
        }, process.env.TOKEN_SECRET, { expiresIn: '2h' });
        res.status(200).json({
          message: 'Success: you have successfuly signed in.', token });
      })
      .catch((error) => {
        res.status(401).json({
          message: error.message,
        });
      });
  },
 /**
   * @description: sign out a user
   * Route: POST: /user/signout
   *
   * @param {any} req incoming request from the client
   * @param {any} res response sent back to client
   *
   * @returns {response} response object
   */
  signout(req, res) {
    firebase.auth().signOut()
      .then(() => {
        res.status(200).json({
          message: 'You have signed out of the Application',
        });
      })
      .catch((error) => {
        res.status(401).json({
          message: error.message,
        });
      });
  },

 /**
   * @description: reset a user password
   * Route: POST: /user/reset
   *
   * @param {any} req incoming request from the client
   * @param {any} res response sent back to client
   *
   * @returns {response} response object
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
        res.status(401).json({
          message: error.message,
        });
      });
  },


  /**
   * @description: fetches all the users in the app
   * Route: GET: /user/users
   *
   * @param {any} req incoming request from the client
   * @param {any} res response sent back to client
   *
   * @returns {response} response object
   */
  getUsersList(req, res) {
      // create an empty array to hold the users
    const users = [];
    const userData = req.decoded.data;
    if (userData) {
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
        .catch((error) => {
          res.status(500).json({
            message: `Error occurred ${error.message}`,
          });
        });
    } else {
      res.status(401).json({
        message: 'Please log in to get users list',
      });
    }
  },


  /**
   * @description: reates a user account with google
   * Route: POST: /user/google
   *
   * @param {any} req incoming request from the client
   * @param {any} res response sent back to client
   *
   * @returns {response} response object
   */
  googleLogin(req, res) {
    const result = req.body;
    const credential = firebase.auth.GoogleAuthProvider
    .credential(result.credential.idToken);
    firebase.database()
    .ref('users').child(result.user.uid).once('value', (snapshot) => {
      if (!snapshot.exists()) {
        firebase.database().ref(`users/${result.user.uid}`)
        .set({
          userName: result.user.displayName,
          email: result.user.email,
          phoneNumber: result.user.phoneNumber
        });
        firebase.auth().signInWithCredential(credential)
        .then((user) => {
          const uid = user.uid;
          const userName = user.displayName;
          const email = user.email;
          const token = jwt.sign({
            data: {
              uid,
              userName,
              email,
            }
          }, process.env.TOKEN_SECRET, { expiresIn: '24h' });
          res.status(201).send({
            message: 'You have successfully signed', token, user });
        });
      } else {
        firebase.auth().signInWithCredential(credential)
        .then((user) => {
          const uid = user.uid;
          const userName = user.displayName;
          const email = user.email;
          const token = jwt.sign({
            data: {
              uid,
              userName,
              email,
            }
          }, process.env.TOKEN_SECRET, { expiresIn: '24h' });
          res.status(200).send({
            message: 'You have successfully signed', token, user });
        });
      }
    });
  },
  searchUsers (req, res) {
    const userName = req.query.user;
    const user = {};
    const userData = req.decoded.data;
    if (userData) {
      firebase.database().ref('users/').orderByChild('userName')
    .startAt(userName)
    .endAt(`${userName}\uf8ff`)
    .once('child_added', (msg) => {
      user.email = msg.val().email;
      user.userName = msg.val().userName;
      user.userId = msg.key;
    })
    .then(() => {
      res.status(200).json({
        user
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: `error occured ${error}`
      });
    });
    } else {
      res.status(401).json({
        message: 'Please log in to search users',
      });
    }
  }
};
