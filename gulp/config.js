/**
 * config.js
 * @exports {object} - Configuration
 */
const dest = './public';
const hostname = 'localhost';
const port = 3000;
const src = './_src';

module.exports = {

  browserSync: {
    notify: false,
    /** Port for browserSync-proxy */
    port: 4000,
    /** Use 'proxy' to reload existing servers */
    proxy: `${hostname}:${port}`,
  },

  copy: {
    bundles: [
      {
        src: `${src}/fonts/*.{ttf,woff,woff2}`,
        dest: `${dest}/css/fonts`,
      },
      {
        src: `${src}/*.*`,
        dest,
      },
    ],
  },

  images: {
    src: `${src}/img/*{.jpg,.jpeg,.png,.gif}`,
    dest: `${dest}/img`,
    settings: {
      progressive: true,
    },
  },

  modernizr: {
    dest: `${dest}/js/vendor`,
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
    bundles: [`${src}/js/*.js`],
    dest: `${dest}/js`,
    watch: [`${src}/js/**/*.{js,jsx}`],
    externals: {
      jquery: 'jQuery',
    },
  },

  server: {
    /** Disable if you don't want to run an Express-server (e.g. use Apache) */
    run: true,
    file: 'server.js',
    /** Needed for clean task & server */
    dest,
    port,
    /** Needed for BrowserSync to work properly with server restarts */
    reloadDelay: 500,
    /** Tell nodemon which directories/files to watch */
    watch: ['server.js'],
  },

  styles: {
    src: `${src}/scss/*.{sass,scss}`,
    dest: `${dest}/css`,
    watch: [`${src}/scss/**/*.{sass,scss}`],
    autoprefixer: {
      browsers: ['last 2 versions', 'ie >= 10', 'Android >= 4.4'],
    },
  },

  svg: {
    src: `${src}/img/svg/**/*.svg`,
    dest: `${dest}/img/svg`,
  },
};
