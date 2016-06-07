# blaupause ![Build Status](https://travis-ci.org/fspoettel/blaupause.svg?branch=master)

> Build process & application architecture for web projects

## Installation

 1. `git clone https://github.com/felics/blaupause project`
 2. `cd project`
 3. `npm install`
 4. `gulp`

## What's in the box...

 - [Webpack](http://webpack.github.io) + [Babel](babeljs.io)
 - [SASS](http://sass-lang.com/) + [Autoprefixer](https://github.com/postcss/autoprefixer)
 - [EditorConfig](http://editorconfig.org/) + [Eslint](http://jscs.info/overview.html) + [Stylelint](http://stylelint.io/)
 - [Customizable Modernizr](http://modernizr.com/)
 - [BrowserSync](http://www.browsersync.io/)
 - Autorestarting [Koa](http://koajs.com/)-server
 - Sourcemaps for .js and .scss
 - Production-flag for smaller builds
 - [Travis](https://travis-ci.org) Configuration
 - (Optional) SASS boilerplate based on [SASS Guidelines](https://sass-guidelin.es/) + [Sanitize.css](https://github.com/10up/sanitize.css)
 - HTML-Skelethon based on [HTML5 Boilerplate](https://html5boilerplate.com/)
 - :arrow_forward: [Statamic](http://statamic.com)-specific branch with a build-process tailored to developing themes

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

You can generate a production-ready build (no sourcemaps, `NODE_ENV = "production"` for JS builds, uglified code) by passing `-p` to any gulp task.

## Adding tasks:

You can add tasks by creating a .js-file in `./gulp/tasks` that contain a task and a reference to `gulp` and the `gulp`-modules you want to use. You can then add it to the run-sequence in "build".
