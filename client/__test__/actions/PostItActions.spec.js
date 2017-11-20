import PostItDispatcher from '../../dispatcher/PostItDispatcher';
import PostItActions from '../../actions/PostItActions';
import PostItConstants from '../../constants/PostItConstants';
import PostItStore from '../../stores/PostItStore';


describe('PostIt Actions: ', () => {
  let spyOnDispatcher;

  beforeEach(() => {
    spyOnDispatcher = jest.spyOn(PostItDispatcher, 'handleViewAction');
  });

  describe('Login Action', () => {
    it('should dispatch to login after successful sign in ', () => {
      const user = {
        email: 'testemail@email.com',
        password: 'testpassword' };
      PostItActions.login(user);
      const payload = {
        actionType: PostItConstants.LOGIN_USER,
        user,
      };
      expect(spyOnDispatcher).toHaveBeenCalledWith(payload);
    });
  });
  describe('Register Action', () => {
    it('should dispatch to register', () => {
      const user = {
        email: 'testemail@email.com',
        password: 'testpassword',
        userName: 'tester',
        phoneNumber: '2348037817325',
      };
      PostItActions.registerUser(user);
      const payload = {
        actionType: PostItConstants.REGISTER_USER,
        user,
      };
      expect(spyOnDispatcher).toHaveBeenCalledWith(payload);
    });
  });
  describe('Google Action', () => {
    it('should dispatch to google login', () => {
      PostItActions.googleLogin();
      const payload = {
        actionType: PostItConstants.GOOGLE_LOGIN,
      };
      expect(spyOnDispatcher).toHaveBeenCalledWith(payload);
    });
  });
  describe('Recieve Errors actions', () => {
    it('should dispatch to recieve errors', () => {
      PostItActions.receiveErrors();
      const payload = {
        actionType: PostItConstants.RECEIVE_ERRORS,
      };
      expect(spyOnDispatcher).toHaveBeenCalledWith(payload);
    });
  });
  describe('Recieve success actions', () => {
    it('should dispatch to recieve success', () => {
      PostItActions.receiveSuccess();
      const payload = {
        actionType: PostItConstants.RECEIVE_SUCCESS,
      };
      expect(spyOnDispatcher).toHaveBeenCalledWith(payload);
    });
  });
  describe('Read users actions', () => {
    it('should dispatch to recieve read users', () => {
      const message = {
        author: 'wash',
        date: '017-09-18T17:39:27.704Z',
        messageId: '-KuL3gft2t6lpxeJDjwX',
        messageText: 'is it workin',
        priorityLevel: '',
        status: 'Read',
      };
      PostItActions.receiveReadUsers(message);
      const payload = {
        actionType: PostItConstants.RECEIVE_READ_USERS,
        message,
      };
      expect(spyOnDispatcher).toHaveBeenCalledWith(payload);
    });
  });
  describe('Create group actions', () => {
    it('should dispatch to recieve create group', () => {
      const group = {
        groupName: 'first test group',
        userName: 'tester',
      };
      PostItActions.createGroup(group);
      const payload = {
        actionType: PostItConstants.CREATE_GROUP,
        group,
      };
      expect(spyOnDispatcher).toHaveBeenCalledWith(payload);
    });
  });
  describe('Add user to group actions', () => {
    it('should dispatch to create group', () => {
      const user = {
        userId: 'K39DAS8220Hffu76393',
      };
      PostItActions.addUserToGroup(user);
      const payload = {
        actionType: PostItConstants.ADDUSER_GROUP,
        user,
      };
      expect(spyOnDispatcher).toHaveBeenCalledWith(payload);
    });
  });
  describe('Add message actions', () => {
    it('should dispatch to post message', () => {
      const message = {
        groupId: 'KD884D24bkslutx630Cv0',
        author: 'wash',
        date: '017-09-18T17:39:27.704Z',
        messageId: '-KuL3gft2t6lpxeJDjwX',
        messageText: 'is it workin',
        priorityLevel: '',
        status: 'Read',
      };
      PostItActions.addMessage(message);
      const payload = {
        actionType: PostItConstants.ADD_MESSAGE,
        message,
      };
      expect(spyOnDispatcher).toHaveBeenCalledWith(payload);
    });
  });
  describe('Reset password actions', () => {
    const email = {
      email: 'sasil@gmail.com',
    };
    it('should dispatch to reset password', () => {
      PostItActions.resetPassword(email);
      const payload = {
        actionType: PostItConstants.RESET_PASSWORD,
        email,
      };
      expect(spyOnDispatcher).toHaveBeenCalledWith(payload);
    });
  });
  describe('Sign out actions', () => {
    it('should dispatch to sign out', () => {
      PostItActions.signOutUser();
      const payload = {
        actionType: PostItConstants.SIGNOUT_USER,
      };
      expect(spyOnDispatcher).toHaveBeenCalledWith(payload);
    });
  });
  describe('Recieve user groups actions', () => {
    it('should dispatch to recieve users groups', () => {
      const spyOnStore = jest.spyOn(PostItStore, 'setUserGroups');
      PostItActions.receiveUserGroups();
      const payload = {
        actionType: PostItConstants.RECEIVE_USER_GROUPS,
      };
      expect(spyOnDispatcher).toHaveBeenCalledWith(payload);
      expect(spyOnStore).toHaveBeenCalled();
    });
  });
  describe('Recieve users actions', () => {
    it('should dispatch to recieve users', () => {
      const spyOnStore = jest.spyOn(PostItStore, 'setUsers');
      PostItActions.receiveUsers();
      const payload = {
        actionType: PostItConstants.RECEIVE_USERS,
      };
      expect(spyOnDispatcher).toHaveBeenCalledWith(payload);
      expect(spyOnStore).toHaveBeenCalled();
    });
  });
  describe('Recieve authenticated users actions', () => {
    it('should dispatch to recieve authenticated users', () => {
      PostItActions.receiveAuthenticatedUser();
      const payload = {
        actionType: PostItConstants.RECEIVE_AUTHENTICATED_USER,
      };
      expect(spyOnDispatcher).toHaveBeenCalledWith(payload);
    });
  });
  describe('Group opened actions', () => {
    it('should dispatch to group opened', () => {
      PostItActions.groupOpened();
      const payload = {
        actionType: PostItConstants.GROUP_OPENED,
      };
      expect(spyOnDispatcher).toHaveBeenCalledWith(payload);
    });
  });
  describe('Recieve users in groups actions', () => {
    it('should dispatch to recieve users in groups', () => {
      const group = {
        groupId: 'LDKLDHO837SLK9089',
      };
      PostItActions.recieveUsersInGroups(group);
      const payload = {
        actionType: PostItConstants.RECIEVE_USERS_IN_GROUPS,
        group
      };
      expect(spyOnDispatcher).toHaveBeenCalledWith(payload);
    });
  });
  describe('Recieve login sucecess actions', () => {
    it('should dispatch to login success', () => {
      const token = 'JF;JHUILOFSJFDLHGLIO84';
      const spyOnStore = jest.spyOn(PostItStore, 'setIsAuthenticated');
      PostItActions.receiveLoginSuccess(token);
      const payload = {
        actionType: PostItConstants.RECEIVE_LOGIN_SUCCESS,
        token,
      };
      expect(spyOnDispatcher).toHaveBeenCalledWith(payload);
      expect(spyOnStore).toHaveBeenCalledWith(true);
    });
  });
  describe('Recieve get user messages actions', () => {
    it('should dispatch to get user messages', () => {
      const messages = {
        groupId: '-KwkoJ66ItRxv_UFr5xX',
        groupName: 'diggy',
      };
      PostItActions.getUserMessages(messages);
      const payload = {
        actionType: PostItConstants.GET_USER_MESSAGES,
        messages,
      };
      expect(spyOnDispatcher).toHaveBeenCalled();
    });
  });
  describe('Recieve get user messages actions', () => {
    it('should dispatch to get user messages', () => {
      const message = {
        userId: '-KwkoJ66ItRxv_UFr5xX',
        UserName: 'diggy',
      };
      PostItActions.recieveAddMembersToGroups(message);
      const payload = {
        actionType: PostItConstants.RECIEVE_ADD_MEMBERS_TO_GROUP,
        message,
      };
      expect(spyOnDispatcher).toHaveBeenCalled();
    });
  });
  describe('Recieve get user messages actions', () => {
    it('should dispatch to get user messages', () => {
      const group = {
        groupId: '-KwkoJ66ItRxv_UFr5xX',
        groupName: 'diggy',
      };
      PostItActions.recieveCreateGroups(group);
      const payload = {
        actionType: PostItConstants.RECIEVE_ADD_MEMBERS_TO_GROUP,
        group,
      };
      expect(spyOnDispatcher).toHaveBeenCalled();
    });
  });
});
