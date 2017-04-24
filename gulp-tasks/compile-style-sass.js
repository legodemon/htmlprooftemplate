module.exports = function (gulp, plugins, pathIn, pathOut) {
    return function () {
        return gulp.src([pathIn])
            .pipe(plugins.sass({outputStyle: 'expanded', sourceComments: true}).on('error', plugins.sass.logError))
            .pipe(plugins.base64({
                extensions: ['svg', 'png', 'jpg', /\.jpg#datauri$/i],
                exclude: [/\.server\.(com|net)\/dynamic\//, '--live.jpg'],
                maxImageSize: 100 * 1024, // bytes
                debug: true
            }))
            .pipe(plugins.autoprefixer({
                browsers: ['last 3 versions'],
                cascade: false
            }))
            .pipe(gulp.dest(pathOut));
    }
};
