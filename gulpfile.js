/**
 * gulpfile.js
 * @task - loads all tasks from './gulp/tasks'
 */

'use strict';

const argv       = require('yargs').argv;
const chalk      = require('chalk');
const requireDir = require('require-dir');

const isProduction =  (argv.production || argv.p);

if (isProduction) {
  console.log(chalk.bold.bgGreen('Production Mode'));
}

requireDir('./gulp/tasks', { recurse: true });
