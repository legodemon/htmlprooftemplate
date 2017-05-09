module.exports = function (gulp, plugins) {
    var ip = require('ip');
    return function () {
        return gulp.src('./')
            .pipe(plugins.webserver({
                host: ip.address(),
                livereload: true,
                directoryListing: true,
                open: false
            }));
    }
};
