# blaupause ![Build Status](https://travis-ci.org/fspoettel/blaupause.svg?branch=master)

> Build process & application architecture for web projects

## Installation

 1. `git clone https://github.com/felics/blaupause project`
 2. `cd project`
 3. `npm install`
 4. `gulp`

## What's in the box...

 - [BrowserSync](http://www.browsersync.io/)
 - [SASS](http://sass-lang.com/) with [Autoprefixer](https://github.com/postcss/autoprefixer) & Minification & [Stylelint](http://stylelint.io/)
 - [Webpack](http://webpack.github.io) & [Babel](babeljs.io) - ES6 / JSX-support & easy bundling
 - [EditorConfig](http://editorconfig.org/) & [Eslint Config](http://jscs.info/overview.html)
 - [HTML5 Boilerplate](https://html5boilerplate.com/) + [Customizable Modernizr](http://modernizr.com/)
 - [Express](http://expressjs.com/)-server with automatic restarts
 - Sourcemaps for JS & CSS files
 - Production-flag for builds
 - (Optional) SASS boilerplate based on [SASS Guidelines](https://sass-guidelin.es/) & [Sanitize.css](https://github.com/10up/sanitize.css)
 - (Branch) [Statamic](http://statamic.com)-specific branch with a build-process tailored to developing themes

## Available Tasks:

 - `gulp` - Builds the project files, starts BrowserSync and server(if wanted) and watches for changes to project files.
 - `gulp build` - (Re-)Builds project
 - `gulp clean` - Cleans destination folder
 - `gulp images` - Optimize images
 - `gulp modernizr` - Build a custom Modernizr (Add tests in './gulp/config.js')
 - `gulp styles` - Builds styles
 - `gulp scripts` - Builds scripts
 - `gulp svg` - Optimizes svgs and creates a symbol-sprite
 - `gulp views` - Copies static files in "\_src" to dest. For more elaborate view-tasks (templating / nested folder / Static Site Generators), modify the task

## Production Flag:

You can generate a production-ready build (no sourcemaps, `NODE_ENV = "production"` for JS builds, minified/ulgified code) via passing `-p` to any gulp task.

## Adding tasks:

You can add tasks by creating a .js-file in `./gulp/tasks` that contain a task and a reference to `gulp` and the `gulp`-modules you want to use. You can then add it to the run-sequence in "build".
