const path = require('path');
const DotEnvPlugin = require('dotenv-webpack');
const webpack = require('webpack');

require('dotenv').config();
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


const config = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'client/public'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  node: {
    fs: 'empty',
    net: 'empty',
    dns: 'empty',
    tls: 'empty',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new DotEnvPlugin({
      path: './.env',
      safe: false,
    }),
    new UglifyJSPlugin({
      sourceMap: true,
    }),
  ],
};
module.exports = config;
