import express from 'express'; 
import firebase from 'firebase';
const app = express();
const fb = firebase.database();



const usersList = (app, db) => {

	app.get('/user/users', (req, res) => {
        const userRef = fb.ref().child('users').once('child_added', msg =>{
        	const data = msg.val()
        	res.send(data)
        });
    })
}

export default usersList;

        