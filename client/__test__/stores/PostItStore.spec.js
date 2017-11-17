import PostItDispatcher from '../../dispatcher/PostItDispatcher';
import PostItStore from '../../stores/PostItStore';
import mockData from '../seeders/MockData';

jest.mock('../../dispatcher/PostItDispatcher');
jest.dontMock('../../stores/PostItStore');

const callback = PostItDispatcher.register.mock.calls[0][0];
const listenerCb = () => {
  'listenerCB';
};


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

describe('Search USer Store', () => {
  it('should call the evnt listener when store receives data', () => {
    PostItStore.addChangeListener(listenerCb);
    const events = PostItStore._events;
    expect(Object.keys(events).length).toEqual(1);
  });
  it('should remove change listener when data change has been emitted', () => {
    PostItStore.removeChangeListener(listenerCb);
    const events = PostItStore._events;
    expect(Object.keys(events).length).toEqual(0);
  });
  it('should call getSearchedUsers method when data is receieved ', () => {
    callback(mockData.searchedUsers);
    const emitChange = jest.fn();
    emitChange();
    expect(PostItDispatcher.register.mock.calls.length).toBe(1);
    expect(emitChange).toHaveBeenCalled();
  });
});

describe('Add User group store', () => {
  it('should call method when data is receieved ', () => {
    callback(mockData.addMember);
    const emitChange = jest.fn();
    emitChange();
    expect(PostItDispatcher.register.mock.calls.length).toBe(1);
    expect(emitChange).toHaveBeenCalled();
  });
  it('should call the event listener when store receives data', () => {
    PostItStore.addChangeListener(listenerCb);
    const events = PostItStore._events;
    expect(Object.keys(events).length).toEqual(1);
  });
  it('should remove change listener when data change has been emitted', () => {
    PostItStore.removeChangeListener(listenerCb);
    const events = PostItStore._events;
    expect(Object.keys(events).length).toEqual(0);
  });
});

describe('AddMesage Store', () => {
  it('should have an empty initial array for google update', () => {
    expect(PostItStore.getGroupsMessages.length).toEqual(0);
  });
  it('registers a callback with the dispatcher', () => {
    expect(PostItDispatcher.register.mock.calls.length).toBe(1);
  });
  it('should call post message method when data is receieved ', () => {
    callback(mockData.addMessage);
    const spyOnStore = jest.spyOn(PostItStore, 'addMessage');
    spyOnStore();
    const emitChange = jest.fn();
    emitChange();
    expect(PostItDispatcher.register.mock.calls.length).toBe(1);
    expect(emitChange).toHaveBeenCalled();
    expect(spyOnStore).toHaveBeenCalled();
  });
  it('should call the evnt listener when store receives data', () => {
    PostItStore.addChangeListener(listenerCb);
    const events = PostItStore._events;
    expect(Object.keys(events).length).toEqual(1);
  });
  it('should remove change listener when data change has been emitted', () => {
    PostItStore.removeChangeListener(listenerCb);
    const events = PostItStore._events;
    expect(Object.keys(events).length).toEqual(0);
  });
});

describe('Get users in groups Store', () => {
  it('should have an empty initial array for google update', () => {
    expect(PostItStore.getGroupsUser.length).toEqual(0);
  });
  it('should call post message method when data is receieved ', () => {
    callback(mockData.userGroups);
    const emitChange = jest.fn();
    const spyOnStore = jest.spyOn(PostItStore, 'setUserGroups');
    spyOnStore();
    emitChange();
    expect(PostItDispatcher.register.mock.calls.length).toBe(1);
    expect(emitChange).toHaveBeenCalled();
    expect(spyOnStore).toHaveBeenCalled();
  });
  it('should call the event listener when store receives data', () => {
    PostItStore.addChangeListener(listenerCb);
    const events = PostItStore._events;
    expect(Object.keys(events).length).toEqual(1);
  });
  it('should remove change listener when data change has been emitted', () => {
    PostItStore.removeChangeListener(listenerCb);
    const events = PostItStore._events;
    expect(Object.keys(events).length).toEqual(0);
  });
});

describe('Get users in groups Store', () => {
  it('should have an empty initial array for google update', () => {
    expect(PostItStore.getUsersInGroup.length).toEqual(0);
  });
  it('should call post message method when data is receieved ', () => {
    callback(mockData.usersInGroups);
    const emitChange = jest.fn();
    const spyOnStore = jest.spyOn(PostItStore, 'setUsers');
    spyOnStore();
    emitChange();
    expect(PostItDispatcher.register.mock.calls.length).toBe(1);
    expect(emitChange).toHaveBeenCalled();
    expect(spyOnStore).toHaveBeenCalled();
  });
  it('should call the evnt listener when store receives data', () => {
    PostItStore.addChangeListener(listenerCb);
    const events = PostItStore._events;
    expect(Object.keys(events).length).toEqual(1);
  });
  it('should remove change listener when data change has been emitted', () => {
    PostItStore.removeChangeListener(listenerCb);
    const events = PostItStore._events;
    expect(Object.keys(events).length).toEqual(0);
  });
});

describe('Get users in groups Store', () => {
  it('should call post message method when data is receieved ', () => {
    callback(mockData.usersList);
    const emitChange = jest.fn();
    emitChange();
    expect(PostItDispatcher.register.mock.calls.length).toBe(1);
    expect(emitChange).toHaveBeenCalled();
  });
  it('should call the evnt listener when store receives data', () => {
    PostItStore.addChangeListener(listenerCb);
    const events = PostItStore._events;
    expect(Object.keys(events).length).toEqual(1);
  });
  it('should remove change listener when data change has been emitted', () => {
    PostItStore.removeChangeListener(listenerCb);
    const events = PostItStore._events;
    expect(Object.keys(events).length).toEqual(0);
  });
});
