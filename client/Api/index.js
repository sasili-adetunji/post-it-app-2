import axios from 'axios';
import firebase from 'firebase';
import { firebaseAuth, db } from '../../server/config/db';
import PostItActions from '../actions/PostItActions';
import PostItStore from '../stores/PostItStore';

module.exports = {

  /**
   * api call to register new user from the signup route
   *
   * @param {any} user
   */
  registerNewUser(user) {
    axios.post('/user/signup', {
      email: user.email,
      password: user.password,
      userName: user.userName,
      phoneNumber: user.phoneNumber
    })
    .then((response) => {
      const authuser = {
        email: user.email,
        isAuthenticated: true
      };
      if ((response.data.message === 'The email address is badly formatted.') || (response.data.message === 'The email address is already in use by another account.')) {
        PostItActions.receiveErrors(response.data.message);
      } else {
        PostItActions.receiveSuccess(response.data.message);
        localStorage.setItem('user', response.data.user.stsTokenManager.accessToken);
        PostItActions.receiveAuthenticatedUser(authuser);
      }
    })
  .catch((error) => {
    PostItActions.receiveErrors(error.message);
  });
  },

  /**
   * api call to signin user from the signin route
   *
   * @param {any} user
   */
  signinUser(user) {
    axios.post('/user/signin', {
      email: user.email,
      password: user.password
    }).then((response) => {
      const authuser = {
        email: user.email,
        isAuthenticated: true
      };
      if (response.data.message === 'Error: The email or password of the user is invalid') {
        PostItActions.receiveErrors(response.data.message);
      } else {
        PostItActions.receiveSuccess(response.data.message);
        localStorage.setItem('user', response.data.user.stsTokenManager.accessToken);
        PostItActions.receiveAuthenticatedUser(authuser);
        PostItStore.setLoggedInUser(response.data.user);
      }
    })
  .catch((error) => {
    PostItActions.receiveErrors(error.message);
  });
  },

  /**
   * api call to signout user from the signout route
   *
   */
  signoutUser() {
    axios.get('/user/signout').then((response) => {
      PostItActions.receiveSuccess(response.message);
      localStorage.removeItem('user');
    })
    .catch((error) => {
      PostItActions.receiveErrors(error.message);
    });
  },

  /**
   * api call to login us with google
   *
   */
  googleLogin() {
    let email,
      uid,
      displayName;
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        const token = result.credential.accessToken;
        email = result.user.email;
        uid = result.user.uid;
        displayName = result.user.displayName;
      })
    .then(() => {
      db.database()
       .ref('users/').child(uid).set({
         userName: displayName,
         email
       });
    })
    .then(() => {
      const authuser = {
        email,
        isAuthenticated: true
      };
      PostItActions.receiveSuccess({ message: 'Success: you have successfuly signed in.' });
      PostItActions.receiveAuthenticatedUser(authuser);
    })
      .catch((error) => {
        PostItActions.receiveErrors(error.message);
      });
  },

  /**
   * api call to create new group from the route
   *
   * @param {any} group
   */
  createNewGroup(group) {
    axios.post('/group', {
      groupName: group.groupName,
      userName: group.userName
    }).then((response) => {
      PostItActions.receiveSuccess(response.message);
    })
    .catch((error) => {
      PostItActions.receiveErrors(error.message);
    });
  },

  /**
   * api call to add user to groups
   *
   * @param {any} user
   */
  addUserToGroup(user) {
    axios.post(`/group/${user.groupId}/user`, {
      userId: user.userId,
      groupId: user.groupId,
      userName: user.userName
    }).then((response) => {
      PostItActions.receiveSuccess(response.message);
    })
  .catch((error) => {
    PostItActions.receiveErrors(error.message);
  });
  },

  /**
   * api call to post message through the message route
   *
   * @param {any} message
   */
  postMessage(message) {
    axios.post('/message', {
      groupId: message.groupId,
      message: message.message,
      priorityLevel: message.priorityLevel,
      date: message.date,
      author: message.author
    }).then((response) => {
      PostItActions.receiveSuccess(response.message);
    })
    .catch((error) => {
      PostItActions.receiveErrors(error.message);
    });
  },

  /**
   * api call to get user groups
   *
   */
  getUserGroups() {
    axios.get('user/groups')
   .then((response) => {
     PostItActions.receiveSuccess(response.message);
     PostItStore.setUserGroups(response.data.groups);
   })
   .catch((error) => {
     PostItActions.receiveErrors(error.message);
   });
  },

  /**
   * api call to get list of all the users in a group
   *
   */
  getUsersInGroup(group) {
    axios.get(`/group/${group.groupId}/users`)
   .then((response) => {
     PostItActions.receiveSuccess(response.message);
     PostItStore.setUsersInGroup(response.data.users);
    //  PostItActions.receiveUsersInGroup(response.data.users);
   })
   .catch((error) => {
     PostItActions.receiveErrors(error.message);
   });
  },
  /**
   * api call to get list of all the users in the App
   *
   */
  getUsers() {
    axios.get('user/users')
   .then((response) => {
     PostItActions.receiveSuccess(response.message);
     PostItActions.receiveUsers(response.data.users);
   })
   .catch((error) => {
     PostItActions.receiveErrors(error.message);
   });
  },

  /**
   * api call to get messages in a particular groups
   *
   * @param {any} group
   */
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


  /**
   * api call to get read users
   *
   * @param {any} message
   */
  getUserReadUsers(message) {
    axios.get(`/group/${message.messageId}/readUsers`)
    .then((response) => {
      PostItActions.receiveSuccess(response.message);
      // PostItActions.receiveReadUsers(response.data.readUsers);
      PostItStore.setReadUsers(response.data.readUsers);
    })
   .catch((error) => {
     PostItActions.receiveErrors(error.message);
   });
  },


  /**
   * api call to reset password
   *
   * @param {any} email
   */
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
