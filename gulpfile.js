const gulp = require('gulp');
const sass = require('gulp-sass');
const server = require('browser-sync').create();


gulp.task('style', function(){
  return gulp.src('sass/style.scss')
      .pipe(sass())
      .pipe(gulp.dest('css'))
      .pipe(server.stream());
});

gulp.task('serve', function(){
  server.init({
    server: "./",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch('sass/**/*.{scss, sass}', ['style'])
});
