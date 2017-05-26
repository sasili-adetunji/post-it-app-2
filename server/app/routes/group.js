import express from 'express';
import firebase from 'firebase';
import db from '../../config/db';
const app = express();
const fb = firebase.database();
const usersRef = fb.ref('groups');


const group = (app, db) =>{ 
  app.post('/users/group', (req, res) => {
    firebase.auth().onAuthStateChanged((user) => {
  	if (user) {
  		let group_name, 
  			adminId;
    usersRef.push({
      adminId: user.uid,
      group_name: req.body.group_name,
    });
 		res.json({ message: 'Success: You have created a new Group.' });
  }
      else {
  	res.json({ message: 'Error: You have to sign in before adding creating group' });
  }
    });
  });
};
export default group