import axios from 'axios';
import PostItConstants from '../constants/PostItConstants.js';
import PostItDispatcher from '../dispatchers/PostItDispatcher.js';
import { ref, firebaseAuth } from '../../server/config/db'






export function signIn (email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw)
  firebaseAuth().currentUser.getToken(true)
  .then((idToken) => {
  		PostItDispatcher({
  			type: PostItConstants.LOGIN_USER,
  		});
  		let jwt = idToken.uid;
 	 		localStorage.setItem('jwt', jwt);
 	 	})
 	 	.catch((error) =>{
 	 		PostItDispatcher({
 	 			type: PostItConstants.LOGIN_ERROR,
 	 			error: error.message,
 	 			status: 'Unable to login'
 	 		});

 	 	});
}

export function signUp(email, pw, usernanme) {
	return firebaseAuth().createUserWithEmailAndPassword(email, pw)
    	.then(saveUser)
 		firebaseAuth().currentUser.getToken(true)
  		.then((idToken) => {
				PostItDispatcher({
 				type: PostItConstants.REGISTER_USER,
 			});
 			let jwt = idToken.uid;
 			localStorage.setItem('jwt', jwt);
 		})
 		.catch((error) =>{
 			PostItDispatcher({
 				type: PostItConstants.REGISTER_ERROR,
 				error: error.message,
 				status: 'Unable to register'
 			});

 		});
 	}

export function google() {
	let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    return firebaseAuth().signInWithPopup(provider)
        .then(saveUser)
        firebaseAuth().currentUser.getToken(true)
  		.then((idToken) => {
		 		PostItDispatcher({
 				type: PostItConstants.GOOGLE_LOGIN
 			});
 		let jwt = idToken.uid;
 			localStorage.setItem('jwt', jwt);
 			})
	}

export function signOut() {
	return firebaseAuth().signOut()
 		PostItDispatcher({
 			type: PostItConstants.SIGN_OUT
 		});
 	}
export function saveUser (user) {
  return ref.child(`users/${user.uid}/info`)
    .set({
      email: user.email
    })
    .then(() => user)
}

export function resetPassword (email) {
  return firebaseAuth().sendPasswordResetEmail(email)
}

export function addGroup (groupName) {
  return firebaseAuth().onAuthStateChanged((user) => {
        const groupKey = fb.ref('groups/').push({
          groupName: groupName,
          groupadmin: user.email,
        }).key;
        const groupRef = fb.ref(`groups/${groupKey}/users/`)
        .set({
          Id: user.uid,
        })
        const userRef = fb.ref(`users/${user.uid}/groups/`).set(
          { groupid: groupKey,
            groupname: groupName}
          )
        .then(() => {
      alert("Group Successfully created")
    })
    .catch((error) => {
    });
  
});
}


export function message (messageBody, groupId) {
  return firebaseAuth().onAuthStateChanged((user) => {
        const groupRef = fb.ref(`groups/${groupId}`).child('message')
        .set({
          message: messageBody,
          postedby: user.email
        })
        fb.ref(`users/${user.uid}/groups/${groupId}`).set(
          { messages: messageBody }
          )
        .then(() => {
      alert("Message Sent successfully to Group")
    })
    .catch((error) => {
    });
  
});
}