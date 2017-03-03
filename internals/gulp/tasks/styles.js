const argv = require('yargs').boolean('p').argv;
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const del = require('del');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('../config').browserSync.instance;
const cfg = require('../config').styles;
const streamSize = require('../util/streamsize');

/**
 * @name - styles:build
 * @task - compiles, prefixes & minfies SCSS-files
 */

/**
 * Production Mode
 * if set, the css output will be optimized
 * @type {Boolean}
 */
const isProduction = argv.p;

/**
 * Processors that will be passed to postcss
 * @type {Array}
 */
const processors = [
  autoprefixer(cfg.autoprefixer),
];

const productionProcessors = [
  ...processors,
  cssnano(),
];

gulp.task('styles:build', () =>
  gulp.src(cfg.sourcePath)
    .pipe(gulpif(!isProduction, sourcemaps.init()))
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(isProduction ? productionProcessors : processors))
    .pipe(gulpif(!isProduction, sourcemaps.write('./maps')))
    .pipe(gulpif(isProduction, streamSize('CSS')))
    .pipe(gulp.dest(cfg.destinationPath))
    .pipe(browserSync.stream({ match: '**/*.css' }))
);

/**
 * @name - styles:clean
 * @task - removes the css build directory
 */
gulp.task('styles:clean', () =>
  del([`${cfg.destinationPath}/**`]));
