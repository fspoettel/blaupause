/**
 * styles.js
 * @name - 'styles'
 * @task - Compiles, prefixes & minfies SCSS-files
 */

const argv = require('yargs').boolean('p').argv;
const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync');
const cssnano = require('cssnano');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const postcss = require('gulp-postcss');
const reload = browserSync.reload;
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const streamSize = require('./util/streamsize');

const config = require('../config').styles;
const isProduction = argv.p;

const processors = [autoprefixer(config.autoprefixer)];

if (isProduction) {
  processors.push(cssnano());
}

gulp.task('styles', () => gulp.src(config.src)
  .pipe(gulpif(!isProduction, sourcemaps.init()))
  .pipe(sass().on('error', sass.logError))
  .pipe(postcss(processors))
  .pipe(gulpif(!isProduction, sourcemaps.write('./maps')))
  .pipe(gulp.dest(config.dest))
  .pipe(reload({ stream: true }))
  .pipe(gulpif(isProduction, streamSize('CSS')))
);
