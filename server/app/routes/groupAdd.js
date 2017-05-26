// add to group route

const groupAdd = (app, db) => {
  app.post('/users/group/userId', (req, res) => {
    let userId,
      groupName;
    const db = firebase.database();
    firebase.auth().onAuthStateChanged((user) => {
      // to ensure  user is in session
      if (user) {
        const userId = user.uid;
        const groupRef = db.ref('/users');
        groupRef.child(groups).push({
          groupName: req.body.groupName,
        });

        res.send({
          message: 'User added to group',
        });
      } else {
        res.send({
          message: 'You are not signed in right now!'
        });
      }
    });
  });
};


export default groupAdd;













// import express from 'express';
// import firebase from 'firebase';
// import db from '../../config/db';
// const app = express();
// const fb = firebase.database();
// let fire_base = firebase.auth();
// let ref = database.ref('groups');
// let orderRef = database.ref('users');

// module.exports = (app, db) => {
//     app.post('/', (req, res) => {
//     let memberId = req.body.memberId,
//         group_name;
               
//     firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
               
//         ref.child('/groups/' + req.params.groupId).set({
//             groupMember: req.body.memberId,
//         })
//         .then(orderRef.child('users/' + userId).set({
//             group_name: req.params.groupId
//         })
//         )
//         .catch((err) => {
//             let errorCode = err.code;
//             let errorMessage = err.message;
//             res.json({ message: "Success: You have been added to a new Group."})
//   			})
//  //  	else {
//  //  		res.json({ message: "Error: You have error"})
// }	// }
// })
// })
// }
