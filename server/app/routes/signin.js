// login route
//using firebase authentication method

import express from 'express'; 
import firebase from 'firebase';
import db from '../../config/db';

const app = express();
const signin = (app, db) => {
  app.post('/user/signin', (req, res) => {
    const email = req.body.email,
      password = req.body.password;
    firebase.auth().signInWithEmailAndPassword(email, password)
        res.json({ message: 'Success: ' + email + ' has successfuly sign in.' })
    .catch((err) => {
    res.json({ message: 'Error: The email or password of the user is invalid' } );
    });
  });  
};
<<<<<<< HEAD
<<<<<<< HEAD:server/app/routes/signin.js
export default signin;
=======
export default signin;
>>>>>>> fb950ca865531320c85b57abb71633b9d726a2e4:server/app/routes/signin.js
=======

export default signin;


>>>>>>> 5a5222c40ad3aa257050eefb27abcf15c6be3595
