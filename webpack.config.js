const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const {
  optimize: { ModuleConcatenationPlugin },
} = require('webpack');

const isProd = process.env.NODE_ENV;

const productionPlugins = isProd
  ? [
    new ModuleConcatenationPlugin(),
    new UglifyJsPlugin({
      parallel: true,
      ecma: 8,
    }),
  ]
  : [];

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'public/static/js'),
    filename: '[name].bundle.js',
    publicPath: '/static/js',
  },
  module: {
    rules: [
      {
        exclude: /(node_modules)/,
        test: /\.js?$/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: productionPlugins,
  devtool: isProd ? false : ' cheap-module-eval-source-map ',
  target: 'web',
  stats: 'normal',
  watch: true,
};
