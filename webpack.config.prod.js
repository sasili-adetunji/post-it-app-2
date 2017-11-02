require('dotenv').config();
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


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
    port: 8000,
    historyApiFallback: true

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
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.EnvironmentPlugin(Object.keys(process.env)),
    new HtmlWebpackPlugin({
      template: './client/public/index.html'
    }),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};
module.exports = config;
