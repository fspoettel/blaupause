/**
 * styles.js
 * @name - 'styles'
 * @task - Compiles, prefixes & minfies SCSS-files
 */

'use strict';

const argv         = require('yargs').argv;
const autoprefixer = require('gulp-autoprefixer');
const browserSync  = require('browser-sync');
const cssmin       = require('gulp-minify-css');
const gulp         = require('gulp');
const gulpif       = require('gulp-if');
const reload       = browserSync.reload;
const sass         = require('gulp-sass');
const size         = require('gulp-size');
const sourcemaps   = require('gulp-sourcemaps');

const config       = require('../config').styles;
const isProduction = (argv.production || argv.p);

gulp.task('styles', function() {
  gulp.src(config.src)
    .pipe(gulpif(!isProduction, sourcemaps.init()))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie >= 10', 'Android >= 4.0'],
    }))
    .pipe(gulpif(isProduction, cssmin()))
    .pipe(gulpif(!isProduction, sourcemaps.write('./maps')))
    .pipe(gulp.dest(config.dest))
    .pipe(reload({stream:true}))
    .pipe(gulpif(isProduction, size({
      gzip: true,
      showFiles: true,
      title: 'CSS:',
    })));
});
