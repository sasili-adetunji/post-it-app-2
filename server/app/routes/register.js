// signin route
// using firebase authentication method

import express from 'express'; 
import firebase from 'firebase';
import db from '../../config/db';
const app = express();
const fb = firebase.database();
const usersRef = fb.ref("users");


const register = (app, db) => {
    app.post('/register', (req, res) => {
    let userName = req.body.userName,
        email =     req.body.email,
        password = req.body.password;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      let user = {};
      user.name = req.body.userName;
      user.email =req.body.email;
      // save the information in database
        usersRef.push({
          userName: req.body.userName,
          email: req.body.email,
      })    
    .then((user) => {
      res.json({message: "Success: A user has been successfuly registered."})
    })
        
    .catch((err) => {
      res.json({message: "Error in registration. Check your details again"})
    })
  })

}
export default register;
