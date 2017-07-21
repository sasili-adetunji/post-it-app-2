
import PostItDispatcher from '../dispatcher/PostItDispatcher';
import PostItConstants from '../constants/PostItConstants';

const PostItActions = {
  login(user) {
     console.log('Logging user....');
    PostItDispatcher.dispatch({
      actionType: PostItConstants.LOGIN_USER,
      user

    });
      console.log('dispatcher signin....');

  },
  googleLogin() {
     console.log('Google user....');
    PostItDispatcher.dispatch({
      actionType: PostItConstants.GOOGLE_LOGIN
      

    });
      console.log('dispatcher signin....');

  },

  registerUser(user) {
     console.log('Reg user....', user);
    PostItDispatcher.dispatch({
      actionType: PostItConstants.REGISTER_USER,
      user
    });
    console.log('dispatcher resgister....', user);
  },

  receiveErrors(errors) {
    PostItDispatcher.dispatch({
      actionType: PostItConstants.RECEIVE_ERRORS,
      errors
    });
  },
  receiveSuccess(message) {
    PostItDispatcher.dispatch({
      actionType: PostItConstants.RECEIVE_SUCCESS,
      message

    });
  },

  createGroup(group) {
    PostItDispatcher.dispatch({
      actionType: PostItConstants.CREATE_GROUP,
      group

    });
  },

  addUserToGroup(user) {
      console.log(user);

    PostItDispatcher.dispatch({
      actionType: PostItConstants.ADDUSER_GROUP,
      user

    });
  },

  addMessage(message) {
    // console.log(message);
    PostItDispatcher.dispatch({
      actionType: PostItConstants.ADD_MESSAGE,
      message

    });
        console.log(message);

  },
resetPassword(email) {
    // console.log(email);
    PostItDispatcher.dispatch({
      actionType: PostItConstants.RESET_PASSWORD,
      email

    });
        console.log(email);

  },

signOutUser() {
    PostItDispatcher.dispatch({
      actionType: PostItConstants.SIGNOUT_USER

    });
  },
  receiveMessages(messages) {
    PostItDispatcher.dispatch({
      actionType: PostItConstants.RECEIVE_MESSAGES,
      messages

    });
  },

  receiveUserGroups(groups) {
    PostItDispatcher.dispatch({
      actionType: PostItConstants.RECEIVE_USER_GROUPS,
      groups

    });
  },
receiveUsers(users) {
    PostItDispatcher.dispatch({
      actionType: PostItConstants.RECEIVE_USERS,
      users

    });
  },
  receiveAuthenticatedUser(user) {
    PostItDispatcher.dispatch({
      actionType: PostItConstants.RECEIVE_AUTHENTICATED_USER,
      user

    });
  },

  groupOpened(selectedGroup) {
        console.log('group opened',selectedGroup);

    PostItDispatcher.dispatch({
      actionType: PostItConstants.GROUP_OPENED,
      selectedGroup

    });

  }
}

export default PostItActions;
