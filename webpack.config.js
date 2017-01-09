/**
* @fileoverview webpack config
* @name webpack.config.js
* @author Yoshiya Ito <myon53@gmail.com>
  */
const webpack = require('webpack');

module.exports = {
  context: __dirname + '/client',
  entry: ['babel-polyfill', './index.js'],
  output: {
    path: __dirname + '/public',
    filename: './bundle.js',
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],

  // JSX ES2015
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
