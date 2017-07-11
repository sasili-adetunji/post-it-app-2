
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

  signOutUser() {
    PostItDispatcher.dispatch({
      actionType: PostItConstants.SIGNOUT_USER

    });
  },
  receiveUserMessages(messages) {
    PostItDispatcher.dispatch({
      actionType: PostItConstants.RECEIVE_USER_MESSAGES,
      messages

    });
  },

  receiveUserGroups(groups) {
    PostItDispatcher.dispatch({
      actionType: PostItConstants.RECEIVE_USER_GROUPS,
      groups

    });
  },

  receiveAuthenticatedUser(user) {
    PostItDispatcher.dispatch({
      actionType: PostItConstants.RECEIVE_AUTHENTICATED_USER,
      user

    });
  },

  groupOpened(selectedGroup) {
    PostItDispatcher.dispatch({
      actionType: PostItConstants.GROUP_OPENED,
      selectedGroup

    });
  }
}

export default PostItActions;
