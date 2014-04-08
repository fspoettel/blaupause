
// *    Watch Test Task
// * ---------------------

// * Dependencies

var gulp       = require("gulp"),
    config     = require("../config"),
    livereload = require("gulp-livereload");

// * Paths

var jsWatch    = config.jsWatch,
    sassWatch  = config.sassWatch,
    lrWatch    = config.lrWatch;

module.exports = function(){
    var server = livereload();
    gulp.watch(sassWatch, ["sassTestBuild"]);
    gulp.watch(jsWatch, ["scripts"]);
    gulp.watch(lrWatch).on('change', function(file) {
        server.changed(file.path);
    });
};
