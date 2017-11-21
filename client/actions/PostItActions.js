import PostItDispatcher from '../dispatcher/PostItDispatcher';
import PostItConstants from '../constants/PostItConstants';

const PostItActions = {

/**
 * @description describes an action that informs
 * store to log in  user
 *
 * @param {Object} user an object that contains the
 * password, email of the user
 *
 * @returns {object} the action type and user details
 */
  login(user) {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.LOGIN_USER,
      user,
    });
  },


 /**
 * @description describes an action that informs
 * store to log in user with google
 *
 * @param {Object} idToken an object that contains the idToken
 * after signinginwithPopup from the client
 *
 * @returns {object} action type and the idToken
 */
  googleLogin(idToken) {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.GOOGLE_LOGIN,
      idToken,
    });
  },


/**
 * @description describes an action that informs
 * store to register a new  user
 *
 * @param {Object} user an object that contains the
 * password, email, phone number and username of the user
 *
 * @returns {object} the action type and user details of the user
 */
  registerUser(user) {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.REGISTER_USER,
      user,
    });
  },


  /**
 * @description describes an action that recieves error messages and
 * informs the store
 *
 * @param {Object} errors an object that contains the errror message
 *
 * @returns {object} the action type and error message
 */
  receiveErrors(errors) {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.RECEIVE_ERRORS,
      errors,
    });
  },


  /**
 * @description describes an action that recieves success messages and
 * informs the store
 *
 * @param {Object} message an object that contains the success message
 *
 * @returns {object} the action type and succes message
 */
  receiveSuccess(message) {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.RECEIVE_SUCCESS,
      message,
    });
  },


 /**
 * @description describes an action that recieves response from a login and
 * informs the store
 *
 * @param {String} token authentication token
 *
 * @returns {object} the action type and idToken
 */
  receiveLoginSuccess(token) {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.RECEIVE_LOGIN_SUCCESS,
      token,
    });
  },

 /**
 * @description describes an action that make an
 * get request of users that have read a  particular message
 *
 * @param {object} message an object containing the message details of the
 * particular message
 *
 * @returns {object} the action type and read users of the message
 */
  receiveReadUsers(message) {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.RECEIVE_READ_USERS,
      message,
    });
  },


/**
  * @description describes an action that informs
 * store to to create a group
 *
 * @param {object} group an object containing the group details to be created
 *
 * @returns {object} the action type and group details
 */
  createGroup(group) {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.CREATE_GROUP,
      group,
    });
  },


/**
 * @description describes an action that infom store to add
 * add member to a group
 *
 * @param {object} user an object containing the user details to be added
 *
 * @returns {object} the action type and user details
 */
  addUserToGroup(user) {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.ADDUSER_GROUP,
      user,
    });
  },


/**
 * @description describes an action that infom store to
 * post a message to a group
 *
 * @param {object} message an object containing the message details to be posted
 *
 * @returns {object} the action type and message details
 */
  addMessage(message) {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.ADD_MESSAGE,
      message,
    });
  },


/**
 * @description describes an action that infom store to reset password
 *
 * @param {object} email an object containing the user details to be added
 *
 * @returns {object} the action type and email
 */
  resetPassword(email) {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.RESET_PASSWORD,
      email,
    });
  },


/**
 * @description describes an action that infom store to
 * signout a user
 *
 * @returns {object} the action type
 */
  signOutUser() {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.SIGNOUT_USER,
    });
  },


/**
 * @description describes an action that infom store to get messages from
 * a group
 *
 * @param {object} groups an object containing the group details to
 * to get messages from
 *
 * @returns {object} the action type and group details
 */
  getUserMessages(groups) {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.GET_USER_MESSAGES,
      groups,
    });
  },


/**
 * @description describes an action that recieves user groups
 *
 * @param {object} groups an object containing the group details
 *
 * @returns {object} the action type and group details
 */
  receiveUserGroups(groups) {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.RECEIVE_USER_GROUPS,
      groups,
    });
  },


/**
 * @description describes an action that recieve all the users in the app
 *
 * @param {object} users an object containing the users details
 *
 * @returns {object} the action type and users details
 */
  receiveUsers(users) {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.RECEIVE_USERS,
      users,
    });
  },


/**
  * @description describes an action that recieve the selected group
  *
  * @param {Object} selectedGroup details of the selected group
  *
  * @returns {Object} action type and selctedGroup details
  */
  groupOpened(selectedGroup) {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.GROUP_OPENED,
      selectedGroup,
    });
  },


/**
  * @description describes an action that recieve all the users in
  * a group
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


  /**
  * @description describes an action that recieve the message after
  * adding a  member to the app
  *
  * @param {Object} user user details of the added member
  *
  * @returns {Object} action type and and the user details
  */
  recieveAddMembersToGroups(user) {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.RECIEVE_ADD_MEMBERS_TO_GROUP,
      user,
    });
  },


  /**
 * @description describes an action that informs
 * store to search for a user
  *
  * @param {object} keyword keyword for the searched users
  *
  * @returns {Object} action type and the keyword
  */
  searchUsers(keyword) {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.SEARCH_USERS,
      keyword,
    });
  },


/**
  * @description recieves clear search users and dispatches in the store
  *
  * @returns {Object} action type
*/
  clearSearch() {
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.CLEAR_SEARCH,
    });
  },
};

export default PostItActions;
