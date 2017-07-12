// resetpassword route

import express from 'express';
import firebase from 'firebase';
import db from '../../config/db';
const app = express();

const resetPassword = (app, db) => {
  app.post('/user/reset', (req, res) => {
       
      // using firebase signout methods
      email = req.body.email

  firebase.auth.sendPasswordResetEmail(email)
  .then(() => {
            // redirect to home page after signout
   res.send({
      message: 'An email has been sent to your email'
    })
  })    
  .catch((err) => {
    res.send({
    	message: 'There appear to be ' + err.message + ' with signing out'
    });
  })

})

}
export default resetPassword;