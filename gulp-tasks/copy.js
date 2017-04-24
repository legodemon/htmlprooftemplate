module.exports = function (gulp, pathIn, pathOut) {
    return function () {
        return gulp.src(pathIn).pipe(gulp.dest(pathOut))
    }
};
