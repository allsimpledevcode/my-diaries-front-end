const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'production',

  plugins: [
    new webpack.DefinePlugin({
      API_URL: JSON.stringify("https://demo-rest-api-nodejs.herokuapp.com")
    })
  ]
});