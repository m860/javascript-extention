/**
 * Created by Administrator on 2015/4/22 0022.
 */
var gulp = require("gulp")
    , uglify = require('gulp-uglify')
    , concat = require("gulp-concat")
    , header = require('gulp-header')
    , dateFormat = require('dateformat')
    , path = require("path");


var root = __dirname + "/";
console.log("root : %s", root);

var banner = [
    "/*"
    , "* Author : Jean"
    , "* Email  : jean.ma.1986@gmail.com"
    , "* Url    : https://github.com/m860/jsext"
    , "* Date   : " + dateFormat(Date.now())
    , "*/\n"
].join("\n");

gulp.task("buildTo:angularAMD-empty", function (cb) {
    return gulp.src([
        path.join(root, "src/Array.prototype.each.js")
        ,path.join(root, "src/Function.prototype.bind.js")
    ])
        .pipe(concat("jsext.js"))
        .pipe(uglify())
        .pipe(header(banner))
        .pipe(gulp.dest(path.join(root, "../angularAMD-empty/app/js/lib/")));
});

gulp.task("build", function (cb) {
    return gulp.src(root + "src/**")
        .pipe(concat("jsext.min.js"))
        .pipe(uglify())
        .pipe(header(banner))
        .pipe(gulp.dest(path.join(root, "dist")));
});

gulp.task("watch:src", function (cb) {
    var basePath = path.join(root, "src");
    var watch = gulp.watch(basePath + "/**", [
        "buildTo:angularAMD-empty"
        , "build"
    ]);
    watch.on("change", function (event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
    return cb();
});

gulp.task("default", [
    "buildTo:angularAMD-empty"
    , "build"
    , "watch:src"
]);