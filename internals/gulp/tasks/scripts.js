const argv = require('yargs').boolean('p').argv;
const del = require('del');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const gutil = require('gulp-util');
const named = require('vinyl-named');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const browserSync = require('../config').browserSync.instance;
const cfg = require('../config').scripts;
const streamSize = require('../util/streamsize');

/**
 * @name - scripts:build
 * @task - builds javascript with Webpack
 */

 /**
  * Production Mode
  * if set, the js output will be optimized
  * @type {Boolean}
  */
const isProduction = argv.p;

const productionPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
  }),
];

/**
 * Webpack Config
 * @type {Object}
 */
const webpackConfig = {
  devtool: !isProduction ? 'source-map' : false,
  externals: cfg.externals,
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: isProduction ? productionPlugins : [],
};

gulp.task('scripts:build', () =>
  gulp.src(cfg.bundles)
    .pipe(named())
    .pipe(webpackStream(webpackConfig, webpack))
    .on('error', function logError(error) {
      console.log('logging');
      gutil.log(gutil.colors.red(error.message));
      this.emit('end');
    })
    .pipe(gulp.dest(cfg.destinationPath))
    .pipe(gulpif(isProduction, streamSize('JS')))
    .pipe(browserSync.stream({ match: '**/*.js' }))
);

/**
 * @name - scripts:clean
 * @task - removes the javascript build directory
 */
gulp.task('scripts:clean', () =>
  del([
    `${cfg.destinationPath}/**`,
    `!${cfg.destinationPath}`,
    `!${cfg.destinationPath}/vendor/**`,
  ]));
