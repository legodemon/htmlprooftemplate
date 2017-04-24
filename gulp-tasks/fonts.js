module.exports = function (gulp, plugins, pathIn, pathOut) {
    return function () {
        return gulp.src(pathIn)
            .pipe(plugins.cssfont64())
            .pipe(plugins.concat('fonts.css'))
            .pipe(gulp.dest(pathOut));
    }
};