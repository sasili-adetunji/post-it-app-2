import PostItConstants from '../constants/postit-constants.js';
import PostItDispatcher from '../dispatchers/postit-dispatcher.js';

let PostItActions = {
  registerUser:function(){
    PostItDispatcher.handleViewAction({
      actionType: PostItConstants.REGISTER_USER
    })
  }
}

export default PostItActions;