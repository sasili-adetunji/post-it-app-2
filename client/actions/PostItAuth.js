import axios from 'axios';
import PostItConstants from '../constants/PostItConstants.js';
import PostItDispatcher from '../dispatchers/PostItDispatcher.js';
import { ref, firebaseAuth } from '../../server/config/db'
import firebase from 'firebase';
const fb = firebase.database();






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
        const userRef = fb.ref(`users/${user.uid}/groups/groupInfo`).set(
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
        const groupRef = fb.ref(`groups/${groupId}`).child('messages')
        .push({
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


export function readMessage () {
  return firebaseAuth().onAuthStateChanged((user) => {
    fb.ref('users').child(user.uid)
   .child('groups').child('-KmfaBc5knfnVibo1hBf')
   .on('child_added', (msg) => { 
    let messageValue = msg.val();
    console.log("New message", messageValue)
  })
})
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
  firebase.auth().onAuthStateChanged((user) => {
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

