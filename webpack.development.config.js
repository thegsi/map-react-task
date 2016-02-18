var webpack = require('webpack');

module.exports = {

  entry: [
    'webpack/hot/dev-server',
    "./src/js/main.jsx"
  ],
  output: {
    path: __dirname + '/public',
    filename: "bundle.js",
    publicPath: "/public/"
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }, {
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'react-hot'
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]

};
