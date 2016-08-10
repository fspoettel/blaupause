
const argv = require('yargs').boolean('p').argv;
const browserSync = require('../config').browserSync.instance;
const del = require('del');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const gutil = require('gulp-util');
const named = require('vinyl-named');
const pack = require('webpack'); // Reference for plugins
const streamSize = require('../util/streamsize');
const webpack = require('webpack-stream');
const cfg = require('../config').scripts;

const isProduction = argv.p;

const webpackConfig = {
  cache: true,
  devtool: !isProduction ? 'source-map' : false,
  externals: cfg.externals,
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel',
      },
    ],
  },
  plugins: [new pack.optimize.DedupePlugin()],
  quiet: isProduction,
};

if (isProduction) {
  webpackConfig.plugins.push(new pack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  }));

  webpackConfig.plugins.push(new pack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
  }));
}

/**
 * @name - scripts:build
 * @task - Builds javascript with Webpack
 */
gulp.task('scripts:build', () =>
  gulp.src(cfg.bundles)
    .pipe(named())
    .pipe(webpack(webpackConfig))
    .on('error', function logError(error) {
      gutil.log(gutil.colors.red(error.message));
      this.emit('end');
    })
    .pipe(gulp.dest(cfg.destinationPath))
    .pipe(gulpif(isProduction, streamSize('JS')))
    .pipe(browserSync.stream({ match: '**/*.js' }))
);

/**
 * @name - scripts:clean
 * @task - Removes the javascript build directory
 */
gulp.task('scripts:clean', () =>
  del([
    `${cfg.destinationPath}/**`,
    `!${cfg.destinationPath}`,
    `!${cfg.destinationPath}/vendor/**`,
  ]));
