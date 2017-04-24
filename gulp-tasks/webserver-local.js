module.exports = function (gulp, plugins) {
    return function () {
        return gulp.src('./')
            .pipe(plugins.webserver({
                host: '127.0.0.1',
                livereload: true,
                directoryListing: true,
                open: false
            }));
    }
};
