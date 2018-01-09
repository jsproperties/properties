const merge = require('webpack-merge');

const commonConfig = require('./webpack.common.js');

module.exports = merge(commonConfig, {
  output: {
    filename: 'properties.js',
    sourceMapFilename: 'properties.map',
  },
  devtool: 'source-map',
});
