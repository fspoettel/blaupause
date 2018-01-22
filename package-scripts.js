/* eslint-disable */

const privateTask = script => ({
  hiddenFromHelp: true,
  script
})

const publicTask = (script, description) => ({
  description,
  script
})

module.exports = {
  scripts: {
    browserSync: privateTask('browser-sync start --config bs-config.js'),
    css: {
      compile: privateTask('postcss -d public/static/css src/css/*.css'),
      build: privateTask('cross-env NODE_ENV=production nps css.compile'),
      lint: publicTask(
        'stylelint src/**/*.css',
        'Lints CSS with stylelint + stylelint-config-standard'
      ),
      watch: privateTask('nps css.compile && chokidar "src/css/**/*.css" -c "nps css.compile"'),
    },
    hugo: {
      compile: privateTask('hugo --config=hugo/config.yml -s hugo -d ../public -b "http://localhost:3000" -D'),
      build: privateTask('hugo --config=hugo/config.yml -s hugo -d ../public'),
      watch: privateTask('nps hugo.compile && chokidar "hugo" -c "nps hugo.compile"')
    },
    js: {
      compile: privateTask('webpack --config webpack.config.js'),
      build: privateTask('cross-env NODE_ENV=production nps js.compile'),
      watch: privateTask('nps js.compile'),
      lint: publicTask(
        'eslint "src/js"',
        'Lints JS with eslint + eslint-config-airbnb'
      )
    },
    svg: {
      compile: privateTask('svg-sprite -s --ss sprite.symbol.svg --symbol-dest . -D public/static/svg -l info "src/img/**/*.svg"'),
      build: privateTask('nps svg.compile'),
      watch: privateTask('nps svg.compile && chokidar "src/img/**/*.svg" -c "nps svg.compile"')
    },
    sw: {
      build: privateTask('workbox generate:sw')
    },
    build: {
      clean: publicTask(
        'rimraf public',
        'Removed the /public folder.'
      ),
      default: publicTask(
        'nps build.clean && concurrently "nps css.build" "nps js.build" "nps hugo.build" "nps svg.build" && nps sw.build',
        'Builds a production version of all assets and a service worker.'
      )
    },
    start: {
      dev: privateTask('nps build.clean && concurrently "nps css.watch" "nps js.watch" "nps hugo.watch" "nps svg.watch" "nps browser-sync"'),
      staging: publicTask(
        'cross-env NODE_ENV=staging nps start.dev',
        'Starts a dev-server with production versions of all assets (but no service-worker)'
      )
    },
    default: publicTask(
      'nps start.dev',
      'Starts a development server with BrowserSync that auto-reloads + compiles all changes. Sourcemaps are enabled.'
    ),
    lint: publicTask(
      'concurrently "nps css.lint" "nps js.lint"',
      'Lints CSS & JS.'
    ),
    test: publicTask(
      'jest',
      'Runs Jest unit tests for JS'
    )
  },
};
