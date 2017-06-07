import PostItConstants from '../constants/postit-constants.js';
import PostItDispatcher from '../dispatchers/postit-dispatchers.js';
import { login, resetPassword, google } from '../components/helpers/auth'


let AuthActions = {
    startAuth: function(email, pass) {
    let payload = {
    	'actionType': PostItConstants.LOGIN_USER, 
    	'email': email, 
    	'pass': pass
    };
    PostItDispatcher.handleViewAction(payload)
    },
}

export default AuthActions;