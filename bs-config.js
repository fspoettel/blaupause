/* eslint-disable */
/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */
module.exports = {
  "files": [
    'public/**/*.html',
    'public/static/**/*.{jpg,png,gif,svg}',
    'public/static/css/**/*.css',
    'public/static/css/**/*.css',
    'public/static/js/**/*.js'
  ],
  "server": {
    "baseDir": "public"
  },
  "open": false,
  "port": 3000,
  "middleware": [require('compression')()],
  "notify": false,
  "injectChanges": true,
  "reloadThrottle": 300
};
