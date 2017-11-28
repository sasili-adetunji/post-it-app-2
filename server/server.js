 // server file

import express from 'express';
import expressValidator from 'express-validator';
import path from 'path';
import bodyParser from 'body-parser';
import routes from './app/routes/index';


const app = express();
const port = process.env.PORT || 8000;

// parse incoming request data available ubder req.body property
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// express validator to validate input
app.use(expressValidator());
app.use(express.static(path.join(__dirname, '../client/public')));

// all the routes
routes(app);

app.listen(port, () => {
  console.log(`You are listening on ${port}`); // eslint-disable-line
});

export default app;
