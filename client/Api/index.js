import axios from 'axios';
import toastr from 'toastr';
import PostItActions from '../actions/PostItActions';
import PostItStore from '../stores/PostItStore';


  /**
   * api call to register new user from the signup route
   *
   * @param {any} user
   */
export const registerNewUser = (user) => {
  axios.post('/user/signup', {
    email: user.email,
    password: user.password,
    userName: user.userName,
    phoneNumber: user.phoneNumber,
  })
  .then((response) => {
    PostItActions.receiveSuccess(response.data.message);
    toastr.success(response.data.message);
  })
  .catch((error) => {
    PostItActions.receiveErrors(error.response.data.message);
    toastr.error(error.response.data.message);
  });
};

  /**
   * api call to signin user from the signin route
   *
   * @param {any} user
   */
export const signinUser = (user) => {
  axios.post('/user/signin', {
    email: user.email,
    password: user.password,
  })
    .then((response) => {
      PostItActions.receiveLoginSuccess(response.data.user);
      toastr.success(response.data.message);
    })
    .catch((error) => {
      toastr.error(error.response.data.message);
    });
};

  /**
   * api call to signout user from the signout route
   *
   */
export const signoutUser = () => {
  axios.get('/user/signout')
    .then((response) => {
      PostItActions.receiveSuccess(response.data.message);
      localStorage.removeItem('user'); // eslint-disable-line
      toastr.success(response.data.message);
    })
    .catch((error) => {
      PostItActions.receiveErrors(error.response.data.message);
    });
};

  /**
   * api call to login us with google
   *
   */
export const googleLogin = (result) => {
  axios.post('/user/google', result)
    .then((response) => {
      PostItActions.receiveLoginSuccess(response.data.user);
      toastr.success(response.data.message);
    })
      .catch((error) => {
        toastr.error(error.response.data.message);
      });
};
  /**
   * api call to create new group from the route
   *
   * @param {any} group
   */
export const createNewGroup = (group) => {
  axios.post('/group', {
    groupName: group.groupName,
    userName: group.userName,
  }).then((response) => {
    PostItActions.receiveSuccess(response.message);
    toastr.success(response.data.message);
  })
      .catch((error) => {
        PostItActions.receiveErrors(error.message);
        toastr.error(error.response.data.message);
      });
};
  /**
   * api call to get messages in a particular groups
   *
   * @param {any} group
   */
export const getMessages = (group) => {
  axios.get(`/group/${group.groupId}/messages`)
    .then((response) => {
      PostItActions.receiveSuccess(response.message);
      PostItStore.setMessages(response.data.messages);
    })
    .catch((error) => {
      PostItActions.receiveErrors(error.message);
    });
};

  /**
   * api call to add user to groups
   *
   * @param {any} user
   */
export const addUserToGroup = (user) => {
  axios.post(`/group/${user.groupId}/user`, {
    userId: user.userId,
    groupId: user.groupId,
    userName: user.userName,
  }).then((response) => {
    PostItActions.receiveSuccess(response.message);
  })
      .catch((error) => {
        PostItActions.receiveErrors(error.message);
      });
};

  /**
   * api call to post message through the message route
   *
   * @param {any} message
   */
export const postMessage = (message) => {
  axios.post('/message', {
    groupId: message.groupId,
    message: message.messageText,
    priorityLevel: message.priorityLevel,
    date: message.date,
    author: message.author,
  })
  .then((response) => {
    PostItActions.receiveSuccess(response.data);
  })
  .catch((error) => {
    PostItActions.receiveErrors(error.message);
  });
};

  /**
   * api call to get user groups
   *
   */
export const getUserGroups = () => {
  axios.get('user/groups')
    .then((response) => {
      PostItActions.receiveSuccess(response.message);
      PostItStore.setUserGroups(response.data.groups);
    })
    .catch((error) => {
      PostItActions.receiveErrors(error.message);
    });
};

  /**
   * api call to get list of all the users in a group
   *
   */
export const getUsersInGroup = (group) => {
  axios.get(`/group/${group.groupId}/users`)
    .then((response) => {
      PostItActions.receiveSuccess(response.message);
      PostItStore.setUsersInGroup(response.data.users);
    })
    .catch((error) => {
      PostItActions.receiveErrors(error.message);
    });
};
  /**
   * api call to get list of all the users in the App
   *
   */
export const getUsers = () => {
  axios.get('user/users')
    .then((response) => {
      PostItActions.receiveSuccess(response.message);
      PostItActions.receiveUsers(response.data.users);
    })
    .catch((error) => {
      PostItActions.receiveErrors(error.message);
    });
};

  /**
   * api call to get read users
   *
   * @param {any} message
   */
export const getUserReadUsers = (message) => {
  axios.get(`/group/${message.messageId}/readUsers`)
    .then((response) => {
      PostItActions.receiveSuccess(response.message);
      PostItStore.setReadUsers(response.data.readUsers);
    })
    .catch((error) => {
      PostItActions.receiveErrors(error.message);
    });
};
  /**
   * api call to reset password
   *
   * @param {any} email
   */
export const resetPassword = (email) => {
  axios.post('/user/reset', {
    email: email.email,
  })
    .then((response) => {
      PostItActions.receiveSuccess(response.data.message);
      toastr.success(response.data.message);
    })
    .catch((error) => {
      PostItActions.receiveErrors(error.response.data.message);
      toastr.error(error.response.data.message);
    });
};
