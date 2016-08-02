import config                      from '../config';
import changed                  from 'gulp-changed';
import gulp                         from 'gulp';
import setEnvironment       from '../util/setEnvironment';
import imagemin                from 'gulp-imagemin';
import browserSync           from 'browser-sync';

setEnvironment();

gulp.task('copy:Images', function() {

  return gulp.src(config.images.src)
    .pipe( changed(config.images.dest) ) // Ignore unchanged files
    .pipe( production(imagemin()) )
    //.pipe( production(global.cachebust.resources()) )
    .pipe( gulp.dest(config.images.dest) )
    .pipe( browserSync.stream() );

});
