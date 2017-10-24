import PostItDispatcher from '../../dispatcher/PostItDispatcher';
import PostItActions from '../../actions/PostItActions';
import PostItConstants from '../../constants/PostItConstants';


describe('PostIt Actions: ', () => {
  let spyOnDispatcher;
  beforeEach(() => {
    spyOnDispatcher = jest.spyOn(PostItDispatcher, 'dispatch');
  });
  afterEach(() => {
    spyOnDispatcher.mockReset();
  });

  describe('Login Action', () => {
    it('should dispatch to login after successful sign in ', () => {
      const user = {
        email: 'testemail@email.com',
        password: 'testpassword' };
      PostItActions.login(user);
      expect(spyOnDispatcher).toHaveBeenCalledWith({
        actionType: PostItConstants.LOGIN_USER,
        user,
      });
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
      expect(spyOnDispatcher).toHaveBeenCalledWith({
        actionType: PostItConstants.REGISTER_USER,
        user,
      });
    });
  });
  describe('Google Action', () => {
    it('should dispatch to google login', () => {
      PostItActions.googleLogin();
      expect(spyOnDispatcher).toHaveBeenCalledWith({
        actionType: PostItConstants.GOOGLE_LOGIN,
      });
    });
  });
  describe('Recieve Errors actions', () => {
    it('should dispatch to recieve errors', () => {
      PostItActions.receiveErrors();
      expect(spyOnDispatcher).toHaveBeenCalledWith({
        actionType: PostItConstants.RECEIVE_ERRORS,
      });
    });
  });
  describe('Recieve success actions', () => {
    it('should dispatch to recieve success', () => {
      PostItActions.receiveSuccess();
      expect(spyOnDispatcher).toHaveBeenCalledWith({
        actionType: PostItConstants.RECEIVE_SUCCESS,
      });
    });
  });
  describe('Read users actions', () => {
    it('should dispatch to recieve read users', () => {
      PostItActions.receiveReadUsers();
      expect(spyOnDispatcher).toHaveBeenCalledWith({
        actionType: PostItConstants.RECEIVE_READ_USERS,
      });
    });
  });
  describe('Create group actions', () => {
    it('should dispatch to recieve create group', () => {
      PostItActions.createGroup();
      expect(spyOnDispatcher).toHaveBeenCalledWith({
        actionType: PostItConstants.CREATE_GROUP,
      });
    });
  });
  describe('Add user to group actions', () => {
    it('should dispatch to create group', () => {
      PostItActions.addUserToGroup();
      expect(spyOnDispatcher).toHaveBeenCalledWith({
        actionType: PostItConstants.ADDUSER_GROUP,
      });
    });
  });
  describe('Add message actions', () => {
    it('should dispatch to post message', () => {
      PostItActions.addMessage();
      expect(spyOnDispatcher).toHaveBeenCalledWith({
        actionType: PostItConstants.ADD_MESSAGE,
      });
    });
  });
  describe('Reset password actions', () => {
    it('should dispatch to reset password', () => {
      PostItActions.resetPassword();
      expect(spyOnDispatcher).toHaveBeenCalledWith({
        actionType: PostItConstants.RESET_PASSWORD,
      });
    });
  });
  describe('Sign out actions', () => {
    it('should dispatch to sign out', () => {
      PostItActions.signOutUser();
      expect(spyOnDispatcher).toHaveBeenCalledWith({
        actionType: PostItConstants.SIGNOUT_USER,
      });
    });
  });
  describe('recieve message actions', () => {
    it('should dispatch to recieve message', () => {
      PostItActions.receiveMessages();
      expect(spyOnDispatcher).toHaveBeenCalledWith({
        actionType: PostItConstants.RECEIVE_MESSAGES,
      });
    });
  });
  describe('Recieve user groups actions', () => {
    it('should dispatch to recieve users groups', () => {
      PostItActions.receiveUserGroups();
      expect(spyOnDispatcher).toHaveBeenCalledWith({
        actionType: PostItConstants.RECEIVE_USER_GROUPS,
      });
    });
  });
  describe('Recieve users actions', () => {
    it('should dispatch to recieve users', () => {
      PostItActions.receiveUsers();
      expect(spyOnDispatcher).toHaveBeenCalledWith({
        actionType: PostItConstants.RECEIVE_USERS,
      });
    });
  });
  describe('Recieve authenticated users actions', () => {
    it('should dispatch to recieve authenticated users', () => {
      PostItActions.receiveAuthenticatedUser();
      expect(spyOnDispatcher).toHaveBeenCalledWith({
        actionType: PostItConstants.RECEIVE_AUTHENTICATED_USER,
      });
    });
  });
  describe('Group opened actions', () => {
    it('should dispatch to group opened', () => {
      PostItActions.groupOpened();
      expect(spyOnDispatcher).toHaveBeenCalledWith({
        actionType: PostItConstants.GROUP_OPENED,
      });
    });
  });
  describe('Recieve users in groups actions', () => {
    it('should dispatch to recieve users in groups', () => {
      PostItActions.recieveUsersInGroups();
      expect(spyOnDispatcher).toHaveBeenCalledWith({
        actionType: PostItConstants.RECIEVE_USERS_IN_GROUPS,
      });
    });
  });
});
