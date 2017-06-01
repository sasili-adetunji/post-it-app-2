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
    res.send({
      message: 'You have signed out f the Appliction'
    })
  })
  .catch((err) => {
    res.json({
      message: 'There appear to be ' + err.message + ' with signing out'
=======
  	res.send({
  		message: 'You have signed out f the Appliction'
  	})
  })
  .catch((err) => {
    res.json({
    	message: 'There appear to be ' + err.message + ' with signing out'
>>>>>>> fb950ca865531320c85b57abb71633b9d726a2e4
    });
  })

})

}
export default signout;