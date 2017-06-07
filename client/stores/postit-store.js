import PostItDispatcher from '../dispatchers/postit-dispatcher';
import PostItConstants from '../constants/postit-constants';
import EventEmitter from 'events'.EventEmitter;
import React from 'react/addons';

var CHANGE_EVENT = "change";


var _cartItems = [];

function _addItem(item){
  console.log("ADD ITEM done - just an example");
  alert("ADD ITEM done - just an example - check the console log for an output");
  _cartItems.push(Math.random());
}




var PostItStore = React.addons.update(EventEmitter.prototype, { $merge: {
  emitChange:function(){
    this.emit(CHANGE_EVENT);
  },

  addChangeListener:function(callback){
    this.on(CHANGE_EVENT, callback)
  },

  removeChangeListener:function(callback){
    this.removeListener(CHANGE_EVENT, callback)
  },
  getCart:function(){
    return _cartItems
  },

  dispatcherIndex:PostItDispatcher.register(function(payload){
    var action = payload.action; // this is our action from handleViewAction
    switch(action.actionType){
      case PostItConstants.ADD_ITEM:
        _addItem(payload.action.item);
        break;
    }
    PostItStore.emitChange();

    return true;
  })
}});

module.exports = PostItStore;