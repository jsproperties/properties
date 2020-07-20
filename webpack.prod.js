const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common.js');

module.exports = merge(commonConfig, {
  mode: 'production',
  output: {
    filename: 'properties.min.js',
    sourceMapFilename: 'properties.min.map',
  },
  devtool: 'source-map',
});
