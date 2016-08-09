/**
 * config.js
 * @exports {object} - Configuration for Gulp Tasks
 */

const destinationPath = 'public';
const assetPath = `${destinationPath}/static`;
const sourcePath = 'src';

const port = 4000;

const browserSync = require('browser-sync').create();

const browserSyncConfig = {
  files: false,
  notify: false,
  port,
  reloadOnRestart: true,
  server: destinationPath,
};

const copy = {
  bundles: [
    {
      sourcePath: `${sourcePath}/webfonts/*.{ttf,woff,woff2}`,
      destinationPath: `${assetPath}/styles/webfonts`,
    },
    {
      sourcePath: `${sourcePath}/*.*`,
      destinationPath,
    },
  ],
};

const hugo = {
  sourcePath: 'hugo',
  destinationPath,
  port,
  watch: ['hugo/**/*.{html,md,yaml}', 'hugo/*.yaml'],
};

const images = {
  sourcePath: `${sourcePath}/images/**/*.{jpg,jpeg,png,gif}`,
  destinationPath: `${assetPath}/images`,
  // Imagemin-Settings
  settings: {
    progressive: true,
  },
};

const modernizr = {
  destinationPath: `${assetPath}/scripts/vendor`,
  // Customizr Settings
  fileName: 'modernizr-custom.js',
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
};

const scripts = {
  bundles: [`${sourcePath}/scripts/*.js`],
  destinationPath: `${assetPath}/scripts`,
  watch: [`${sourcePath}/scripts/**/*.{js,jsx}`],
  externals: {
    // jquery: 'jQuery',
  },
};

const styles = {
  sourcePath: `${sourcePath}/styles/*.{sass,scss}`,
  destinationPath: `${assetPath}/styles`,
  watch: [`${sourcePath}/styles/**/*.{sass,scss}`],
  autoprefixer: {
    browsers: ['last 2 versions', 'ie >= 10', 'Android >= 4.4'],
  },
};

const svg = {
  sourcePath: `${sourcePath}/images/**/*.svg`,
  destinationPath: `${assetPath}/svg`,
};

module.exports = {
  browserSync,
  browserSyncConfig,
  copy,
  destinationPath,
  hugo,
  images,
  modernizr,
  scripts,
  styles,
  svg,
};
