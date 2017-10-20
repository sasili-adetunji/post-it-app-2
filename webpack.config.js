require('dotenv').config();
const path = require('path');
const webpack = require('webpack');

const debug = process.env.NODE_ENV !== 'production';

require('dotenv').config();

const Dotenv = require('dotenv-webpack');

const config = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'client/public'),
    publicPath: '/',
    filename: 'bundle.js',
  },

  devServer: {
    contentBase: './client/public',
    inline: true,
    hot: true,
    port: 8000
  },
  externals: {
    cheerio: 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
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
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
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
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new Dotenv({
      path: './.env',
      safe: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    // new webpack.EnvironmentPlugin(Object.keys(process.env)),
    // new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
module.exports = config;

// require('dotenv').config();
// const path = require('path');
// const webpack = require('webpack');

// const debug = process.env.NODE_ENV !== 'production';

// require('dotenv').config();

// const Dotenv = require('dotenv-webpack');

// const config = {
//   entry: './client/index.js',
//   output: {
//     path: path.join(__dirname, 'client/public'),
//     publicPath: '/',
//     filename: 'bundle.js',
//   },

//   devServer: {
//     contentBase: './client/public',
//     inline: true,
//     hot: true,
//     port: 8000
//   },
//   node: {
//     fs: 'empty',
//     net: 'empty',
//     dns: 'empty',
//     tls: 'empty'
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader',

//         query: {
//           presets: ['es2015', 'react', 'stage-0'],
//           plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
//         }
//       },
//       {

//         test: /\.scss$/,
//         exclude: /node_modules/,
//         loader: 'style-loader',
//       }
//     ]
//   },
//   resolve: {
//     extensions: ['*', '.js', '.jsx']
//   },
//   plugins: debug ? [] : [
//     new Dotenv({
//       path: './.env',
//       safe: false
//     }),
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: JSON.stringify('production'),
//       },
//     }),
//     new webpack.EnvironmentPlugin(Object.keys(process.env)),
//     new webpack.optimize.DedupePlugin(),
//     new webpack.optimize.OccurenceOrderPlugin(),
//     new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
//     new Dotenv({
//       path: './env',
//       safe: false,
//     })
//   ],
// };
// module.exports = config;

