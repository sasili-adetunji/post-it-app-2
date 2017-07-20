import axios from 'axios';
import PropTypes from 'prop-types';
import firebase from 'firebase';

import { firebaseAuth, ref } from '../../server/config/db'



import PostItActions from '../actions/PostItActions';

 module.exports = {

  registerNewUser(user) {
    console.log(user);
    axios.post('/user/signup', {
      email: user.email,
      password: user.password,
      username: user.username
    })
    .then((response) => {
      console.log(response.data.message);
      PostItActions.receiveSuccess(response.data.message);

    })
  .catch((error) => {
    PostItActions.receiveErrors(error.message);
  })
  },

  signinUser(user) {
    axios.post('/user/signin', {
      email: user.email,
      password: user.password
    }).then((response) => {
      const authuser = {
        email: user.email,
        isAuthenticated: true
      };
      PostItActions.receiveSuccess(response.message);
      PostItActions.receiveAuthenticatedUser(authuser);

    })
  .catch((error) => {
    PostItActions.receiveErrors(error.message);
    
  });
  },

  signoutUser() {
    axios.post('/user/signout').then((response) => {
      PostItActions.receiveSuccess(response.message);
    })
    .catch((error) => {
      PostItActions.receiveErrors(error.message);
    });
  },
  googleLogin() {
    var token,
    email,
    uid,
    displayName;
   var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
      firebaseAuth().signInWithPopup(provider)
      .then((result)=> {
            token = result.credential.accessToken;
            email = result.user.email;
            uid = result.user.uid
            displayName = result.user.displayName
        })
    .then((snap)=> {
      const userRef = firebase.database()
       .ref(`users/`).child(uid).set({
        username: displayName,
        email: email
      });
    })
    .then(() => {
      const authuser = {
        email: email,
        isAuthenticated: true
      };
      PostItActions.receiveSuccess({message: 'Success: you have successfuly signed in.'});
      PostItActions.receiveAuthenticatedUser(authuser);
    })
      .catch((error)=> {
          PostItActions.receiveErrors(error.message);
    })
  },

  createNewGroup(group) {
    axios.post('/group', {
      groupname: group.groupname,
    }).then((response) => {
      PostItActions.receiveSuccess(response.message);
    })
    .catch((error) => {
      PostItActions.receiveErrors(error.message);
    });
  },

  addUserToGroup(user) {
    axios.post(`/group/${user.groupId}/user`, {
      email: user.email,
      userId: user.userId,
      username: user.username,
      groupname: user.groupName
    }).then((response) => {
      PostItActions.receiveSuccess(response.message);
    })
  .catch((error) => {
    PostItActions.receiveErrors(error.message);
  });
  },

  postMessage(message) {
    // console.log('api', message);
    axios.post('/message', {
      groupId: message.groupId,
      message: message.message
    }).then((response) => {
      PostItActions.receiveSuccess(response.message);
    })
    .catch((error) => {
      PostItActions.receiveErrors(error.message);
    });
  },

  getUserGroups() {
    axios.get('user/groups')
   .then((response) => {
     console.log(response);
     PostItActions.receiveSuccess(response.message);
     PostItActions.receiveUserGroups(response.data.groups);
   })
   .catch((error) => {
     PostItActions.receiveErrors(error.message);
   });
  },

  getUsers() {
    axios.get('user/users')
   .then((response) => {
     console.log(response);
     PostItActions.receiveSuccess(response.message);
     PostItActions.receiveUsers(response.data.users);
   })
   .catch((error) => {
     PostItActions.receiveErrors(error.message);
   });
  },

  getMessages(group) {
    axios.get(`/group/${group.groupId}/messages`)
    .then((response) => {
      PostItActions.receiveSuccess(response.message);
      PostItActions.receiveMessages(response.data.messages);
    })
   .catch((error) => {
     PostItActions.receiveErrors(error.message);
   });
  },
  resetPassword(email) {
    axios.post('/user/reset', {
          email: email.email
    })
    .then((response) => {
      PostItActions.receiveSuccess(response.message);
    })
   .catch((error) => {
     PostItActions.receiveErrors(error.message);
   });
  }
};
