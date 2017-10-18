import axios from 'axios';
import firebase from 'firebase';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import PostItActions from '../actions/PostItActions';
import PostItStore from '../stores/PostItStore';
import config from '../../server/app/config/database';


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
        // if ((response.data.message === 'The email address is badly formatted.') || (response.data.message === 'The email address is already in use by another account.')) {
        //   PostItActions.receiveErrors(response.data.message);
        // } else {
        PostItActions.receiveSuccess(response.data.message);
        Alert.success(response.data.message, {
          position: 'top-right',
          effect: 'slide',
          timeout: '3000'
        });
      })
      .catch((error) => {
        PostItActions.receiveErrors(error.response.data.message);
        Alert.error(error.response.data.message, {
          position: 'top-right',
          effect: 'slide',
          timeout: '3000'
        });
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
      // if (response.data.message === 'Error: The email or password of the user is invalid') {
      //   PostItActions.receiveErrors(response.data.message);
      // } else {
      PostItActions.receiveSuccess(response.data.message);
      localStorage.setItem('user', response.data.user.stsTokenManager.accessToken);
      PostItStore.setLoggedInUser(response.data.user);
      PostItActions.receiveAuthenticatedUser(authuser);
      Alert.success(response.data.message, {
        position: 'top-right',
        effect: 'slide',
        timeout: '3000'
      });
      // }
    })
      .catch((error) => {
        PostItActions.receiveErrors(error.response.data.message);
        Alert.error(error.response.data.message, {
          position: 'top-right',
          effect: 'slide',
          timeout: '3000'
        });
      });
  },

  /**
   * api call to signout user from the signout route
   *
   */
  signoutUser() {
    axios.get('/user/signout')
    .then((response) => {
      PostItActions.receiveSuccess(response.data.message);
      localStorage.removeItem('user');
      Alert.success(response.data.message, {
        position: 'top-right',
        effect: 'slide',
        timeout: '3000'
      });
    })
      .catch((error) => {
        PostItActions.receiveErrors(error.response.data.message);
      });
  },

  /**
   * api call to login us with google
   *
   */
  googleLogin() {
    firebase.initializeApp(config);
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then((response) => {
      const authuser = {
        email: response.user.email,
        isAuthenticated: true
      };
      localStorage.setItem('user', response.credential.accessToken);
      PostItStore.setLoggedInUser(response.user);
      PostItActions.receiveAuthenticatedUser(authuser);
      Alert.success(response.data.message, {
        position: 'top-right',
        effect: 'slide',
        timeout: '3000'
      });
    })
    .catch((error) => {
      PostItActions.receiveErrors(error);
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
      // PostItStore.addGroups(response.data.groups);
      Alert.success(response.data.message, {
        position: 'top-right',
        effect: 'slide',
        timeout: '3000'
      });
    })
      .catch((error) => {
        PostItActions.receiveErrors(error.message);
        Alert.error(error.response.data.message, {
          position: 'top-right',
          effect: 'slide',
          timeout: '3000'
        });
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
      // console.log(response.data.messages, 'api post message response');
      // PostItStore.addMessage(response.data.messages);
      // PostItStore.postMessage(response.data.messages);
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
        PostItStore.setMessages(response.data.messages);
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
        PostItActions.receiveSuccess(response.data.message);
        Alert.success(response.data.message, {
          position: 'bottom-right',
          effect: 'slide',
          timeout: 'none'
        });
      })
      .catch((error) => {
        PostItActions.receiveErrors(error.response.data.message);
        Alert.error(error.response.data.message, {
          position: 'bottom-right',
          effect: 'slide',
          timeout: 'none'
        });
      });
  }
};
