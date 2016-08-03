# blaupause ![Travis](https://img.shields.io/travis/fspoettel/blaupause.svg?maxAge=2592000?style=flat-square)

> hugo + gulp + webpack + sass starter kit

## Installation

This project depends on [Hugo](https://gohugo.io) and [Node](http://nodejs.org/) being installed on your machine. To initiate a new site, do:

 1. `git clone https://github.com/felics/blaupause project`
 2. `cd project`
 3. `npm install`
 4. `gulp`

## In the box

### Static Site Generator

 - [Hugo*](https://gohugo.io) with a basic [HTML5 Boilerplate](https://html5boilerplate.com/) layout
 - [BrowserSync](http://www.browsersync.io/)

### JS

 - [Webpack](http://webpack.github.io)
 - [Babel](babeljs.io)
 - [ESLint](http://eslint.org/)
 - [Customizable Modernizr](http://modernizr.com/)


### SCSS

 - [SASS](http://sass-lang.com/)
 - [Autoprefixer](https://github.com/postcss/autoprefixer)
 - [Stylelint](http://stylelint.io/)
 - (Optional) SASS boilerplate based on [SASS Guidelines](https://sass-guidelin.es/) + [Sanitize.css](https://github.com/10up/sanitize.css) with a couple of useful mixins

### And the rest

 - [Gulp](http://gulpjs.com/)-based builds
 - [Travis](https://travis-ci.org)-based tests
 - [EditorConfig](http://editorconfig.org/)
 - `Sourcemaps` in non-production mode
 - `Production`-flag for smaller builds

\* Due to the structure of this repository, Hugo themes are not supported.

## Available Tasks:

 - `gulp` - Builds the project files, starts BrowserSync and server(if wanted) and watches for changes to project files.
 - `gulp build` - (Re-)Builds project
 - `gulp build:clean` - Cleans destination folder
 - `gulp copy:build` - Copies arbitrary files to a destination
 - `gulp images:build` - Optimize images
 - `gulp modernizr:build` - Build a custom Modernizr (Add feature-tests in `./gulp/config.js`)
 - `gulp styles:build` - Builds styles
 - `gulp scripts:build` - Builds scripts
 - `gulp svg:build` - Optimizes SVGs and creates a symbol-sprite

## Production Flag:

You can generate a production-ready build (no drafts, no sourcemaps, `NODE_ENV = "production"` for JS builds, uglified code) by passing `-p` to any gulp task.

## Adding tasks:

You can add tasks by creating a `.js`-file in `.internals/gulp/tasks` that contain a task, a reference to `gulp` and the `gulp`-modules you want to use. You can then add it to the run-sequence in `build`.
