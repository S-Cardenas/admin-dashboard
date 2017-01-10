let path = require("path");
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: "./src/app/entry.jsx",
  output: {
    path: path.join(__dirname, 'src'),
    filename: "js/bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("css/styles.css", { allChunks: true })
  ],
  devtool: 'source-maps',
  resolve: {
    extensions: ["", ".js", ".jsx", ".css", ".scss"]
  },
  watch: true
};
