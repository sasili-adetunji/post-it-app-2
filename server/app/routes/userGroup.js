import express from 'express'; 
import firebase from 'firebase';
const app = express();
const fb = firebase.database();



const userGroup = (app, db) => {
	app.get('/user/groups', (req, res) => {
	firebase.auth().onAuthStateChanged((user) => {
    if(user) {
    	const groupRef = firebase.database().ref(`users/${user.uid}/groups/`);
      const groups = [];

 		groupRef.orderByKey().once('value', (snapshot) => {
        snapshot.forEach((childSnapShot) => {
          const group = {
            groupId: childSnapShot.key,
            groupname: childSnapShot.val().groupInfo.groupname
          }
          groups.push(group)
        })
      })
 		.then(() => {
        res.send({
          groups
        })
      }) 
 		.catch((error) => {
        res.status(500).send({
          message: `Error occurred ${error.message}`,
        })
      })
  }
  else{
    res.status(403).send({
          message: 'You are not signed in right now! '
        });
  }
 	})
})
}
    

 
export default userGroup;

        