import express from 'express'; 
import firebase from 'firebase';
const app = express();
const fb = firebase.database();



const groupList = (app, db) => {
	app.get(`/group/:groupId/messages`, (req, res) => {
	firebase.auth().onAuthStateChanged((user) => {
    if (user) {
    	const messageRef = fb.ref(`users/${user.uid}/groups/${req.params.groupId}/messages/`);
      	const messages = [];

 		messageRef.orderByKey().once('value', (snapshot) => {
        snapshot.forEach((childSnapShot) => {
          const message = {
            messageId: childSnapShot.key,
            messageText: childSnapShot.val().message
          };
            messages.push(message);

          });
        })
 		.then(() => {
        res.send({
          messages
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

        