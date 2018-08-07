/////////////////////////////////////////////////////////
// required
////////////////////////////////////////////////////////

var gulp = require('gulp'),
    browserSync = require('browser-sync').create();

///////////////////////////////////////////////
// Scripts Task
////////////////////////////////////////////////


///////////////////////////////////////////////
// Scripts Watch
////////////////////////////////////////////////

gulp.task('default', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        port: 8080,
        ws: true
    });
    gulp.watch('*.html').on('change', browserSync.reload)
    gulp.watch('css/*.css').on('change', browserSync.reload)
    gulp.watch('js/*.js').on('change', browserSync.reload)
});