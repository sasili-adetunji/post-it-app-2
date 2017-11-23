import AppDispatcher from '../../dispatcher/AppDispatcher';
import AppActions from '../../actions/AppActions';
import AppConstants from '../../constants/AppConstants';
import mockData from '../seeders/mockData';


describe('PostIt Actions: ', () => {
  let spyOnDispatcher;

  beforeEach(() => {
    spyOnDispatcher = jest.spyOn(AppDispatcher, 'handleViewAction');
  });

  describe('Login Action', () => {
    it('should dispatch a view action of type LOGIN_USER', () => {
      AppActions.login(mockData.loginUser);
      expect(spyOnDispatcher).toHaveBeenCalledWith({
        actionType: AppConstants.LOGIN_USER,
        user: {
          email: 'testemail@email.com',
          password: 'testpassword',
        }
      });
    });
  });

  describe('Register Action', () => {
    it('should dispatch a view action of type REGISTER_USER', () => {
      AppActions.registerUser(mockData.registerUser);
      expect(spyOnDispatcher).toHaveBeenCalledWith({
        actionType: AppConstants.REGISTER_USER,
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
      AppActions.googleLogin(mockData.googleUser);
      expect(spyOnDispatcher).toHaveBeenCalledWith({
        actionType: AppConstants.GOOGLE_LOGIN,
        idToken: {
          idToken: 'WL78348347KFHWLJKPUR34'
        }
      });
    });
  });

  describe('Recieve Errors actions', () => {
    it('should dispatch a view action of type RECEIVE_ERRORS', () => {
      AppActions.receiveErrors(mockData.errorMessage);
      expect(spyOnDispatcher).toHaveBeenCalledWith({
        actionType: AppConstants.RECEIVE_ERRORS,
        errors: {
          message: 'There is an error'
        }
      });
    });
  });

  describe('Recieve success actions', () => {
    it('should dispatch a view action of type RECEIVE_SUCCESS', () => {
      AppActions.receiveSuccess(mockData.successMessage);
      expect(spyOnDispatcher).toHaveBeenCalledWith({
        actionType: AppConstants.RECEIVE_SUCCESS,
        message: {
          message: 'Success! '
        }
      });
    });
  });

  describe('Read users actions', () => {
    it('should dispatch a view action of type RECEIVE_READ_USERS', () => {
      AppActions.receiveReadUsers(mockData.readMessage);
      expect(spyOnDispatcher).toHaveBeenCalledWith({
        actionType: AppConstants.RECEIVE_READ_USERS,
        message: {
          messageId: '-KuL3gft2t6lpxeJDjwX',
        }
      });
    });
  });

  describe('Create group actions', () => {
    it('should dispatch a view action of type CREATE_GROUP', () => {
      AppActions.createGroup(mockData.groupCreate);
      expect(spyOnDispatcher).toHaveBeenCalledWith({
        actionType: AppConstants.CREATE_GROUP,
        group: {
          groupName: 'first test group',
          groupId: 'KHJVKLFGUIRHLEGUL8',
        }
      });
    });
  });

  describe('Add user to group actions', () => {
    it('should dispatch a view action of type ADDUSER_GROUP', () => {
      AppActions.addUserToGroup(mockData.addUser);
      expect(spyOnDispatcher).toHaveBeenCalledWith({
        actionType: AppConstants.ADDUSER_GROUP,
        user: {
          userName: 'Eloka',
          userId: 'K39DAS8220Hffu76393',
        }
      });
    });
  });

  describe('Add message actions', () => {
    it('should dispatch a view action of type ADD_MESSAGE', () => {
      AppActions.addMessage(mockData.postMessage);
      expect(spyOnDispatcher).toHaveBeenCalledWith({
        actionType: AppConstants.ADD_MESSAGE,
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
      AppActions.resetPassword(mockData.resetEmail);
      expect(spyOnDispatcher).toHaveBeenCalledWith({
        actionType: AppConstants.RESET_PASSWORD,
        email: {
          email: 'sas@gmail.com'
        }
      });
    });
  });

  describe('Sign out actions', () => {
    it('should dispatch a view action of type SIGNOUT_USER', () => {
      AppActions.signOutUser();
      expect(spyOnDispatcher).toHaveBeenCalledWith({
        actionType: AppConstants.SIGNOUT_USER,
      });
    });
  });

  describe('Recieve user groups actions', () => {
    it('should dispatch a view action of type RECEIVE_USER_GROUPS', () => {
      AppActions.receiveUserGroups();
      expect(spyOnDispatcher).toHaveBeenCalledWith({
        actionType: AppConstants.RECEIVE_USER_GROUPS,
      });
    });
  });

  describe('Recieve users actions', () => {
    it('should dispatch a view action of type RECEIVE_USERS', () => {
      AppActions.receiveUsers();
      expect(spyOnDispatcher).toHaveBeenCalledWith({
        actionType: AppConstants.RECEIVE_USERS,
      });
    });
  });

  describe('Group opened actions', () => {
    it('should dispatch a view action of type GROUP_OPENED', () => {
      AppActions.groupOpened();
      expect(spyOnDispatcher).toHaveBeenCalledWith({
        actionType: AppConstants.GROUP_OPENED,
      });
    });
  });

  describe('Recieve users in groups actions', () => {
    it('should dispatch a view action of type RECIEVE_USERS_IN_GROUPS', () => {
      AppActions.recieveUsersInGroups(mockData.recieveUsersInGroup);
      expect(spyOnDispatcher).toHaveBeenCalledWith({
        actionType: AppConstants.RECIEVE_USERS_IN_GROUPS,
        group: {
          groupId: 'LDKLDHO837SLK9089'
        }
      });
    });
  });

  describe('Recieve login sucecess actions', () => {
    it('should dispatch a view action of type RECEIVE_LOGIN_SUCCESS', () => {
      const token = 'JFJHUILOFSJFDLHGLIO84';
      AppActions.receiveLoginSuccess(token);
      expect(spyOnDispatcher).toHaveBeenCalledWith({
        actionType: AppConstants.RECEIVE_LOGIN_SUCCESS,
        token: 'JFJHUILOFSJFDLHGLIO84'
      });
    });
  });
});
