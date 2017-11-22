import PostItDispatcher from '../../dispatcher/PostItDispatcher';
import PostItActions from '../../actions/PostItActions';
import PostItConstants from '../../constants/PostItConstants';
import mockData from '../seeders/mockData';


describe('PostIt Actions: ', () => {
  let spyOnDispatcher;

  beforeEach(() => {
    spyOnDispatcher = jest.spyOn(PostItDispatcher, 'handleViewAction');
  });

  describe('Login Action', () => {
    it('should dispatch a view action of type LOGIN_USER', () => {
      PostItActions.login(mockData.loginUser);
      expect(spyOnDispatcher).toHaveBeenCalledWith({
        actionType: PostItConstants.LOGIN_USER,
        user: {
          email: 'testemail@email.com',
          password: 'testpassword',
        }
      });
    });
  });

  describe('Register Action', () => {
    it('should dispatch a view action of type REGISTER_USER', () => {
      PostItActions.registerUser(mockData.regiserUser);
      expect(spyOnDispatcher).toHaveBeenCalledWith({
        actionType: PostItConstants.REGISTER_USER,
        user: {
          email: 'testemail@email.com',
          password: 'testpassword',
          phoneNumber: '2348037821732',
          userName: 'sas'
        }
      });
    });
  });

  describe('Google Action', () => {
    it('should dispatch a view action of type GOOGLE_LOGIN', () => {
      PostItActions.googleLogin(mockData.googleUser);
      expect(spyOnDispatcher).toHaveBeenCalledWith({
        actionType: PostItConstants.GOOGLE_LOGIN,
        idToken: {
          idToken: 'WL78348347KFHWLJKPUR34'
        }
      });
    });
  });

  describe('Recieve Errors actions', () => {
    it('should dispatch a view action of type RECEIVE_ERRORS', () => {
      PostItActions.receiveErrors(mockData.errorMessage);
      expect(spyOnDispatcher).toHaveBeenCalledWith({
        actionType: PostItConstants.RECEIVE_ERRORS,
        errors: {
          message: 'There is an error'
        }
      });
    });
  });

  describe('Recieve success actions', () => {
    it('should dispatch a view action of type RECEIVE_SUCCESS', () => {
      PostItActions.receiveSuccess(mockData.successMessage);
      expect(spyOnDispatcher).toHaveBeenCalledWith({
        actionType: PostItConstants.RECEIVE_SUCCESS,
        message: {
          message: 'Success! '
        }
      });
    });
  });

  describe('Read users actions', () => {
    it('should dispatch a view action of type RECEIVE_READ_USERS', () => {
      PostItActions.receiveReadUsers(mockData.readMessage);
      expect(spyOnDispatcher).toHaveBeenCalledWith({
        actionType: PostItConstants.RECEIVE_READ_USERS,
        message: {
          messageId: '-KuL3gft2t6lpxeJDjwX',
        }
      });
    });
  });

  describe('Create group actions', () => {
    it('should dispatch a view action of type CREATE_GROUP', () => {
      PostItActions.createGroup(mockData.groupCreate);
      expect(spyOnDispatcher).toHaveBeenCalledWith({
        actionType: PostItConstants.CREATE_GROUP,
        group: {
          groupName: 'first test group',
          groupId: 'KHJVKLFGUIRHLEGUL8',
        }
      });
    });
  });

  describe('Add user to group actions', () => {
    it('should dispatch a view action of type ADDUSER_GROUP', () => {
      PostItActions.addUserToGroup(mockData.addUser);
      expect(spyOnDispatcher).toHaveBeenCalledWith({
        actionType: PostItConstants.ADDUSER_GROUP,
        user: {
          userName: 'Eloka',
          userId: 'K39DAS8220Hffu76393',
        }
      });
    });
  });

  describe('Add message actions', () => {
    it('should dispatch a view action of type ADD_MESSAGE', () => {
      PostItActions.addMessage(mockData.postMessage);
      expect(spyOnDispatcher).toHaveBeenCalledWith({
        actionType: PostItConstants.ADD_MESSAGE,
        message: {
          groupId: 'KD884D24bkslutx630Cv0',
          author: 'wash',
          date: '017-09-18T17:39:27.704Z',
          messageId: '-KuL3gft2t6lpxeJDjwX',
          messageText: 'is it workin',
          priorityLevel: '',
          status: 'Read',
        }
      });
    });
  });

  describe('Reset password actions', () => {
    it('should dispatch a view action of type RESET_PASSWORD', () => {
      PostItActions.resetPassword(mockData.resetEmail);
      expect(spyOnDispatcher).toHaveBeenCalledWith({
        actionType: PostItConstants.RESET_PASSWORD,
        email: {
          email: 'sas@gmail.com'
        }
      });
    });
  });

  describe('Sign out actions', () => {
    it('should dispatch a view action of type SIGNOUT_USER', () => {
      PostItActions.signOutUser();
      expect(spyOnDispatcher).toHaveBeenCalledWith({
        actionType: PostItConstants.SIGNOUT_USER,
      });
    });
  });

  describe('Recieve user groups actions', () => {
    it('should dispatch a view action of type RECEIVE_USER_GROUPS', () => {
      PostItActions.receiveUserGroups();
      expect(spyOnDispatcher).toHaveBeenCalledWith({
        actionType: PostItConstants.RECEIVE_USER_GROUPS,
      });
    });
  });

  describe('Recieve users actions', () => {
    it('should dispatch a view action of type RECEIVE_USERS', () => {
      PostItActions.receiveUsers();
      expect(spyOnDispatcher).toHaveBeenCalledWith({
        actionType: PostItConstants.RECEIVE_USERS,
      });
    });
  });

  describe('Group opened actions', () => {
    it('should dispatch a view action of type GROUP_OPENED', () => {
      PostItActions.groupOpened();
      expect(spyOnDispatcher).toHaveBeenCalledWith({
        actionType: PostItConstants.GROUP_OPENED,
      });
    });
  });

  describe('Recieve users in groups actions', () => {
    it('should dispatch a view action of type RECIEVE_USERS_IN_GROUPS', () => {
      PostItActions.recieveUsersInGroups(mockData.recieveUsersInGroup);
      expect(spyOnDispatcher).toHaveBeenCalledWith({
        actionType: PostItConstants.RECIEVE_USERS_IN_GROUPS,
        group: {
          groupId: 'LDKLDHO837SLK9089'
        }
      });
    });
  });

  describe('Recieve login sucecess actions', () => {
    it('should dispatch a view action of type RECEIVE_LOGIN_SUCCESS', () => {
      const token = 'JFJHUILOFSJFDLHGLIO84';
      PostItActions.receiveLoginSuccess(token);
      expect(spyOnDispatcher).toHaveBeenCalledWith({
        actionType: PostItConstants.RECEIVE_LOGIN_SUCCESS,
        token: 'JFJHUILOFSJFDLHGLIO84'
      });
    });
  });
});
