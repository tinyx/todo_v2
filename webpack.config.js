var path = require('path');
var config = {
  entry: path.resolve(__dirname, 'src/index'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  resolve: {
      extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/, 
        loader: "style-loader!css-loader"
      }
    ]
  }
};

module.exports = config;
