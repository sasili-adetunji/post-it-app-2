'use strict';

var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var PostitDispatcher = assign(new Dispatcher(), {
  handleViewAction: function handleViewAction(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  }
});

module.exports = PostitDispatcher;

// import { Dispatcher } from 'flux';

// export default new Dispatcher();