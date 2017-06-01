// signout route

import express from 'express';
import firebase from 'firebase';
import db from '../../config/db';
const app = express();

const signout = (app, db) => {
  app.post('/signout', (req, res) => {
       
      // using firebase signout methods

  firebase.auth().signOut()
  .then(() => {
            // redirect to home page after signout
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 5a5222c40ad3aa257050eefb27abcf15c6be3595
    res.send({
      message: 'You have signed out f the Appliction'
    })
  })
  .catch((err) => {
    res.json({
      message: 'There appear to be ' + err.message + ' with signing out'
<<<<<<< HEAD
=======
  	res.send({
  		message: 'You have signed out f the Appliction'
  	})
  })
  .catch((err) => {
    res.json({
    	message: 'There appear to be ' + err.message + ' with signing out'
>>>>>>> fb950ca865531320c85b57abb71633b9d726a2e4
=======

>>>>>>> 5a5222c40ad3aa257050eefb27abcf15c6be3595
    });
  })

})

}
export default signout;