/**
 * gulpfile.js
 * @task - loads all tasks from `./internals/gulp/*`
 */
const argv = require('yargs').boolean('p').argv;
const gutil = require('gulp-util');
const requireDir = require('require-dir');

const isProduction = argv.p;

if (isProduction) {
  gutil.log(gutil.colors.bold.green('Production Mode'));
}

requireDir('./internals/gulp/tasks');
