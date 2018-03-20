# Change Log
All notable changes to this project will be documented in this file.

# [3.5.0] 2018-03-20

- Use `networkFirst` offline strategy
- Upgrade to webpack@4
- Make `start:staging` and `build:clean` available as npm scripts
- Internal: Ensure builds are working for PRs via Travis CI

# [3.4.1] 2018-01-22

- Move npm scripts to `package-script.js` via nps
- Use autoprefixer in development builds
- Update jest to latest major version

# [3.3.0] 2017-11-27

- Add netlify deploys
- Add netlifycms documentation
- Add automatic Hugo installs
- Upgrade to Babel@7
- Add theme-color meta tag to baseof-template

# [3.2.0] 2017-11-04

- Move partial `image/svg` to `media/svg`
- Use `_default/baseof.html` in favour of partials

# [3.1.0] 2017-10-29

- Add PWA service worker, automatic offline support for build-artifacts
- Fix production variables not being exposed in JS builds
- Improve staging environment
- Remove dependency on yarn, go with npm instead

# [3.0.0] 2017-09-23

- Move from gulp-based build process to npm scripts
- Remove support for sass in favor of CSS with postcss
- Remove copy task in favor of Hugo `/static` folder
- Remove support for custom modernizr build
- Update folder structure
- Update console wrapper
- Use Hugo static folder

# [2.5.1] 2017-06-23

- Update dependencies
- Remove Hagrid
- Log Hugo errors
- Update Autoprefixer preset

# [2.5.0] 2017-04-25

- Fix Hugo v0.20.x by moving layouts to `hugo`

# [2.4.1] 2017-04-10

- Improve index page title

# [2.4.0] 2017-03-21

- Use gzip for production BS server
- Use jest, improve test setup
- Use native es2015 modules with Webpack
- Improve Hugo watching

## [2.3.0] 2017-03-10

- Use yarn
- Update Webpack to 2.x
- Improve hugo boilerplate
- Add RSS feeds
- Improve JS code
- Improve system font stack

## [2.2.2] 2016-09-19

- Add debug util

## [2.2.1] 2016-09-10

- Improved templates
- Improved `gh-pages` styling
- Improved docs
- Fixed linting not triggering broken builds

## [2.2.0] 2016-09-10

- Added automatic travis `gh-pages` builds

## [2.1.1] 2016-08-31

- Remove .html-endings from partials

## [2.1.0] 2016-08-19

- Moved `./hugo/layouts` to `./src/layouts` to better divide content and display
- Renamed `hugo.host` to `hugo.devHost` in `./internals/gulp/config`
-  Modernizr is loaded async

## [2.0.3] - 2016-08-12

- Added minimal default templates
- Added `image/svg`-partial
- Fixed `$text-font-stack` not applying
- Fixed running above webroot
- Improved production build documentation

## [2.0.2] - 2016-08-10

- Added a changelog
- Added jQuery recipe to readme
- Fix potential double slashes after host by enforcing trailing slashes in Hugo

## [2.0.1] - 2016-08-10

- Merged `browserSync` and `browserSyncConfig` in `gulp/config`. Use a single browserSync instance
- Improved host & port handling. Full support for `Process.ENV.port`
- Added clean tasks for static content
- Use `child_process.exec` directly (Remove `child_process_promise` dependency)
- Use absolute paths for static files
- Updated partial structure

## [2.0.0] - 2016-08-03

- Added static site generation with the Hugo
- Added a license file
- Simplified `editorconfig`
- Set `max-len` for javascript files to 120 (was 80)
- Cleaned up gulp tasks
- Moved static files from `/app` to `/src`
- Moved internal utils to `gulp/utils`
- Moved `/gulp` to `internal/gulp`
- Updated README with changes
- Statamic 1.x branch is no longer maintained
- `bower.json` is no longer included
