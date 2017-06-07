import PostItDispatcher from '../dispatchers/postit-dispatcher';
import PostItConstants from '../constants/postit-constants';
import EventEmitter from 'events'.EventEmitter;
import React from 'react/addons';

var CHANGE_EVENT = "change";


var _scheduleList = [
    {id:1, status: 'ok', fullname: 'FullName #1', email: "1@aaa.com"},
    {id:2, status: 'ok', fullname: 'FullName #2', email: "2@aaa.com"},
    {id:3, status: 'ok', fullname: 'FullName #3', email: "3@aaa.com"}
  ];

function _addItem(item){
  console.log("Dashboard");
}




var PostItStore = React.addons.update(EventEmitter.prototype, {$merge: {
  emitChange:function(){
    this.emit(CHANGE_EVENT);
  },

  addChangeListener:function(callback){
    this.on(CHANGE_EVENT, callback)
  },

  removeChangeListener:function(callback){
    this.removeListener(CHANGE_EVENT, callback)
  },
  getScheduleList: function(){
    return _scheduleList;
  },

  dispatcherIndex:PostItDispatcher.register(function(payload){
    var action = payload.action; // this is our action from handleViewAction
    switch(action.actionType){
      /* SHORT USAGE BOILERPLATE (EXAMPLE - uncomment if required)
      case PostItConstants.ADD_ITEM:
        _addItem(payload.action.item);
        break;
      */
    }
    AppStore.emitChange();

    return true;
  })
}});

export default PostItStore;