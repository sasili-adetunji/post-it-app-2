import firebase from 'firebase';


export default {
  signup(req, res) {
    const { email, password, userName, phoneNumber } = req.body;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        user.updateProfile({
          displayName: userName
        });
        firebase.database().ref(`users/${user.uid}`)
        .set({
          userName,
          email,
          phoneNumber
        });
        res.status(200).json({
          message: `Welcome ${user.email}. You have successfully registered. You can proceed to login now`,
          user
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: 'An error occured'
        });
      });
  },
  signin(req, res) {
    const { email, password } = req.body;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        res.status(200).json({
          message: 'Success: you have successfuly signed in.',
          user
        });
      })
      .catch((err) => {
        res.send({ message: 'Error: The email or password of the user is invalid' });
      });
  },
  signout(req, res) {
    firebase.auth().signOut()
      .then(() => {
        res.status(200).json({
          message: 'You have signed out of the Application'
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: 'There appear to be error with signing out'
        });
      });
  },
  resetPassword(req, res) {
    const { email } = req.body;
    firebase.auth().sendPasswordResetEmail(email)
      .then(() => {
        res.json({
          message: 'An email has been sent to your email'
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: `There appear to be ${err.message}`
        });
      });
  },
  usersList(req, res) {
    const user = firebase.auth().currentUser;
    if (user) {
      // create an empty array to hold the users
      const users = [];
      const userRef = firebase.database().ref('users/').once('value', (msg) => {
        msg.forEach((snapshot) => {
          const userDetails = {
            userId: snapshot.key,
            userName: snapshot.val().userName
          };
          users.push(userDetails);
        });
      })
        .then(() => {
          res.send({
            users
          });
        })
        .catch((error) => {
          res.status(500).json({
            message: 'Error occurred',
          });
        });
    } else {
      res.status(401).json({
        message: 'You are not signed in right now! '
      });
    }
  },
  googleLogin(req, res) {
    let token,
      email,
      uid,
      displayName;
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        token = result.credential.accessToken;
        email = result.user.email;
        uid = result.user.uid;
        displayName = result.user.displayName;
        const userRef = firebase.database().ref('users/').child(uid).set({
          username: displayName,
          email
        });
        res.json({
          message: 'You have successfully signed in with  Google' });
      })
      .catch((error) => {
        res.status(500).json({
          message: error.message
        });
      });
  }
};
