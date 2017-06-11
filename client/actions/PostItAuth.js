import axios from 'axios';
import PostItConstants from '../constants/PostItConstants.js';
import PostItDispatcher from '../dispatchers/PostItDispatcher.js';


const PostItAuth = {
	signUp: () => {
		axios.post('/user/signup', {
			username: '',
			email: '',
			password: ''
		})
		firebase.auth().currentUser.getToken(true)
		.then((idToken) => {
			PostItDispatcher({
				type: PostItConstants.REGISTER_USER,
			});
			let jwt = idToken.uid;
			localStorage.setItem('jwt', jwt);
		});
		.catch((error) =>{
			PostItDispatcher({
				type: PostItConstants.REGISTER_ERROR,
				error: error.message,
				status: 'Unable to register'
			});

		});
	},

	signIn: () => {
		axios.post('/user/signin', {
			email: '',
			password: ''
		})
		firebase.auth().currentUser.getToken(true)
		.then((idToken) => {
			PostItDispatcher({
				type: PostItConstants.LOGIN_USER,
			});
			let jwt = idToken.uid;
			localStorage.setItem('jwt', jwt);
		});
		.catch((error) =>{
			PostItDispatcher({
				type: PostItConstants.LOGIN_ERROR,
				error: error.message,
				status: 'Unable to login'
			});

		});
	},

	googleLogin: () => {
		PostItDispatcher({
			type: PostItConstants.GOOGLE_LOGIN
		});
	}

	signOut: () => {
		PostItDispatcher({
			type: PostItConstants.SIGN_OUT
		});
	}


}
export default PostItAuth;