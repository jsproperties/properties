const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

const commonConfig = require('./webpack.common.js');

module.exports = merge(commonConfig, {
  mode: 'production',
  output: {
    filename: 'properties.min.js',
    sourceMapFilename: 'properties.min.map',
  },
  devtool: 'source-map',
  plugins: [
    new UglifyjsWebpackPlugin({
      sourceMap: true,
    }),
  ],
});
