
import express from 'express';
import firebase from 'firebase';
import bodyParser from 'body-parser';
import db from './server/config/db';
const app         = express();


const port = 8000 || process.env.PORT ;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 


import routes from './server/app/routes/index'
routes(app, {});

app.listen( port, ()=> {
	console.log('You are listening on ' + port)
});
