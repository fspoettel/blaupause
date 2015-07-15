/**
 * gulpfile.js
 * @task - loads all tasks from './gulp/tasks'
 */

'use strict';

const requireDir = require('require-dir');

requireDir('./gulp/tasks', { recurse: true });
