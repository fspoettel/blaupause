const path = require('path');

const env = process.env.NODE_ENV;

const isProd = env === 'production';
const isStaging = env === 'staging';
const optimizeBuild = isProd || isStaging;

module.exports = {
  entry: './src/js/main.js',
  mode: optimizeBuild ? 'production' : 'development',
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
  devtool: !optimizeBuild && ' cheap-module-eval-source-map ',
  target: 'web',
  stats: 'normal',
  watch: !optimizeBuild,
};
