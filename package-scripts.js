/* eslint-disable max-len */
const { join } = require('path');

const prod = str => `cross-env NODE_ENV=production ${str}`;

const esc = str => `"${str}"`;

const watch = (task, dir) => `${task} && chokidar ${esc(dir)} -c ${esc(task)}`;

const priv = script => ({
  hiddenFromHelp: true,
  script,
});

const pub = (script, description) => ({
  description,
  script,
});

const abs = to => join(__dirname, to);
const rel = to => join(process.cwd(), to);

const cssTasks = (src, dest) => {
  const getTask = (isProd) => {
    const plugins = 'autoprefixer postcss-import';
    const prodPlugins = `${plugins} cssnano`;
    return `postcss -d ${dest} ${esc(join(src, '*.css'))} -u ${isProd ? prodPlugins : plugins} ${isProd ? '--no-map' : ''}`;
  };

  return {
    compile: priv(getTask(false)),
    build: priv(getTask(true)),
    lint: pub(
      `stylelint ${esc(join(src, '**/*.css'))}`,
      'Lints CSS with stylelint + stylelint-config-standard',
    ),
    watch: priv(watch('nps css.compile', join(src, '**/*.css'))),
  };
};

const hugoTasks = (src, dest) => {
  const localAddr = 'http://localhost:3000';
  const cfg = join(src, 'config.yml');

  return {
    compile: priv(`hugo --config=${cfg} -s ${esc(src)} -d ${esc(dest)} -b ${esc(localAddr)} -D`),
    build: priv(`hugo --config=${cfg} -s hugo -d ${esc(dest)}`),
    watch: priv(watch('nps hugo.compile', src)),
  };
};

const jsTasks = src => ({
  compile: priv(`webpack --config ${esc(abs('webpack.config.js'))}`),
  build: priv(prod('nps js.compile')),
  watch: priv('nps js.compile'),
  lint: pub(
    `eslint ${esc(src)}`,
    'Lints JS with eslint + eslint-config-airbnb',
  ),
});

const svgTasks = (src, dest) => ({
  compile: priv(`svg-sprite -s --ss sprite.symbol.svg --symbol-dest . -l info -D ${esc(dest)} ${esc(join(src, '**/*.svg'))}`),
  build: priv('nps svg.compile'),
  watch: priv(watch('nps svg.compile', join(src, '**/*.svg'))),
});


const relSrc = rel('src');
const relDest = rel('public');

module.exports = {
  scripts: {
    browserSync: priv(`browser-sync start --config "${abs('bs-config.js')}"`),
    sw: priv(`workbox copyLibraries ${relDest} && cp ${join(relSrc, 'sw.js')} ${join(relDest)}`),
    css: cssTasks(join(relSrc, 'css'), join(relDest, 'static/css')),
    hugo: hugoTasks(rel('hugo'), relDest),
    js: jsTasks(join(relSrc, 'js')),
    svg: svgTasks(join(relSrc, 'img'), join(relDest, 'static/svg')),
    build: {
      clean: pub(
        `rimraf ${relDest}`,
        'Removes the build folder.',
      ),
      default: pub(
        'nps build.clean && concurrently "nps css.build" "nps js.build" "nps hugo.build" "nps svg.build" && nps sw',
        'Builds a production version of all assets and a service worker.',
      ),
    },
    start: {
      dev: priv('nps build.clean && concurrently "nps css.watch" "nps js.watch" "nps hugo.watch" "nps svg.watch" "nps browser-sync"'),
      staging: pub(
        'cross-env NODE_ENV=staging nps start.dev',
        'Starts a dev-server with production versions of all assets (but no service-worker)',
      ),
    },
    default: pub(
      'nps start.dev',
      'Starts a development server with BrowserSync that auto-reloads + compiles all changes. Sourcemaps are enabled.',
    ),
    lint: pub(
      'concurrently "nps css.lint" "nps js.lint"',
      'Lints CSS & JS.',
    ),
    test: pub(
      'jest',
      'Runs Jest unit tests for JS',
    ),
  },
};
