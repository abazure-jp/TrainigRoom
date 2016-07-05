import gulp from 'gulp';
import riot from 'gulp-riot';

gulp.task('riot', () => {
    gulp.src('sample_list.tag')
    .pipe(riot())
    .pipe(gulp.dest('dest'));
});
