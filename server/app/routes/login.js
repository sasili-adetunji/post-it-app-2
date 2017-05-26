 import express from 'express'; 
 import firebase from 'firebase';
 import db from '../../config/db';

const app = express();
const login = (app, db) => {
  app.post('/login', (req, res) => {
    const email = req.body.email,
      password = req.body.password;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(res.redirect('/dashboard'));
    res.json({ message: 'Success: A user has successfuly sign in.' })
    .catch((err) => {
        console.log(err);
      res.json({ message: 'Error: The email or password of the user is invalid' } );
    });
  });  
};
export default login;