const size = require('gulp-size');

const streamSize = (title) => size({
  gzip: true,
  showFiles: true,
  title: `${title}:`,
});

module.exports = streamSize;
