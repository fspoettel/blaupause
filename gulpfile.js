/**
 * gulpfile.js
 * @task - loads all tasks from "./gulp/tasks"
 */

var requireDir = require("require-dir");

requireDir('./gulp/tasks', { recurse: true });
