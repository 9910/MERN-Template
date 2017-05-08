var path = require('path');
var webpack = require('webpack');

module.exports = {
   entry: {
      app: './src/app.js'
   },
   output: {
      filename: 'public/js/bundle.js',
      sourceMapFilename: 'public/js/bundle.map'
   },
   devtool: '#source-map',
   module: {
      loaders: [
         {
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                 presets: ["react", "es2015"]
            }
         }
      ]
   }
}
