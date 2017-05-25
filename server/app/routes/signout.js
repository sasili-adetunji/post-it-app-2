

const express = require('express');
const firebase     = require('firebase');
const db =  require('../../config/db');
const app = express();



module.exports = function(app, db) {
    app.post('/signout', (req, res) => {
    let full_name = req.body.full_name,
        email =     req.body.email,
        password =  req.body.password;
        firebase.auth().signOut()
        	.then(() => {
        		res.redirect('/')
        	})
        	 .catch((err) => {
            let errorCode = err.code;
            let errorMessage = err.message;
            console.log(err);
    })

   })

}