var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')({
        DEBUG: false, // when set to true, the plugin will log info to console. Useful for bug reporting and issue debugging
        pattern: ['*'], // the glob(s) to search for
        scope: ['dependencies', 'devDependencies', 'peerDependencies'], // which keys in the config to look within
        lazy: true // whether the plugins should be lazy loaded on demand
    });

var path = {
    src: {
        html: 'src/index.html',
        js: {
            dir: 'src/js/',
            app: 'src/js/app.js'
        },
        style: {
            sassListen: 'src/sass/**/*.scss',
            sassBundle: 'src/sass/app.scss'
        },
        img: 'src/svg/**/*.*',
        fonts: 'src/fonts/*.*'
    },
    build: {
        dir: 'build',
        styles: 'build/styles/',
        scripts: 'build/js/'
    },
    modules: 'node_modules/'
};

gulp.task('clean', require('./gulp-tasks/clean')(gulp, plugins, path.build.dir));
gulp.task('copy-html', require('./gulp-tasks/copy-html')(gulp, plugins, path.src.html, path.build.dir));
gulp.task('copy-js', require('./gulp-tasks/copy')(gulp, path.src.js.app, path.build.scripts));
// gulp.task('compile-js', require('./gulp-tasks/compile-js')(gulp, plugins, path.src.js.bootstrap, path.bundle, path.dev.scripts));
gulp.task('compile-style-sass', require('./gulp-tasks/compile-style-sass')(gulp, plugins, path.src.style.sassBundle, path.build.styles));
gulp.task('compile-fonts', require('./gulp-tasks/fonts')(gulp, plugins, path.src.fonts, path.styles));

gulp.task('webserver-local', require('./gulp-tasks/webserver-local')(gulp, plugins));
gulp.task('webserver-ip', require('./gulp-tasks/webserver-ip')(gulp, plugins));

gulp.task('watcher', function () {
    gulp.watch(path.src.html, ['copy-html']);
    gulp.watch(path.src.js.dir + '/**/*.*', ['copy-js']);
    gulp.watch(path.src.style.sassListen, ['compile-style-sass']);
    gulp.watch(path.src.img, ['compile-style']);
    gulp.watch(path.src.loader, ['compile-loader']);
});

gulp.task('default', function () {
    plugins.runSequence(
        'clean',
        ['copy-html', 'copy-js'],
        ['compile-style-sass'],
        'webserver-local',
        'watcher'
    )
});
