
import PostItDispatcher from '../dispatcher/PostItDispatcher';
import PostItConstants from '../constants/PostItConstants';

const PostItActions = {
  /**
   * signs in user with & dispatches actions
   * @param {any} user
   */
  login(user) {
    PostItDispatcher.dispatch({
      actionType: PostItConstants.LOGIN_USER,
      user
    });
  },

/**
 * signs in user with google & dispatches actions
 * @returns {void}
 */
  googleLogin() {
    PostItDispatcher.dispatch({
      actionType: PostItConstants.GOOGLE_LOGIN
    });
  },

  /**
   * registers in user & dispatches actions
   * @param {any} user
   * @function
   */
  registerUser(user) {
    PostItDispatcher.dispatch({
      actionType: PostItConstants.REGISTER_USER,
      user
    });
  },

  /**
   * recieves error message and dispatches actions
   * @param {any} errors
   */
  receiveErrors(errors) {
    PostItDispatcher.dispatch({
      actionType: PostItConstants.RECEIVE_ERRORS,
      errors
    });
  },

  /**
   * recieves success message and dispatches actions
   * @param {any} message
   */
  receiveSuccess(message) {
    PostItDispatcher.dispatch({
      actionType: PostItConstants.RECEIVE_SUCCESS,
      message

    });
  },

  /**
   * create group and dispatches actions
   * @param {any} group
   */
  createGroup(group) {
    PostItDispatcher.dispatch({
      actionType: PostItConstants.CREATE_GROUP,
      group

    });
  },

  /**
   * add users to group and dispatches an action
   * @param {any} user
   */
  addUserToGroup(user) {
    PostItDispatcher.dispatch({
      actionType: PostItConstants.ADDUSER_GROUP,
      user

    });
  },
/**
  * add message and dispatches an action
  * @param {any} message
  */
  addMessage(message) {
    PostItDispatcher.dispatch({
      actionType: PostItConstants.ADD_MESSAGE,
      message

    });
  },

  /**
   * resetpassword and dispatches an action
   * @param {any} email
   */
  resetPassword(email) {
    PostItDispatcher.dispatch({
      actionType: PostItConstants.RESET_PASSWORD,
      email

    });
  },

  /**
   * signout user and dispatches an action
   *
   */
  signOutUser() {
    PostItDispatcher.dispatch({
      actionType: PostItConstants.SIGNOUT_USER

    });
  },

  /**
   * recieve messages and dispatches action
   * @param {any} messages
   */
  receiveMessages(messages) {
    PostItDispatcher.dispatch({
      actionType: PostItConstants.RECEIVE_MESSAGES,
      messages

    });
  },

  /**
   * recieves user groups and dispatches action
   * @param {any} groups
   */
  receiveUserGroups(groups) {
    PostItDispatcher.dispatch({
      actionType: PostItConstants.RECEIVE_USER_GROUPS,
      groups

    });
  },

  /**
   * recieves users and dispatches an action
   *
   * @param {any} users
   */
  receiveUsers(users) {
    PostItDispatcher.dispatch({
      actionType: PostItConstants.RECEIVE_USERS,
      users

    });
  },

  /**
   * recieve authenticated users and dispatches an action
   *
   * @param {any} user
   */
  receiveAuthenticatedUser(user) {
    PostItDispatcher.dispatch({
      actionType: PostItConstants.RECEIVE_AUTHENTICATED_USER,
      user

    });
  },

  /**
   * recieves opened group and dispatches an action
   *
   * @param {any} selectedGroup
   */
  groupOpened(selectedGroup) {
    PostItDispatcher.dispatch({
      actionType: PostItConstants.GROUP_OPENED,
      selectedGroup

    });
  }
};

export default PostItActions;
