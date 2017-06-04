import { ref, firebaseAuth } from '../../../server/config/db'

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
  
   firebase.auth().onAuthStateChanged((user) => {
      const userId = user.uid;
       const newGroupKey = fb.ref().child('groups').push({
          groupName: groupName,
          groupadmin: userId,
        }).key;
        fb.ref().child(`groups/${newGroupKey}/users/${userId}`).set({
          Id: userId,
        });
        fb.ref(`/users/${userId}/groups/`).child(newGroupKey).set(
          { id: newGroupKey }
        )
      });

}

export function saveUser (user) {
  return ref.child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid
    })
    .then(() => user)
}