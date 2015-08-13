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

gulp.task('styles', function() {
  gulp.src(config.src)
    .pipe(gulpif(!argv.production, sourcemaps.init()))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie >= 10', 'Android >= 4.0'],
    }))
    .pipe(gulpif(argv.production, cssmin()))
    .pipe(gulpif(!argv.production, sourcemaps.write('./maps')))
    .pipe(gulp.dest(config.dest))
    .pipe(reload({stream:true}))
    .pipe(size({
      showFiles: true,
      title: 'CSS:',
    }));
});
