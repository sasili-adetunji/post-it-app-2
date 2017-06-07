
var Dispatcher =require('flux').Dispatcher;
import assign  from 'object-assign';

let PostItDispatcher = assign(new Dispatcher(), {
  handleViewAction: function(action){
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    })
  },
  handleRequestAction: function(action){
    this.dispatch({
      source: 'WEB_API_ACTION',
      action: action
    })
  },
  
});

export default PostItDispatcher;
