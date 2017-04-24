module.exports = function (gulp, plugins, path) {
    return function () {
        return gulp.src(path, {read: false}).pipe(plugins.clean());
    }

};
