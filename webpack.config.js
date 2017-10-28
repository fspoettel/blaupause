const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const {
  EnvironmentPlugin,
  optimize: { ModuleConcatenationPlugin },
} = require('webpack');

const env = process.env.NODE_ENV;

const isProd = env === 'production';
const isStaging = env === 'staging';
const optimizeBuild = isProd || isStaging;

const productionPlugins = [];

if (optimizeBuild) {
  productionPlugins.push(
    new ModuleConcatenationPlugin(),
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      uglifyOptions: {
        ecma: 8,
      },
    }),
  );
}

if (isProd) {
  productionPlugins.push(new EnvironmentPlugin(['NODE_ENV']));
}

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
  devtool: !optimizeBuild && ' cheap-module-eval-source-map ',
  target: 'web',
  stats: 'normal',
  watch: !isProd,
};
