import PostItDispatcher from '../../dispatcher/PostItDispatcher';
import PostItStore from '../../stores/PostItStore';
import * as Api from '../../Api';

import mockData from '../seeders/mockData';

jest.mock('../../Api');
jest.mock('../../dispatcher/PostItDispatcher');
jest.dontMock('../../stores/PostItStore');

const callback = PostItDispatcher.register.mock.calls[0][0];


describe('Post Message Store', () => {
  it('should update the users message store when the ADD_MESSAGE Action has been dispatched', () => {
    const spyOnStore = jest.spyOn(PostItStore, 'addMessage');
    callback(mockData.addMessage);
    const emitChange = jest.fn();
    emitChange();
    expect(spyOnStore).toHaveBeenCalled();
    expect(PostItStore.getGroupsMessages()).toEqual([{
      groupId: 'KJJH772SLJKHDLAI8',
      message: 'HOW U DEY?',
      priorityLevel: 'normal',
      date: '17th Nov, 2017',
    }]);
    expect(PostItDispatcher.register.mock.calls.length).toBe(1);
  });
});

describe('Get users Action', () => {
  it('should initialize with empty users list', () => {
    expect((PostItStore.getUsers())).toEqual([]);
  });
  it('should update the users store when the RECEIVE_USERS Action has been dispatched should', () => {
    const spyOnStore = jest.spyOn(PostItStore, 'setUsers');
    callback(mockData.usersList);
    const emitChange = jest.fn();
    emitChange();
    expect(PostItStore.getUsers()).toEqual([
      { userId: 'KJJH772SLJKHDLAI8', userName: 'wash' },
      { userId: 'N.SLJLPWE84UHN', userName: 'sas' }
    ]);
    expect(spyOnStore).toHaveBeenCalled();
  });
});

describe('Get users groups Action', () => {
  it('should have an empty initial array for groups user', () => {
    expect(PostItStore.getGroupsUser.length).toEqual(0);
  });
  it('should update the users group store when the RECEIVE_USER_GROUPS Action has been dispatched', () => {
    const spyOnStore = jest.spyOn(PostItStore, 'setUserGroups');
    callback(mockData.userGroups);
    const emitChange = jest.fn();
    emitChange();
    expect(PostItStore.getGroupsUser()).toEqual({
      groupId: 'KJJH772SLJKHDLAI8',
    });
    expect(spyOnStore).toHaveBeenCalled();
  });
});

describe('Sign out user Action', () => {
  callback(mockData.signOut);
  const emitChange = jest.fn();
  const spyOnStore = jest.spyOn(PostItStore, 'signOutUser');
  spyOnStore();
  const spyOnApi = jest.spyOn(Api, 'signoutUser');
  spyOnApi();
  emitChange();
  it('should call signout user api method when SIGNOUT_USER Action is dispatched ', () => {
    expect(spyOnApi).toHaveBeenCalled();
    expect(spyOnStore).toHaveBeenCalled();
  });
  it('should set authentication to false', () => {
    expect(PostItStore.getIsAuthenticated()).toEqual(false);
  });
  it('should clear the loggedin user in store', () => {
    expect(PostItStore.getLoggedInUser().length).toEqual(0);
  });
});

describe('Google Login Action', () => {
  callback(mockData.googleLogin);
  const emitChange = jest.fn();
  const spyOnStore = jest.spyOn(Api, 'googleLogin');
  spyOnStore();
  emitChange();
  it('should call googleLogin api method with token when GOOGLE_LOGIN Action is fired ', () => {
    expect(spyOnStore).toHaveBeenCalledWith('AWLSHFGJHJKWLL8799KLJK');
    expect(emitChange).toHaveBeenCalled();
  });
});

describe('Login Action', () => {
  callback(mockData.login);
  const emitChange = jest.fn();
  const spyOnStore = jest.spyOn(Api, 'signinUser');
  emitChange();
  it('should call signinUser api method with the email and password when LOGIN_USER Action is fired', () => {
    expect(spyOnStore).toHaveBeenCalledWith({
      email: 'sas@gmail.com',
      password: 'ADEOLA212'
    });
    expect(emitChange).toHaveBeenCalled();
  });
});

describe('Register Action', () => {
  callback(mockData.registerUser);
  const emitChange = jest.fn();
  const spyOnApi = jest.spyOn(Api, 'registerNewUser');
  emitChange();
  it('should call registerNewUser api method with user object when REGISTER_USER Action is fired', () => {
    expect(spyOnApi).toHaveBeenCalledWith({
      email: 'sas@gmail.com',
      password: 'ADEOLA212',
      phoneNumber: '2348037817325',
      userName: 'sas'
    });
    expect(emitChange).toHaveBeenCalled();
  });
});

