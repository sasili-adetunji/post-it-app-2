import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

const AppActions = {

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
    AppDispatcher.handleViewAction({
      actionType: AppConstants.LOGIN_USER,
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
    AppDispatcher.handleViewAction({
      actionType: AppConstants.GOOGLE_LOGIN,
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
    AppDispatcher.handleViewAction({
      actionType: AppConstants.REGISTER_USER,
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
    AppDispatcher.handleViewAction({
      actionType: AppConstants.RECEIVE_ERRORS,
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
    AppDispatcher.handleViewAction({
      actionType: AppConstants.RECEIVE_SUCCESS,
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
    AppDispatcher.handleViewAction({
      actionType: AppConstants.RECEIVE_LOGIN_SUCCESS,
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
    AppDispatcher.handleViewAction({
      actionType: AppConstants.RECEIVE_READ_USERS,
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
    AppDispatcher.handleViewAction({
      actionType: AppConstants.CREATE_GROUP,
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
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ADDUSER_GROUP,
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
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ADD_MESSAGE,
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
    AppDispatcher.handleViewAction({
      actionType: AppConstants.RESET_PASSWORD,
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
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SIGNOUT_USER,
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
    AppDispatcher.handleViewAction({
      actionType: AppConstants.GET_USER_MESSAGES,
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
    AppDispatcher.handleViewAction({
      actionType: AppConstants.RECEIVE_USER_GROUPS,
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
    AppDispatcher.handleViewAction({
      actionType: AppConstants.RECEIVE_USERS,
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
    AppDispatcher.handleViewAction({
      actionType: AppConstants.GROUP_OPENED,
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
    AppDispatcher.handleViewAction({
      actionType: AppConstants.RECIEVE_USERS_IN_GROUPS,
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
    AppDispatcher.handleViewAction({
      actionType: AppConstants.RECIEVE_ADD_MEMBERS_TO_GROUP,
      user,
    });
  },

    /**
  * @description describes an action that recieve the message after
  * a group is created
  *
  * @param {Object} group group details of the group created
  *
  * @returns {Object} action type and and the group details
  */
  recieveCreateGroup(group) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.RECIEVE_CREATE_GROUP,
      group,
    });
  },

};

export default AppActions;
