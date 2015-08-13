/**
 * config.js
 * @exports {object} - Configuration
 */

'use strict';

const dest     = './public';
const hostname = 'localhost';
const port     = 3000;
const src      = './_src';

module.exports = {

  browserSync: {
    /** Use 'proxy' to reload existing servers */
    proxy: hostname + ':' + port,
    /** Port for browserSync-proxy */
    port: 4000,
  },

  images: {
    src: src + '/img/*',
    dest: dest + '/img',
  },

  modernizr: {
    dest: dest + '/js/vendor',
    settings: {
      options: [
          'setClasses',
          'addTest',
          'html5printshiv',
          'testProp',
          'fnBind',
      ],
      tests: [],
    },
  },

  scripts: {
    bundles: [src + '/js/*.js'],
    watch: [src + '/js/**/*.{js,jsx}'],
    dest: dest + '/js',
    externals: {
      jquery: 'jQuery',
    },
  },

  server: {
    /** Disable if you don't want to run an Express-server (e.g. use MAMP) */
    run: true,
    /** Needed for clean task & server */
    dest: dest,
    port: port,
    file: 'server.js',
    /** Tell nodemon which directories/files to watch */
    watch: ['server.js'],
    /** Needed for BrowserSync to work properly with server restarts */
    reloadDelay: 500,
  },

  styles: {
    src: src + '/scss/*.{sass,scss}',
    watch: [src + '/scss/**/*.{sass,scss}'],
    dest: dest + '/css',
  },

  views: {
    index: src + '/*.*',
    dest: dest,
  },

};
