import PostItDispatcher from '../dispatcher/PostItDispatcher';
import PostItConstants from '../constants/PostItConstants';

const PostItActions = {
/**
  * sign in a user & dispatches an action
  *
  * @param {object} user user's required sign in credentials
  *
  * @returns {response} request response
  */
  login(user) {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.LOGIN_USER,
      user,
    });
  },


  /**
  * signs in user with google & dispatches actions
  *
  * @param {object} result sign in credentials provided by firebase
  *
  * @returns {response} request response
  */
  googleLogin(result) {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.GOOGLE_LOGIN,
      result,
    });
  },


 /**
  * signup a user & dispatches actions
  *
  * @param {object} user required sign up credentials
  *
  * @returns {response} request response
  */
  registerUser(user) {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.REGISTER_USER,
      user,
    });
  },


  /**
  * recieves error messages & dispatches it
  *
  * @param {object} error required sign in credentials
  *
  * @returns {response} request response
  */
  receiveErrors(errors) {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.RECEIVE_ERRORS,
      errors,
    });
  },


  /**
  * recieves success messages & dispatches it
  *
  * @param {object} message required sign in credentials
  *
  * @returns {response} request response
  */
  receiveSuccess(message) {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.RECEIVE_SUCCESS,
      message,
    });
  },


/**
  * recieves login success messages & dispatches it
  *
  * @param {object} message required sign in credentials
  *
  * @returns {response} request response
  */
  receiveLoginSuccess(message) {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.RECEIVE_LOGIN_SUCCESS,
      message,
    });
  },

/**
  * recieves error messages & dispatches it
  *
  * @param {object} message r
  *
  * @returns {response} request response
  */
  receiveReadUsers(message) {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.RECEIVE_READ_USERS,
      message,
    });
  },
  /**
   * create group and dispatches actions
   * @param {any} group
   */
  createGroup(group) {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.CREATE_GROUP,
      group,
    });
  },


/**
  * adds user to a group & dispatches it
  *
  * @param {object} user user details to be added
  *
  * @returns {action} action type and payload
  */
  addUserToGroup(user) {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.ADDUSER_GROUP,
      user,

    });
  },


/**
  * post message & dispatches it
  *
  * @param {object} message message details to be posted in group
  *
  * @returns {action} action type and payload
  */
  addMessage(message) {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.ADD_MESSAGE,
      message,
    });
  },


 /**
  * reset password error messages & dispatches it
  *
  * @param {object} email
  *
  * @returns {action} action type and payload
  */
  resetPassword(email) {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.RESET_PASSWORD,
      email,
    });
  },


 /**
  * signs out a user & dispatches it
  *
  * @returns {action} action type and payload
  */
  signOutUser() {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.SIGNOUT_USER,
    });
  },


 /**
  * get user messages e & dispatches it
  *
  * @param {object} groups group details to get message from
  *
  * @returns {action} action type and payload
  */
  getUserMessages(groups) {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.GET_USER_MESSAGES,
      groups,
    });
  },


/**
  * recieves user groups & dispatches it
  *
  * @param {object} groups users in the groups
  *
  * @returns {action} action type and payload
  */
  receiveUserGroups(groups) {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.RECEIVE_USER_GROUPS,
      groups,

    });
  },


 /**
  * recieves all users in the app & dispatches it
  *
  * @param {object} users the userId and userName
  *
  * @returns {action} action type and payload
  */
  receiveUsers(users) {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.RECEIVE_USERS,
      users,

    });
  },


  /**
  * recieves authenticated user & dispatches it
  *
  * @param {object} user
  *
  * @returns {action} action type and payload
  */
  receiveAuthenticatedUser(user) {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.RECEIVE_AUTHENTICATED_USER,
      user,
    });
  },


/**
  * recieves error messages & dispatches it
  *
  * @param {object} selectedGroup group details of the selected group
  *
  * @returns {action} action type and payload
  */
  groupOpened(selectedGroup) {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.GROUP_OPENED,
      selectedGroup,
    });
  },


/**
  * recieves users in a particular group & dispatches it
  *
  * @param {object} group required group details of the particular group
  *
  * @returns {action} action type and payload
  */
  recieveUsersInGroups(group) {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.RECIEVE_USERS_IN_GROUPS,
      group,
    });
  },
};

export default PostItActions;
