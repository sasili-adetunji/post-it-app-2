// server file

import express from 'express';
import webpack from 'webpack';
import expressValidator from 'express-validator';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import path from 'path';
import bodyParser from 'body-parser';
import routes from './app/routes/index';

let configPath;
const environment = process.env.NODE_ENV || 'production';
if (environment === 'production') {
  configPath = '../webpack.config.prod';
} else {
  configPath = '../webpack.config';
}
const config = require(configPath);

const app = express();
const port = process.env.PORT || 8000;
const compiler = webpack(config);
const publicPath = express.static(path.join(__dirname, '../client/public'));


app.use(webpackMiddleware(compiler, {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  stats: { colors: true }
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressValidator());
app.use(webpackHotMiddleware(compiler));
app.use('/', publicPath);

routes(app);
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});
app.listen(port, () => {
  console.log(`You are listening on ${port}`); // eslint-disable-line
});

export default app;
