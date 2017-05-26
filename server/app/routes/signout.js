// signout route

import express from 'express';
import firebase from 'firebase';
import db from '../../config/db';
const app = express();

module.exports = function(app, db) {
  app.post('/signout', (req, res) => {
    let full_name = req.body.full_name,
      email =     req.body.email,
      password =  req.body.password;
      
      // using firebase signout methods

  firebase.auth().signOut()
  .then(() => {
            // redirect to home page after signout
  	res.redirect('/')
  })
  .catch((err) => {
    console.log(err);
  })

})

}
