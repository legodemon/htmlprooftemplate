module.exports = function (gulp, plugins, pathEntries, pathOut, pathDest) {
    return function () {
        const opt = {
                entries: [pathEntries],
                transform: [[plugins.babelify.configure({optional: ["es7.classProperties"]})], ['envify', {NODE_ENV: 'development'}]],
                debug: true,
                cache: {},
                packageCache: {},
                standalone: 'BaliPlatform'
            },
            deumdify = require('deumdify'),
            b = plugins.browserify(opt);

        b.plugin(deumdify);

        plugins.browserifyIncremental(b, {cacheFile: './browserify-cache.json'});

        return b.bundle()
            .pipe(plugins.vinylSourceStream(pathOut))
            .pipe(gulp.dest(pathDest));
    }
};