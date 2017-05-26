// server file

import express from 'express';
import firebase from 'firebase';
import bodyParser from 'body-parser';
import db from './config/db';
const app         = express();


const port = process.env.PORT || 8000;

// use body parser to allow parsing of incoming request bodies 
//available under the req.body property.

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 


// import the index file which has all the routes
import routes from './app/routes/index'
app.get('/*', (req, res) => {
	res.send({ message: 'Welcome to PostIp Chat App'})
});

routes(app, {});

app.listen( port, ()=> {
	console.log('You are listening on ' + port)
});
