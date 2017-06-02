const path = require('path');
const webpack = require('webpack');
const debug = process.env.NODE_ENV !== 'production';

let config = {
   entry: './client/index.js',
  
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
