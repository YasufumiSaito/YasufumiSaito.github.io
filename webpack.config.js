const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const cssPath = '../css/style.css';
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: `${__dirname}/js/`,
    filename: 'bundle.js'
  },
  devServer: {
  	port:8000,
    compress:true,
    watchContentBase:true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['env', {'modules': false}]
              ]
            }
          }
        ],
        exclude: /node_modules/,
      },
      {
	    test: /\.scss$/,
	    loader: ExtractTextPlugin.extract({
	      fallback: 'style-loader',
	      use: [{
	        loader: 'css-loader',
	        options: { sourceMap: true }
	      },
	      {
	        loader: 'sass-loader',
	        options: { sourceMap: true }
	      }]
	    })
	  }
    ]
  },
  devtool:'source-map',
  plugins:[
    // new UglifyJSPlugin({ sourceMap: true }),
  	new ExtractTextPlugin(cssPath)
  ]
};
