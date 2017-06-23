import express from 'express'; 
import firebase from 'firebase';
const app = express();
const fb = firebase.database();



const groupList = (app, db) => {

	app.get('/group', (req, res) => {
        const userRef = fb.ref().child('groups').once('child_added', msg =>{
        	const data = msg.val()
        	res.send(data)
        });
    })
}

export default groupList;

        