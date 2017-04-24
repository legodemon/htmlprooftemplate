module.exports = function (gulp, plugins, pathIn, pathOut) {
    return function () {
        gulp.src(pathIn)
            .pipe(plugins.replace('src="/', 'src="'))
            .pipe(plugins.replace('href="/', 'href="'))
            .pipe(gulp.dest(pathOut));
    }
};
