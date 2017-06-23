import { EventEmitter } from 'events';
import PostItDispatcher from '../dispatchers/PostItDispatcher';

export default class BaseStore extends EventEmitter {

  constructor() {
    super();
  }

  subscribe(actionSubscribe) {
    this._dispatchToken = PostItDispatcher.register(actionSubscribe());
  }

  get dispatchToken() {
    return this._dispatchToken;
  }

  emitChange() {
    this.emit('CHANGE');
  }

  addChangeListener(cb) {
    this.on('CHANGE', cb)
  }

  removeChangeListener(cb) {
    this.removeListener('CHANGE', cb);
  }
}