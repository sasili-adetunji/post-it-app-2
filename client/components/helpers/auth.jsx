import { ref, firebaseAuth } from '../../../server/config/db'

import firebase from 'firebase';

export function auth (email, pw) {
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
return  
   firebaseAuth().onAuthStateChanged((user) => {
      const groupName = req.body.groupName;
       const newGroupKey = ref.child(`groups/${groupName}/info`).set({
          groupName: groupName,
          groupadmin:user.uid
        })
        
        
      });

}

export function google () { 
  let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    return firebaseAuth().signInWithPopup(provider)
        .then(saveUser);
}





export function saveUser (user) {
  return ref.child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid
    })
    .then(() => user)
}