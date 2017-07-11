import express from 'express'; 
import firebase from 'firebase';
const app = express();
const fb = firebase.database();



const groupList = (app, db) => {
	app.get('/group', (req, res) => {
	firebase.auth().onAuthStateChanged((user) => {
    if (user) {
    	const groupRef = fb.ref(`users/${user.uid}/groups/`);
      	const groups = [];

 		groupRef.orderByKey().once('value', (snapshot) => {
        snapshot.forEach((childSnapShot) => {
          const group = {
            groupId: childSnapShot.key,
            groupname: childSnapShot.val().groupname
          };
          groups.push(group);
        });
         })
 		.then(() => {
        res.send({
          groups,
        });
      }) 
 		.catch((error) => {
          res.status(500).send({
            message: `Error occurred ${error.message}`,
          });
        });
 	}
    else {
      res.status(403).send({
        message: 'Please log in to see a list of your groups'
      });
    }
})
})
}
 
export default groupList;

        