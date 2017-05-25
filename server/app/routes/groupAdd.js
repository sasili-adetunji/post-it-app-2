const express = require('express');
const firebase     = require('firebase');
const db =  require('../../config/db');
const app = express();
const database = firebase.database();
let fire_base = firebase.auth();
let ref = database.ref('groups');
let orderRef = database.ref('users');

module.exports = function (app, db) {
    app.post('/', (req, res) => {
    let memberId = req.body.memberId,
        group_name;
               
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
               
        ref.child('/groups/' + req.params.groupId).set({
            groupMember: req.body.memberId,
        })
        .then(orderRef.child('users/' + userId).set({
            group_name: req.params.groupId
        })
        )
        .catch((err) => {
            let errorCode = err.code;
            let errorMessage = err.message;
            res.json({ message: "Success: You have been added to a new Group."})
  			})
 //  	else {
 //  		res.json({ message: "Error: You have error"})
}	// }
})
})
}
