/**
 * scripts.js
 * @name - 'scripts'
 * @task - Compiles & uglifies AMD modules
 */

'use strict';

const argv   = require('yargs').argv;
const gulp    = require('gulp');
const named   = require('vinyl-named');
const pack    = require('webpack'); // Reference for plugins
const reload  = require('browser-sync').reload;
const size    = require('gulp-size');
const uglify  = require('gulp-uglify');
const webpack = require('webpack-stream');

const config  = require('../config').scripts;

let pluginArray = [new pack.optimize.DedupePlugin()];

if (argv.production) {

  pluginArray.push (new pack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }));

  pluginArray.push (new pack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }));

}

gulp.task('scripts', function() {
  return gulp.src(config.bundles)
    .pipe(named())
    .pipe(webpack({
      cache: true,
      devtool: !argv.production ? '#source-map' : false,
      module: {
        loaders: [
          { test: /\.(js|jsx)$/, exclude: [/node_modules/, /bower_components/], loaders: ['babel-loader']}
        ]
      },
      externals: config.externals,
      plugins: pluginArray
    }))
    .pipe(gulp.dest(config.dest))
    .pipe(size({
      title: 'JS:',
      showFiles: true
    }))
    .pipe(reload({stream:true}));
});
