/**
 * streamSize
 * prettified size reports for files
 */
const size = require('gulp-size');

const streamSize = title => size({
  gzip: true,
  showFiles: true,
  title: `${title}:`,
});

module.exports = streamSize;
