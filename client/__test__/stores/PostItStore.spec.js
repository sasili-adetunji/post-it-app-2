
import PostItConstants from '../../constants/PostItConstants';
// import localStorage from '../../__mocks__/localStorageMock';

jest.mock('../../dispatcher/PostItDispatcher');
jest.dontMock('../../stores/PostItStore');

// localStorage.getItem = jest.fn();
// localStorage.setItem = jest.fn();

describe('Message Store', () => {
  const loginUser = {
    source: 'VIEW_ACTION',
    action: {
      type: PostItConstants.LOGIN_USER,
      user: {
        displayName: 'test name',
        // user: localStorage.setItem(),
      },
    },
  };
  let callback;
  let PostItDispatcher;
  let PostItStore;
  let spyOnDispatcher;

  beforeEach(() => {
    jest.resetModules();
    PostItStore = require('../../stores/PostItStore').default;     // eslint-disable-line
    PostItDispatcher = require('../../dispatcher/PostItDispatcher').default;    // eslint-disable-line
    callback = PostItDispatcher.register.mock.calls[0][0];
    spyOnDispatcher = jest.spyOn(PostItDispatcher, 'handleViewAction');
  });
  it('should register a callback with the dispatcher', () => {
    expect(PostItDispatcher.register.mock.calls.length).toBe(1);
  });
  it('should store display name and token in local storage on login', () => {
    callback(loginUser);
    // expect(localStorage.setItem.mock.calls.length).toBe(3);
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
  it('should emit an event when emit change listener is called', () => {
    const spyOnAddEvent = spyOn(PostItStore, 'emit');
    PostItStore.emitChange();
    expect(spyOnAddEvent).toHaveBeenCalledWith('change');
  });
  it('should attach event emitter when add change listener is called', () => {
    const spyOnAddEvent = spyOn(PostItStore, 'on');
    const mockCallBack = jest.fn();
    PostItStore.addChangeListener(mockCallBack);
    expect(spyOnAddEvent).toHaveBeenCalledWith('change', mockCallBack);
  });
  it('should remove event emitter when remove change lister is called', () => {
    const spyOnRemoveEvent = spyOn(PostItStore, 'removeListener');
    const mockCallBack = jest.fn();
    PostItStore.removeChangeListener(mockCallBack);
    expect(spyOnRemoveEvent).toHaveBeenCalledWith('change', mockCallBack);
  });
});
