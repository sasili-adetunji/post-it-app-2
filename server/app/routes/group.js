const express = require('express'); 
const firebase     = require('firebase');
const db =  require('../../config/db');
const app = express();
const fb = firebase.database();
const usersRef = fb.ref("groups");



module.exports = function(app, db) {
	app.post('/users/group', (req, res) => {
		// let user = fb.auth().currentUser;
  //               if(user) {
  	let group_name = req.body.group_name,
  		admin_id;

	firebase.auth().onAuthStateChanged(function(user) {
  	if (user) {
  		admin_id = user.uid
		usersRef.push({
			admin_id: user.uid,
			group_name: req.body.group_name
		})
 		res.json({ message: "Success: You have creared a new Group."})
  } 
  else {
  	res.json({ message: "Error: You have to sign in before adding creating group"})
  }
	})
})
}

