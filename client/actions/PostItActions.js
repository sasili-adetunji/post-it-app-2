import PostItDispatcher from '../dispatcher/PostItDispatcher';
import PostItConstants from '../constants/PostItConstants';

const PostItActions = {
  /**
   * signs in user with & dispatches actions
   * @param {any} user
   */
  login(user) {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.LOGIN_USER,
      user,
    });
  },

/**
 * signs in user with google & dispatches actions
 * @returns {void}
 */
  googleLogin(result) {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.GOOGLE_LOGIN,
      result,
    });
  },

  /**
   * registers in user & dispatches actions
   * @param {any} user
   * @function
   */
  registerUser(user) {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.REGISTER_USER,
      user,
    });
  },

  /**
   * recieves error message and dispatches actions
   * @param {any} errors
   */
  receiveErrors(errors) {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.RECEIVE_ERRORS,
      errors,
    });
  },
  /**
   * recieves success message and dispatches actions
   * @param {any} message
   */
  receiveSuccess(message) {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.RECEIVE_SUCCESS,
      message,
    });
  },
    /**
   * recieves success message and dispatches actions
   * @param {any} message
   */
  receiveLoginSuccess(message) {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.RECEIVE_LOGIN_SUCCESS,
      message,
    });
  },
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
   * add users to group and dispatches an action
   * @param {any} user
   */
  addUserToGroup(user) {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.ADDUSER_GROUP,
      user,

    });
  },
/**
  * add message and dispatches an action
  * @param {any} message
  */
  addMessage(message) {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.ADD_MESSAGE,
      message,
    });
  },

  /**
   * resetpassword and dispatches an action
   * @param {any} email
   */
  resetPassword(email) {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.RESET_PASSWORD,
      email,
    });
  },

  /**
   * signout user and dispatches an action
   *
   */
  signOutUser() {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.SIGNOUT_USER,
    });
  },
    /**
   * recieve messages and dispatches action
   * @param {any} messages
   */
  getUserMessages(messages) {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.GET_USER_MESSAGES,
      messages,
    });
  },


  /**
   * recieves user groups and dispatches action
   * @param {any} groups
   */
  receiveUserGroups(groups) {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.RECEIVE_USER_GROUPS,
      groups,

    });
  },

  /**
   * recieves users and dispatches an action
   *
   * @param {any} users
   */
  receiveUsers(users) {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.RECEIVE_USERS,
      users,

    });
  },

  /**
   * recieve authenticated users and dispatches an action
   *
   * @param {any} user
   */
  receiveAuthenticatedUser(user) {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.RECEIVE_AUTHENTICATED_USER,
      user,
    });
  },

  /**
   * recieves opened group and dispatches an action
   *
   * @param {any} selectedGroup
   */
  groupOpened(selectedGroup) {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.GROUP_OPENED,
      selectedGroup,
    });
  },
  recieveUsersInGroups(group) {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.RECIEVE_USERS_IN_GROUPS,
      group,
    });
  },
};

export default PostItActions;
