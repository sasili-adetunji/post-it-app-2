import axios from 'axios';
import PostItConstants from '../constants/PostItConstants.js';
import PostItDispatcher from '../dispatchers/PostItDispatcher.js';
import { ref, firebaseAuth } from '../../server/config/db'
import firebase from 'firebase';
const fb = firebase.database();



export function signIn (loginDetails) {
   return (dispatch) => {
  return axios.post('user/signin', {
      email: loginDetails.email,
      password: loginDetails.password
    })
  firebaseAuth().currentUser.getToken(true)
  .then((idToken) => {
  		PostItDispatcher({
  			type: PostItConstants.LOGIN_USER,
        email
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
}

export function signUp(signupDetails) {
   return (dispatch) => {
	return axios.post('user/signup', {
      email: signupDetails.email,
      password: signupDetails.password,
      username: signupDetails.username
    })
 		firebaseAuth().currentUser.getToken(true)
  		.then((idToken) => {
				PostItDispatcher({
 				type: PostItConstants.REGISTER_USER,
        email
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
  return fb.child(`users/${user.uid}/info`)
    .set({
      email: user.email
    })
    .then(() => user)
}

export function resetPassword (email) {
  return firebaseAuth().sendPasswordResetEmail(email)
}

export function addGroup(groupName) {
   return (dispatch) => {
  return axios.post('/group', {
      groupName: groupName,
    })
    PostItDispatcher({
        type: PostItConstants.CREATE_GROUP,
        groupName
      })
      .catch((error) =>{
      PostItDispatcher({
        type: PostItConstants.REGISTER_ERROR,
        error: error.message,
        status: 'Unable to create group'
      });

    });
  }
}

export function message (messageBody, groupId) {
   return (dispatch) => {
  return axios.post('/message', {
      messageBody: messageBody,
      groupId: groupId
    })
    PostItDispatcher({
        type: PostItConstants.SEND_MESSAGE,
        messageBody
      })
      .catch((error) =>{
      PostItDispatcher({
        type: PostItConstants.MESSAGE_ERROR,
        error: error.message,
        status: 'Unable to send message to group'
      });

    });
  }

}
// export function readMessage () {
//   return firebaseAuth().onAuthStateChanged((user) => {
//     fb.ref('users').child(user.uid)
//    .child('groups').child('-KmfaBc5knfnVibo1hBf')
//    .on('child_added', (msg) => { 
//     let messageValue = msg.val();
//     console.log("New message", messageValue)
//   })
// })
// }

export function readMessage() {
   return (dispatch) => {
    return firebaseAuth().onAuthStateChanged((user) => {
      fb.ref('users').child(user.uid).child('groups')
      .child(groupId).once('value', snap => {
      const message = snap.val().info;
      PostItDispatcher({
        type: PostItConstants.VIEW_MESSAGE,
        message
      })
    .catch((error) =>{
      PostItDispatcher({
        type: PostItConstants.VIEW_MESSAGE_ERROR,
        error: error.message,
        status: 'Unable to send Message'
      });

    });
})
    })
  }
}


// export function showGroups () {
// var messageValue, groupValue, messageKey;
//   return firebaseAuth().onAuthStateChanged((user) => {
//     fb.ref('users').child(user.uid)
//    .child('groups')
//    .on('child_added', (msg) => { 
//      messageKey = msg.key
//      messageValue = msg.val()
//    })
//    fb.ref('groups').on('child_added', (grp) => { 
//      groupValue = grp.val();
//       console.log("Show Groups", messageValue, messageKey)
//       console.log("Show Group Name ", groupValue.users.Id)
  
//   })
//   })
// }



export function showGroups () {
   return (dispatch) => {
    return firebase.auth().onAuthStateChanged((user) => {
        const groups = [];
        const groupsReference = fb.ref('users').child(user.uid)
            .child('groups').on('child_added', (msg) => { 
            const groupKeys = [];
          msg.forEach(groupMsg => (
            groupKeys.push(groupMsg.key)
          ));
          const promises = groupKeys.map(groupKey => (
            new Promise((resolve) => {
              const groupReference = fb.ref(`groups/${groupKey}`);
              groupReference.on('value', (snap) => {
                groups.push(snap.val());
               resolve();
              });
            })
          ));
          Promise.all(promises).then(values =>{
            console.log(values)
          })
        }); 
                      //console.log(groups)

  });
}
}

export function getUsers() {
   return (dispatch) => {
    return fb.ref('users').once('value', snap => {
      const users = snap.val().info;
      PostItDispatcher({
        type: PostItConstants.GET_USERS,
        users
      })
    .catch((error) =>{
      PostItDispatcher({
        type: PostItConstants.GET_USERS_ERROR,
        error: error.message,
        status: 'Unable to login'
      });

    });
})
  }
}