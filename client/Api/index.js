import axios from 'axios';
import PropTypes from 'prop-types';


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
  googleLogin(token) {
    axios.post('/user/google')
    .then((response) => {
      console.log(response.data.message);
      PostItActions.receiveSuccess(response.user);
      PostItActions.receiveAuthenticatedUser(response.user);

    })
    .catch((error) => {
      PostItActions.receiveErrors(error.message);
    });
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

  getMessages() {
    axios.get(`/user/message`)
    .then((response) => {
      PostItActions.receiveSuccess(response.message);
      PostItActions.receiveMessages(response.data.messages);
    })
   .catch((error) => {
     PostItActions.receiveErrors(error.message);
   });
  },
  resetPassword(email) {
    axios.get('/user/reset')
    .then((response) => {
      PostItActions.receiveSuccess(response.message);
    })
   .catch((error) => {
     PostItActions.receiveErrors(error.message);
   });
  }
};
