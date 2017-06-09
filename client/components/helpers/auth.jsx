import { ref, firebaseAuth } from '../../../server/config/db'

import firebase from 'firebase';
const fb = firebase.database();


export function auth (email, pw)  {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
    .then(saveUser)
}

export function logout () {
  return firebaseAuth().signOut()
}

export function login (email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw)
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



export function google () { 
  let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    return firebaseAuth().signInWithPopup(provider)
        .then(saveUser);
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
export function saveUser (user) {
  return ref.child(`users/${user.uid}/info`)
    .set({
      email: user.email
    })
    .then(() => user)
}