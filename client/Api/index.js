import axios from 'axios';
import toastr from 'toastr';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import PostItActions from '../actions/PostItActions';
import PostItStore from '../stores/PostItStore';


/**
  * api call to register a new user
  *
  * @param {object} user user's required sign in credentials
  *
  * @returns {response} request response
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
    localStorage.setItem('jwtToken', response.data.token); // eslint-disable-line
    PostItActions.receiveLoginSuccess(response.data.token);
    toastr.success(response.data.message);
  })
  .catch((error) => {
    toastr.error(error.response.data.message);
  });
};


/**
  * api call to sign in user
  *
  * @param {object} user user's required sign in credentials
  *
  * @returns {response} request response
  */
export const signinUser = (user) => {
  axios.post('/user/signin', {
    email: user.email,
    password: user.password,
  })
    .then((response) => {
      setAuthorizationToken(response.data.token);
      localStorage.setItem('jwtToken', response.data.token); // eslint-disable-line
      PostItActions.receiveLoginSuccess(response.data.token);
      toastr.success(response.data.message);
    })
    .catch((error) => {
      toastr.error(error.response.data.message);
    });
};

/**
  * api call to sign out a user
  *
  * @returns {response} request response
  */
export const signoutUser = () => {
  axios.get('/user/signout')
    .then((response) => {
      setAuthorizationToken(false);
      localStorage.clear(); // eslint-disable-line
      toastr.success(response.data.message);
    })
    .catch((error) => {
      toastr.success(error.response.data.message);
    });
};

/**
  * api call to sign in a user with google
  *
  * @param {object} result user's required sign in credentials
  *
  * @returns {response} request response
  */
export const googleLogin = (result) => {
  axios.post('/user/google', result)
    .then((response) => {
      setAuthorizationToken(response.data.token);
      localStorage.setItem('jwtToken', response.data.token); // eslint-disable-line
      PostItActions.receiveLoginSuccess(response.data.token);
      toastr.success(response.data.message);
    })
    .catch((error) => {
      toastr.error(error.response.data.message);
    });
};


/**
  * api call to create a new group
  *
  * @param {object} group group details to be created
  *
  * @returns {response} request response
  */
export const createNewGroup = (group) => {
  axios.post('/group', {
    groupName: group.groupName,
  }).then((response) => {
    PostItStore.addGroups(response.data.groups);
    toastr.success(response.data.message);
  })
    .catch((error) => {
      toastr.error(error.response.data.message);
    });
};


/**
 * api call to get messages in a particular groups
 *
 * @param {object} group group details to get the message from
 *
 * @returns {response} request response
 */
export const getMessages = (group) => {
  axios.get(`/group/${group.groupId}/messages`)
    .then((response) => {
      PostItStore.setMessages(response.data.messages);
    })
    .catch((error) => {
      PostItActions.receiveErrors(error.message);
    });
};

/**
 * api call to add user to a particular group
 *
 * @param {object} user user details to be added
 *
 * @returns {response} request response
 */
export const addUserToGroup = (user) => {
  axios.post(`/group/${user.groupId}/user`, {
    userId: user.userId,
    groupId: user.groupId,
    userName: user.userName,
  }).then((response) => {
    PostItActions.recieveAddMembersToGroups(response.data.user);
    toastr.success(response.data.message);
  })
    .catch((error) => {
      toastr.error(error.response.data.message);
    });
};


/**
* api call to post message to a particular group
*
* @param {object} message message details to be posted
*
* @returns {response} request response
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
* api call to fetch all groups a particular user belongs to
*
* @returns {response} request response
*/
export const getUserGroups = () => {
  axios.get('user/groups')
    .then((response) => {
      PostItStore.setUserGroups(response.data.groups);
    })
    .catch((error) => {
      PostItActions.receiveErrors(error.message);
    });
};


/**
* api call to get users in a particular group
*
* @param {object} group
*
* @returns {response} request response
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
* api call to get all users in the app
*
* @returns {response} request response
*/
export const getUsers = () => {
  axios.get('user/users')
    .then((response) => {
      PostItActions.receiveUsers(response.data.users);
    })
    .catch((error) => {
      PostItActions.receiveErrors(error.message);
    });
};


/**
* api call to get read users of a particular message
*
* @param {object} message message details of the particular message
*
* @returns {response} request response
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
* api call to reset a user's password
*
* @param {object} email user's email to be reseted
*
* @returns {response} request response
*/
export const resetPassword = (email) => {
  axios.post('/user/reset', {
    email: email.email,
  })
    .then((response) => {
      toastr.success(response.data.message);
    })
    .catch((error) => {
      toastr.error(error.response.data.message);
    });
};
