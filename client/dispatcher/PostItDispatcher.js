
import { Dispatcher } from 'flux';
import PostItStore from '../stores/PostItStore'
import assign from 'object-assign';
import PostItConstants from '../constants/PostItConstants';
import API from '../Api';



const PostItDispatcher = new Dispatcher()

PostItDispatcher.register((action) => {

  switch (action.actionType) {
  case PostItConstants.REGISTER_USER:
    
  	 console.log('Registering user...');
    API.registerNewUser(action.user)
    PostItStore.registerNewUser(action.user);
         console.log('storing user...');
    PostItStore.emitChange();
    break;

  case PostItConstants.LOGIN_USER:

     console.log('logging in user...');

    API.signinUser(action.user);
    PostItStore.signinUser(action.user);

    PostItStore.emitChange();
    break;

  case PostItConstants.CREATE_GROUP:
    console.log('create user group');

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
   
    console.log('add user group');
    API.addUserToGroup(action.user);

    PostItStore.addUserToGroup(action.user);

    PostItStore.emitChange();
    break;

  case PostItConstants.ADD_MESSAGE:
    console.log('add message');

    API.postMessage(action.message);

    PostItStore.postMessage(action.message);
      console.log('storing message...');

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

  case PostItConstants.RECEIVE_USER_GROUPS:

    PostItStore.setUserGroups(action.groups);

    PostItStore.emitChange();
    break;
  case PostItConstants.RECEIVE_USERS:

      console.log('storing users...');

    PostItStore.setUsers(action.users);

    PostItStore.emitChange();
    break;
  case PostItConstants.RESET_PASSWORD:

    API.resetPassword(action.email);

    PostItStore.emitChange();
    break;

  case PostItConstants.RECEIVE_AUTHENTICATED_USER:

    PostItStore.signinUser(action.user);
    PostItStore.registerNewUser(action.user)
    PostItStore.setIsAuthenticated(true);
    PostItStore.emitChange();
    break;

  case PostItConstants.SELECT_GROUP:
  
    PostItStore.setOpenedGroup(action.selectedGroup);

    PostItStore.emitChange();
    break;
  case PostItConstants.GROUP_OPENED:
  
    PostItStore.getOpenedGroup(action.selectedGroup);

    PostItStore.emitChange();
    break;

  case PostItConstants.RECEIVE_SUCCESS:
    PostItStore.receiveSuccess(action.message);

    PostItStore.emitChange()
    break;

  case PostItConstants.RECEIVE_ERRORS:
  
    PostItStore.receiveErrors(action.errors);

    PostItStore.emitChange();


  default:

  }

  return true;
})


export default PostItDispatcher;
