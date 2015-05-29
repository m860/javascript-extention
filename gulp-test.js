/*!
 * Created by Jean on 5/29/2015.
 * 
 * email:mahai_1986@126.com
 *
 */
var gulp = require("gulp")
    , mocha = require("gulp-mocha");


gulp.task("test-all", function (cb) {
    return gulp.src("test/*.js", {read: false})
        .pipe(mocha({reporter: "spec"}));
});


gulp.task("test", ["test-all"], function (cb) {
    gulp.watch("test/*.js", function (evt) {
        gulp.src(evt.path)
            .pipe(mocha({reporter: "spec"}));
    });

    gulp.watch("src/*.js", ["test-all"]);

    return cb();
});