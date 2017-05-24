
let db;
const config = {
    apiKey: "AIzaSyAPkaQ0wLHWqT_u20dcXLqPENZsmea7mgs",
    authDomain: "postit-335c1.firebaseapp.com",
    databaseURL: "https://postit-335c1.firebaseio.com",
    projectId: "postit-335c1",
    storageBucket: "postit-335c1.appspot.com",
    messagingSenderId: "63329792793"
  };

//const express = require('express');
const firebase     = require('firebase');
//const app = express();
//const admin = require('firebase-admin');
//var apiRouter = express.Router()

    
firebase.initializeApp(config);
  module.exports = db;



// url : "https://postit-335c1.firebaseio.com",