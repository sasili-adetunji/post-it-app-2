
import BaseStore from './BaseStore';
import {LOGIN_USER, SIGN_OUT } from '../constants/PostItConstants.js';
import PostItDispatcher from '../dispatchers/PostItDispatcher';
import jwt_decode from 'jwt-decode';


class LoginStore extends BaseStore {

  constructor() {
    super();
    // First we register to the Dispatcher to listen for actions.
   // this.dispatchToken = PostItDispatcher.register(this._registerToActions.bind(this));
    this._user = null;
    this._jwt = null;
  }

  _registerToActions(action) {
    switch(action.actionType) {
      case USER_LOGGED_IN:
        this._jwt = action.jwt;
        this._user = jwt_decode(this._jwt);
        this.emitChange();
        break;
      case SIGN_OUT:
        this._user = null;
        this.emitChange();
        break;
      default:
        break
    };
  }

  get user() {
    return this._user;
  }

  get jwt() {
    return this._jwt;
  }

  isLoggedIn() {
    return !!this._user;
  }
}
export default new LoginStore();