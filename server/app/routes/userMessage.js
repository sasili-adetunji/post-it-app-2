import express from 'express'; 
import firebase from 'firebase';
const app = express();
const fb = firebase.database();
import { ref, firebaseAuth } from '../../config/db'




const userMessage = (app, db) => {
	firebaseAuth().onAuthStateChanged((user) => {

	app.get('/user/message', (req, res) => {
        const userRef = fb.ref(`users/${user.uid}/groups/${groupId}`)
        .once('child_added', msg =>{
        	const data = msg.val()
        	res.send(data)
        });
    })
    })
}

export default userMessage;

        