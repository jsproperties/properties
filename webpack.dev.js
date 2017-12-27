const merge = require('webpack-merge');

const commonConfig = require('./webpack.common.js');

module.exports = merge(commonConfig, {
  output: {
    filename: 'properties-parser.js',
    sourceMapFilename: 'properties-parser.map',
  },
  devtool: 'source-map',
});
