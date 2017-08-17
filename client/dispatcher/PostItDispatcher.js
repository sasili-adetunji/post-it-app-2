import { Dispatcher } from 'flux';
import PostItStore from '../stores/PostItStore';
import PostItConstants from '../constants/PostItConstants';
import API from '../Api';


const PostItDispatcher = new Dispatcher();

PostItDispatcher.register((action) => {
  switch (action.actionType) {
    case PostItConstants.REGISTER_USER:
      API.registerNewUser(action.user);
      PostItStore.emitChange();
      break;

    case PostItConstants.LOGIN_USER:
      API.signinUser(action.user);
      PostItStore.emitChange();
      break;

    case PostItConstants.CREATE_GROUP:
      API.createNewGroup(action.group);
      PostItStore.createNewGroup(action.group);
      PostItStore.emitChange();
      break;

    case PostItConstants.GOOGLE_LOGIN:
      API.googleLogin();
      PostItStore.signinUser(action.token);
      PostItStore.emitChange();
      break;

    case PostItConstants.ADDUSER_GROUP:
      API.addUserToGroup(action.user);
      PostItStore.addUserToGroup(action.user);
      PostItStore.emitChange();
      break;

    case PostItConstants.ADD_MESSAGE:
      API.postMessage(action.message);
      PostItStore.postMessage(action.message);
      PostItStore.emitChange();
      break;

    case PostItConstants.SIGNOUT_USER:
      API.signoutUser();
      PostItStore.signOutUser();
      PostItStore.emitChange();
      break;

    case PostItConstants.RECEIVE_MESSAGES:
      PostItStore.setMessages(action.messages);
      PostItStore.emitChange();
      break;
    case PostItConstants.RECEIVE_USERS_IN_GROUPS:
      PostItStore.setUsersInGroup(action.groups);
      PostItStore.emitChange();
      break;

    case PostItConstants.RECEIVE_USER_GROUPS:
      PostItStore.setUserGroups(action.groups);
      PostItStore.emitChange();
      break;

    case PostItConstants.RECEIVE_USERS:
      PostItStore.setUsers(action.users);
      PostItStore.emitChange();
      break;

    case PostItConstants.RESET_PASSWORD:
      API.resetPassword(action.email);
      PostItStore.emitChange();
      break;

    case PostItConstants.RECEIVE_AUTHENTICATED_USER:
      PostItStore.setIsAuthenticated(true);
      PostItStore.emitChange();
      break;

    case PostItConstants.GROUP_OPENED:
      PostItStore.setOpenedGroup(action.selectedGroup);
      PostItStore.emitChange();
      break;

    case PostItConstants.RECEIVE_SUCCESS:
      PostItStore.receiveSuccess(action.message);
      PostItStore.emitChange();
      break;

    case PostItConstants.RECEIVE_ERRORS:
      PostItStore.receiveErrors(action.errors);
      PostItStore.emitChange();
      break;

    default:
  }
  return true;
});


export default PostItDispatcher;
