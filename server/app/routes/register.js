

const express = require('express');
const firebase     = require('firebase');
const db =  require('../../config/db');
const app = express();

module.exports = function(app, db) {
    app.post('/register', (req, res) => {
    let full_name = req.body.full_name,
        email =     req.body.email,
        password = req.body.password;
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res.redirect('/dashboard'))
        res.json({message: "Success: A user has been successfuly registered."})

        .catch((err) => {
            let errorCode = err.code;
            let errorMessage = err.message;
            console.log(err);
            res.json({message: "Error in registration. Check your details again"})
        })
    })

}