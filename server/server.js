

const express     = require('express');
const firebase    = require('firebase');
const bodyParser  = require('body-parser');
const db          = require('./config/db');
const app         = express();
const port = 8000 || process.env.PORT ;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 


require('./app/routes/index')(app, {});

app.listen( port, ()=> {
	console.log('You are listening on ' + port)
});
