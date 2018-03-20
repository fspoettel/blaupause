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

const env = process.env.NODE_ENV;

const isStaging = env === 'staging';

module.exports = {
  "files": [
    'public/**/*.html',
    'public/static/**/*.{jpg,png,gif,svg}',
    'public/static/css/**/*.css',
    'public/static/js/**/*.js'
  ],
  "injectChanges": true,
  "middleware": isStaging ? [require('compression')()] : [],
  "notify": false,
  "open": false,
  "port": isStaging ? 3003 : 3000,
  "reloadThrottle": 300,
  "server": {
    "baseDir": "public"
  },
};
