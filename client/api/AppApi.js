import axios from 'axios';
import toastr from 'toastr';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';


  /**
   * @description describes an API call to the server for a post request
   * to register a user
   *
   * @param {Object} user an object that contains the username,
   * password, email and phone number of a new user
   *
   * @returns {Object} returns which contains authorization token
   * and message
   */
export const registerNewUser = (user) => {
  axios.post('/user/signup', {
    email: user.email,
    password: user.password,
    userName: user.userName,
    phoneNumber: user.phoneNumber,
  })
  .then((response) => {
    setAuthorizationToken(response.data.token);
    localStorage.setItem('jwtToken', response.data.token);
    AppActions.receiveLoginSuccess(response.data.token);
    toastr.success(response.data.message);
  })
  .catch((error) => {
    toastr.error(error.response.data.message);
  });
};


/**
 * @description describes an API call to the server for a post request
 * to login a user.
 *
 * @param {Object} user an object that contains the email and password
 * of a registered user
 *
 * @returns {Object} returns which contains authorization token
 * and message
 */
export const signinUser = (user) => {
  axios.post('/user/signin', {
    email: user.email,
    password: user.password,
  })
  .then((response) => {
    setAuthorizationToken(response.data.token);
    localStorage.setItem('jwtToken', response.data.token);
    AppActions.receiveLoginSuccess(response.data.token);
    toastr.success(response.data.message);
  })
  .catch((error) => {
    toastr.error(error.response.data.message);
  });
};

/**
 * @description describes an API call to the server for a to signout a user
 *
 * @returns {Object} returns which contains message
 */
export const signoutUser = () => {
  axios.get('/user/signout')
  .then((response) => {
    setAuthorizationToken(false);
    localStorage.clear();
    toastr.success(response.data.message);
  })
  .catch((error) => {
    toastr.success(error.response.data.message);
  });
};

/**
 * @description describes an API call to the server for a post request
 * to login a user with google
 *
 * @param {Object} result an object that contains the idToken
 *
 * @returns {Object} returns which contains authorization token
 * and message
 */
export const googleLogin = (result) => {
  axios.post('/user/google', { result })
  .then((response) => {
    setAuthorizationToken(response.data.token);
    localStorage.setItem('jwtToken', response.data.token);
    AppActions.receiveLoginSuccess(response.data.token);
    toastr.success(response.data.message);
  })
  .catch((error) => {
    toastr.error(error.response.data.message);
  });
};


/**
 * @description describes an API call to the server for a post request
 * to create a new group
 *
 * @param {Object} group an object that contains the group name
 *
 * @returns {Object} returns object which contains the  group created
 * and message
 */
export const createNewGroup = (group) => {
  axios.post('/group', group)
  .then((response) => {
    AppStore.addGroups(response.data.groups);
    toastr.success(response.data.message);
  })
  .catch((error) => {
    toastr.error(error.response.data.message);
  });
};


/**
 * @description describes an API call to the server for a get request
 * to fetch all the messages in a group
 *
 * @param {Object} group an object that contains the groupId
 *
 * @returns {Object} returns which contains the fetched message
 */
export const getMessages = (group) => {
  axios.get(`/group/${group.groupId}/messages`)
  .then((response) => {
    AppStore.setMessages(response.data.messages);
  })
  .catch((error) => {
    AppActions.receiveErrors(error.message);
  });
};

/**
 * @description describes an API call to the server for a post request
 * to add a user to a group
 *
 * @param {Object} user an object that contains the user details to be added
 *
 * @returns {Object} returns which contains the added user and message
 */
export const addUserToGroup = (user) => {
  axios.post(`/group/${user.groupId}/user`, {
    userId: user.userId,
    groupId: user.groupId,
    userName: user.userName,
  })
  .then((response) => {
    AppActions.recieveAddMembersToGroups(response.data.user);
    toastr.success(response.data.message);
  })
  .catch((error) => {
    toastr.error(error.response.data.message);
  });
};


/**
 * @description describes an API call to the server for a post request
 * to post message to a group
 *
 * @param {Object} message an object that contains the message details
 *
 * @returns {Object} returns which contains the posted message
 */
export const postMessage = (message) => {
  axios.post('/message', {
    groupId: message.groupId,
    message: message.messageText,
    priorityLevel: message.priorityLevel,
    date: message.date,
  })
  .then((response) => {
    toastr.success(response.data.message);
  })
  .catch((error) => {
    toastr.error(error.response.data.message);
  });
};


/**
 * @description describes an API call to the server for a get request
 * to fetch all the groups for a user
 *
 * @returns {Object} returns which contains the all the groups
 */
export const getUserGroups = () => {
  axios.get('user/groups')
  .then((response) => {
    AppStore.setUserGroups(response.data.groups);
  })
  .catch((error) => {
    AppActions.receiveErrors(error.message);
  });
};


/**
 * @description describes an API call to the server for a get request
 * to fetch all the users in a group
 *
 * @param {Object} group an object that contains the groupId
 *
 * @returns {Object} returns which contains the fetched users
 */
export const getUsersInGroup = (group) => {
  axios.get(`/group/${group.groupId}/users`)
  .then((response) => {
    AppActions.receiveSuccess(response.message);
    AppStore.setUsersInGroup(response.data.users);
  })
  .catch((error) => {
    AppActions.receiveErrors(error.message);
  });
};


/**
 * @description describes an API call to the server for a get request
 * to fetch all the users in the app
 *
 * @returns {Object} returns which contains the fetched users
 */
export const getUsers = () => {
  axios.get('user/users')
  .then((response) => {
    AppActions.receiveUsers(response.data.users);
  })
  .catch((error) => {
    AppActions.receiveErrors(error.message);
  });
};


/**
 * @description describes an API call to the server for a get request
 * to fetch all the users that have read a particular message
 *
 * @param {Object} message an object that contains the message Id of the
 * particular message
 *
 * @returns {Object} returns which contains the fetched read users
 */
export const getUserReadUsers = (message) => {
  axios.get(`/group/${message.messageId}/readUsers`)
  .then((response) => {
    AppActions.receiveSuccess(response.message);
    AppStore.setReadUsers(response.data.readUsers);
  })
  .catch((error) => {
    AppActions.receiveErrors(error.message);
  });
};


/**
 * @description describes an API call to the server for a post request
 * to reset a password of a particular user
 *
 * @param {Object} email an object that contains the email of the user to be
 * reseted
 *
 * @returns {Object} returns which contains a success or error message
 */
export const resetPassword = (email) => {
  axios.post('/user/reset', email)
  .then((response) => {
    toastr.success(response.data.message);
  })
  .catch((error) => {
    toastr.error(error.response.data.message);
  });
};
