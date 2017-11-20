import PostItDispatcher from '../../dispatcher/PostItDispatcher';
import PostItStore from '../../stores/PostItStore';
import * as Api from '../../Api';

import mockData from '../seeders/MockData';

jest.mock('../../dispatcher/PostItDispatcher');
jest.dontMock('../../stores/PostItStore');

const callback = PostItDispatcher.register.mock.calls[0][0];


describe('PostItstore ', () => {
  it('should have an empty initial array for searched users', () => {
    expect(PostItStore.getSearchedUsers.length).toEqual(0);
  });
  it('registers a callback with the dispatcher', () => {
    expect(PostItDispatcher.register.mock.calls.length).toBe(1);
  });
  it('should initialize with empty users list', () => {
    expect((PostItStore.getUsers())).toEqual([]);
  });
  it('should initialize with empty users list', () => {
    expect((PostItStore.getGroupsUser())).toEqual([]);
  });
  it('should initialize with empty users list', () => {
    expect((PostItStore.getUsersInGroup())).toEqual([]);
  });
  it('should initialize with empty users list', () => {
    expect((PostItStore.getSuccess())).toEqual('');
  });
  it('should initialize with empty users list', () => {
    expect((PostItStore.getLoginSuccess())).toEqual('');
  });
  it('should initialize with empty users list', () => {
    expect((PostItStore.getErrors())).toEqual('');
  });
  it('should initialize with empty users list', () => {
    expect((PostItStore.getLoggedInUser())).toEqual([]);
  });
  it('should initialize with empty users list', () => {
    expect((PostItStore.getIsAuthenticated())).toEqual(false);
  });
});

describe('Post Message Store', () => {
  it('should call getGroupsMessages method when data is receieved ', () => {
    const spyOnStore = jest.spyOn(PostItStore, 'addMessage');
    callback(mockData.addMessage);
    const emitChange = jest.fn();
    emitChange();
    expect(spyOnStore).toHaveBeenCalled();
    expect(PostItStore.getGroupsMessages()).toContain(mockData.addMessage.action.message);
    expect(PostItDispatcher.register.mock.calls.length).toBe(1);
    expect(emitChange).toHaveBeenCalled();
  });
});

describe('Get users Store', () => {
  it('should call set users method when data is receieved ', () => {
    const spyOnStore = jest.spyOn(PostItStore, 'setUsers');
    callback(mockData.usersList);
    const emitChange = jest.fn();
    emitChange();
    expect(PostItStore.getUsers()).toEqual(mockData.usersList.action.users);
    expect(PostItDispatcher.register.mock.calls.length).toBe(1);
    expect(emitChange).toHaveBeenCalled();
    expect(spyOnStore).toHaveBeenCalled();
  });
});

describe('Get users groups Store', () => {
  it('should have an empty initial array for google update', () => {
    expect(PostItStore.getGroupsUser.length).toEqual(0);
  });
  it('should call post message method when data is receieved ', () => {
    const spyOnStore = jest.spyOn(PostItStore, 'setUserGroups');
    callback(mockData.userGroups);
    const emitChange = jest.fn();
    emitChange();
    expect(PostItStore.getGroupsUser()).toEqual(mockData.userGroups.action.groups);
    expect(PostItDispatcher.register.mock.calls.length).toBe(1);
    expect(emitChange).toHaveBeenCalled();
    expect(spyOnStore).toHaveBeenCalled();
  });
});

describe('Search User Store', () => {
  it('should call getSearchedUsers method when data is receieved ', () => {
    callback(mockData.searchedUsers);
    const spyOnStore = jest.spyOn(Api, 'searchUsers');
    spyOnStore();
    const emitChange = jest.fn();
    emitChange();
    expect(spyOnStore).toHaveBeenCalledTimes(1);
    expect(PostItDispatcher.register.mock.calls.length).toBe(1);
    expect(emitChange).toHaveBeenCalled();
  });
});

describe('Add User group store', () => {
  it('should call Api when data is receieved ', () => {
    const spyOnApi = jest.spyOn(Api, 'addUserToGroup');
    callback(mockData.addMember);
    const emitChange = jest.fn();
    emitChange();
    expect(PostItDispatcher.register.mock.calls.length).toBe(1);
    expect(spyOnApi).toHaveBeenCalled();
    expect(emitChange).toHaveBeenCalled();
  });
});


describe('Get users in groups Store', () => {
  it('should have an empty initial array for google update', () => {
    expect(PostItStore.getUsersInGroup.length).toEqual(0);
  });
  it('should call get users api method when data is receieved ', () => {
    callback(mockData.usersInGroups);
    const emitChange = jest.fn();
    const spyOnApi = jest.spyOn(Api, 'getUserGroups');
    spyOnApi();
    emitChange();
    expect(PostItDispatcher.register.mock.calls.length).toBe(1);
    expect(emitChange).toHaveBeenCalled();
    expect(spyOnApi).toHaveBeenCalled();
  });
});
