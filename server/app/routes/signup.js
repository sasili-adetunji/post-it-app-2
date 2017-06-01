// signin route
// using firebase authentication method

import express from 'express'; 
import firebase from 'firebase';
import db from '../../config/db';
const app = express();
const fb = firebase.database();
const usersRef = fb.ref("users");


const signup = (app, db) => {
    app.post('/user/signup', (req, res) => {
    let userName = req.body.userName,
        email =     req.body.email,
        password = req.body.password;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      let user = {};
      user.name = userName,
      email = email;
      usersRef.push(
      {
        username: userName,
        email: email
      })
      .then((user) => {
               res.send({ message: 'Registration successful. ' + userName + ' have successfully been registered'});
          })
      .catch((err) => {
        res.json({ message: 'Error signing in '  });
      });
    })

  }
export default signup;
