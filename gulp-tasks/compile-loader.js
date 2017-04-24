module.exports = function (gulp, plugins, srcLoader, pathOut) {
    return function () {
        const deumdify = require('deumdify'),
            b = plugins.browserify({
                entries: [srcLoader],
                transform: [
                    plugins.babelify.configure({optional: ["es7.classProperties"]}),
                    ['envify', {NODE_ENV: 'development'}],
                ],
                debug: true,
                cache: {},
                packageCache: {},
                standalone: 'Bali'
            });

        b.plugin(deumdify);

        return b.bundle().pipe(plugins.vinylSourceStream('bali.js')).pipe(gulp.dest(pathOut));

    }
};
