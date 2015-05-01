/**
 * Created by Administrator on 2015/4/22 0022.
 */
var gulp = require("gulp")
    , uglify = require('gulp-uglify')
    , concat = require("gulp-concat")
    , path = require("path");


var root = __dirname + "/";
console.log("root : %s", root);


gulp.task("buildTo:angularAMD-empty", function (cb) {
    return gulp.src([
        path.join(root, "src/Array.prototype.each.js")
    ])
        .pipe(concat("jsext.js"))
        //.pipe(uglify())
        .pipe(gulp.dest(path.join(root, "../angularAMD-empty/app/js/lib/")));
});

gulp.task("build", function (cb) {
    return gulp.src(root + "src/**")
        .pipe(concat("jsext.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest(path.join(root, "dist")));
});

gulp.task("watch:src", function (cb) {
    var basePath = path.join(root, "src");
    var watch = gulp.watch(basePath + "/**", [
        "buildTo:angularAMD-empty"
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