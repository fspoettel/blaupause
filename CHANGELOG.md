# Change Log
All notable changes to this project will be documented in this file.

## [2.0.2] - 2016-08-10
### Added
- Add a changelog
- Add jQuery recipe to readme
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
