
import express from 'express';
import firebase from 'firebase';
import bodyParser from 'body-parser';
import db from './config/db';
const app         = express();


const port = 8000 || process.env.PORT ;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POSTS');
  res.setHeader('Access-Control-Allow-Headers',
  'X-Requested-With,content-type, Authorization');
  next();
});

import routes from './app/routes/index'
routes(app, {});

app.listen( port, ()=> {
	console.log('You are listening on ' + port)
});
