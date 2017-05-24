const express = require('express');
const firebase     = require('firebase');
const db =  require('../../config/db');
const app = express();
const fb = firebase.database();
const usersRef = fb.ref("users");


module.exports = function(app, db) {
	app.post('/users/group', (req, res) => {
	firebase.auth().onAuthStateChanged(function(user) {
  	if (user) {
  		let user = {};
		user.group_admin = req.body.group_admin;
		user.group_name =req.body.group_name;
		usersRef.push({
			group_admin: req.body.group_admin,
			group_name: req.body.group_name,
		})
 		res.json({ message: "Success: You have creared a new Group."})
  } 
  else {
  	res.json({ message: "Error: You have to sign in before adding creating group"})
  }
	})
})
}