describe('Get User Messages Action', () => {
  callback(mockData.userMessages);
  const emitChange = jest.fn();
  const spyOnApi = jest.spyOn(Api, 'getMessages');
  emitChange();
  it('should call getMessages api method with groupId of when GET_USER_MESSAGES Action is fired', () => {
    expect(spyOnApi).toHaveBeenCalledWith({ groupId: 'AJDSLIOEO32870WKJH' });
    expect(emitChange).toHaveBeenCalled();
  });
});

describe('Read User Action', () => {
  callback(mockData.readUsers);
  const emitChange = jest.fn();
  const spyOnApi = jest.spyOn(Api, 'getUserReadUsers');
  emitChange();
  it('should call getUserReadUsers api method with messageId when RECEIVE_READ_USERS Action is fired', () => {
    expect(spyOnApi).toHaveBeenCalledWith({
      messageId: 'ASOLVHUKJH',
    });
    expect(emitChange).toHaveBeenCalled();
  });
});

describe('Add User group Action', () => {
  it('should call addUserToGroup api method when ADDUSER_GROUP Action is fired', () => {
    const spyOnApi = jest.spyOn(Api, 'addUserToGroup');
    callback(mockData.addMember);
    const emitChange = jest.fn();
    emitChange();
    expect(spyOnApi).toHaveBeenCalled();
    expect(emitChange).toHaveBeenCalled();
  });
});

describe('Get users in groups Action', () => {
  it('should call getUserGroups api method when RECIEVE_USERS_IN_GROUPS Action is fired', () => {
    callback(mockData.usersInGroups);
    const emitChange = jest.fn();
    const spyOnApi = jest.spyOn(Api, 'getUserGroups');
    spyOnApi();
    emitChange();
    expect(spyOnApi).toHaveBeenCalled();
    expect(emitChange).toHaveBeenCalled();
  });
});

describe('reset Password Store', () => {
  it('should call resetPassword api method with email when RESET_PASSWORD Action is fired ', () => {
    callback(mockData.resetPassword);
    const emitChange = jest.fn();
    const spyOnApi = jest.spyOn(Api, 'resetPassword');
    spyOnApi();
    emitChange();
    expect(spyOnApi).toHaveBeenCalledWith('sas@gmail.com');
    expect(emitChange).toHaveBeenCalled();
  });
});

describe('recieve add members to group Store', () => {
  callback(mockData.addMemberToGroup);
  const emitChange = jest.fn();
  const spyOnStore = jest.spyOn(PostItStore, 'addUserToGroup');
  spyOnStore();
  emitChange();
  it('should call addUserToGroup method when RECIEVE_ADD_MEMBERS_TO_GROUP Action is fired', () => {
    expect(spyOnStore).toHaveBeenCalled();
    expect(emitChange).toHaveBeenCalled();
  });
  it('should call update the users groupin store method', () => {
    expect(PostItStore.getUsersInGroup()[0].userName).toEqual('sas@email.com');
    expect(PostItStore.getUsersInGroup()[0].userId).toEqual('JHDSKAODCIO9');
  });
});

describe('Create Group Action', () => {
  callback(mockData.creategroup);
  const emitChange = jest.fn();
  const spyOnStore = jest.spyOn(Api, 'createNewGroup');
  spyOnStore();
  emitChange();
  it('should call createNewGroup api method when RECIEVE_CREATE_GROUP Action is fired', () => {
    expect(spyOnStore).toHaveBeenCalled();
    expect(emitChange).toHaveBeenCalled();
  });
});

describe('Clear Search Action', () => {
  callback(mockData.clearSearch);
  const emitChange = jest.fn();
  const spyOnStore = jest.spyOn(PostItStore, 'clearSearchedUsers');
  spyOnStore();
  emitChange();
  it('should call addUserToGroup method when the CLEAR_SEARCH Action  ', () => {
    expect(spyOnStore).toHaveBeenCalled();
    expect(emitChange).toHaveBeenCalled();
  });
  it('should call clear the searched users in the store', () => {
    expect(PostItStore.getSearchedUsers()).toEqual('');
  });
});

describe('Search User Action', () => {
  it('should call searchuser Api method SEARCH_USER Action is dispatched', () => {
    callback(mockData.searchedUsers);
    const spyOnApi = jest.spyOn(Api, 'searchUsers');
    const emitChange = jest.fn();
    emitChange();
    expect(spyOnApi).toHaveBeenCalledTimes(1);
    expect(emitChange).toHaveBeenCalled();
  });
});
