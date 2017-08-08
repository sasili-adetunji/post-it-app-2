// server file

import express from 'express';
import firebase from 'firebase';
import bodyParser from 'body-parser';
import db from './config/db';
import path from 'path';
import routes from './app/routes/index';


const app = express();


const port = process.env.PORT || 8000;

// use body parser to allow parsing of incoming request bodies
// available under the req.body property.

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// import the index file which has all the routes

// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "../client/public"));
// });

app.use(express.static(path.join(__dirname, '../client/public')));

routes(app, {});

app.listen(port, () => {
  console.log(`You are listening on ${port}`);
});

export default app;
