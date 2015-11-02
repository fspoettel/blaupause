/**
 * gulpfile.js
 * @task - loads all tasks from './gulp/tasks'
 */

'use strict';

const argv       = require('yargs').argv;
const gutil      = require('gulp-util');
const requireDir = require('require-dir');

const isProduction =  (argv.production || argv.p);

if (isProduction) {
  gutil.log(gutil.colors.bold.bgGreen('Production Mode'));
}

requireDir('./gulp/tasks', { recurse: true });
