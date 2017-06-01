const path = require('path');
const webpack = require('webpack');
const debug = process.env.NODE_ENV !== 'production';

let config = {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 5a5222c40ad3aa257050eefb27abcf15c6be3595
   entry: './client/index.js',
	
    output: {
      path: path.join(__dirname, './client/public'),
      publicPath: '/',
<<<<<<< HEAD
=======
   entry: './client/index.jsx',
	
   output: {
      path: path.join(__dirname, 'public'),
      publicPath: '/client',
>>>>>>> fb950ca865531320c85b57abb71633b9d726a2e4
=======

>>>>>>> 5a5222c40ad3aa257050eefb27abcf15c6be3595
      filename: 'bundle.js',
   },
  
   devServer: {
      contentBase: './client/public',
      inline: true,
      hot: true,
      port: 8000
   },
  
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        
            query: {
               presets: ['es2015', 'react', 'stage-0'],
               plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
            }
         }
      ]
   },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: debug ? [] : [
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
}

module.exports = config;
