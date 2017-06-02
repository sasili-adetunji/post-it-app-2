const path = require('path');
const webpack = require('webpack');
const debug = process.env.NODE_ENV !== 'production';
const ExtractTextPlugin = require('extract-text-webpack-plugin');


let config = {
   entry: ['./client/index.js',
           
           ],
  
    output: {
      path: path.join(__dirname, './client/public'),
      publicPath: '/',
      filename: 'bundle.js',
   },
  
   devServer: {
      contentBase: './client/public',
      inline: true,
      hot: true,
      port: 8000
   },
   node: {
    fs: 'empty',
    net: 'empty'
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
         },
          {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
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
  new ExtractTextPlugin({ filename: 'style.css', disable: false, allChunks: true }),
  ],
}

module.exports = config;