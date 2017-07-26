const argv = require('yargs').boolean('p').argv;
const del = require('del');
const gulp = require('gulp');
const runSequence = require('run-sequence');
const destinationPath = require('../config').destinationPath;

const isProduction = argv.p;

const buildTasks = [
  'build:clean',
  ['copy:build', 'hugo:build', 'images:build', 'modernizr:build', 'scripts:build', 'styles:build', 'svg:build']
];

const postBuildTasks = (isProduction) ? ['html-hint', 'hash', 'hash-replace', 'html-min'] : ['html-hint'];

/**
 * @name build
 * @task builds the project
 */
gulp.task('build', (done) => {
  runSequence.apply(this, [...buildTasks, ...postBuildTasks, done]);
});

/**
 * @name build:clean
 * @task cleans the build directory
 */
gulp.task('build:clean', () =>
  del([destinationPath]));
