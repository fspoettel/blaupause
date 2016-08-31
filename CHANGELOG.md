# Change Log
All notable changes to this project will be documented in this file.

## [2.1.1] 2016-08-31
### Changed
- Remove .html-endings from partials

## [2.1.0] 2016-08-19
### Changed
- Moved `./hugo/layouts` to `./src/layouts` to better divide content and display
- Renamed `hugo.host` to `hugo.devHost` in `./internals/gulp/config`
-  Modernizr is loaded async

## [2.0.3] - 2016-08-12
### Added
- Added minimal default templates
- Added `image/svg`-partial

### Fixed
- Fixed `$text-font-stack` not applying
- Fixed running above webroot

### Changed
- Improved production build documentation

## [2.0.2] - 2016-08-10
### Added
- Added a changelog
- Added jQuery recipe to readme

### Fixed
- Fix potential double slashes after host by enforcing trailing slashes in Hugo

## [2.0.1] - 2016-08-10

### Changed
- Merged `browserSync` and `browserSyncConfig` in `gulp/config`. Use a single browserSync instance
- Improved host & port handling. Full support for `Process.ENV.port`
- Added clean tasks for static content
- Use `child_process.exec` directly (Remove `child_process_promise` dependency)
- Use absolute paths for static files
- Updated partial structure

## [2.0.0] - 2016-08-03

### Added
- Added static site generation with the Hugo
- Added a license file

### Changed
- Simplified `editorconfig`
- Set `max-len` for javascript files to 120 (was 80)
- Cleaned up gulp tasks
- Moved static files from `/app` to `/src`
- Moved internal utils to `gulp/utils`
- Moved `/gulp` to `internal/gulp`
- Updated README with changes

### Deprecated
- Statamic 1.x branch is no longer maintained

### Removed
- `bower.json` is no longer included
