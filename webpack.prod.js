const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

const commonConfig = require('./webpack.common.js');

module.exports = merge(commonConfig, {
  output: {
    filename: 'properties.min.js',
    sourceMapFilename: 'properties.min.map',
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    new UglifyjsWebpackPlugin({
      sourceMap: true,
    }),
  ],
});
