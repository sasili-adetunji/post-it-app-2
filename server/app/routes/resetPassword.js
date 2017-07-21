// resetpassword route

import express from 'express';
import firebase from 'firebase';
import db from '../../config/db';
const app = express();

const resetPassword = (app, db) => {
  app.post('/user/reset', (req, res) => {
       
     const email = req.body.email

  firebase.auth().sendPasswordResetEmail(email)
  .then(() => {

   res.send({
      message: 'An email has been sent to your email'
    })
  })    
  .catch((err) => {
    res.send({
    	message: 'There appear to be ' + err.message 
    });
  })

})

}
export default resetPassword;