// server file

import express from 'express';
import expressValidator from 'express-validator';
import path from 'path';
import bodyParser from 'body-parser';
import routes from './app/routes/index';


const app = express();
const port = process.env.PORT || 8000;

// use body parser to allow parsing of incoming request bodies
// available under the req.body property.

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressValidator());
app.use(express.static(path.join(__dirname, '../client/public')));

routes(app);

app.listen(port, () => {
  console.log(`You are listening on ${port}`); // eslint-disable-line
});

export default app;
