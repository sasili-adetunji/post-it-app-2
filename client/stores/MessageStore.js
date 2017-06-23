
import BaseStore from './BaseStore';
import { SEMD_MESSAGE } from '../constants/PostItConstants.js';
import PostItDispatcher from '../dispatchers/PostItDispatcher';
import jwt_decode from 'jwt-decode';


class MessageStore extends BaseStore {

  constructor() {
    super();
    // First we register to the Dispatcher to listen for actions.
   // this.dispatchToken = PostItDispatcher.register(this._registerToActions.bind(this));
    this._message = null;
    this._jwt = null;
    this._user = null;
  }

  _registerToActions(action) {
    switch(action.actionType) {
      case USER_SEND_MESSAGE:
        this._jwt = action.jwt;
        this._user = jwt_decode(this._jwt);
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

   get message() {
    return this._message;
  }

  isLoggedIn() {
    return !!this._user;
  }
}
export default new MessageStore ();