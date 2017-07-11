import express from 'express'; 
import firebase from 'firebase';
const app = express();
const fb = firebase.database();



const usersList = (app, db) => {
	app.get('/user/users', (req, res) => {

	firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const users = new Map();

        const userRef = fb.ref('users').once('value', msg =>{
        	msg.forEach((snapshot) => {
            users.set(snapshot.key, snapshot.val());
          });
        	 res.send({
            users: users
          });
        });
      } 
      else {
        res.status(403).send({
          message: 'You are not signed in right now! '
        });
      }
    });
  });

}

export default usersList;

        