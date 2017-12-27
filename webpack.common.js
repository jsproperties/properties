const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: 'PropertiesParser',
    libraryTarget: 'umd',
  },
  plugins: [
  ],
  module: {
    rules: [
      {
        test: /\.pegjs$/,
        use: [
          'babel-loader',
          'pegjs-loader',
        ],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
      }
    ],
  },
};
