const gulp = require('gulp'),
	  browserSync = require('browser-sync'),
	  sass = require('gulp-sass')(require('sass')),
	  cleanCSS = require('gulp-clean-css'),
	  autoprefixer = require('gulp-autoprefixer'),
	  rename = require("gulp-rename"),
      imagemin = require('gulp-imagemin'),  // npm i gulp-imagemin@7.1.0
      htmlmin = require('gulp-htmlmin');

gulp.task('server', function() {
    browserSync({
        server: {
            baseDir: "dist" // запускаем из чистовой папки
        }
    });
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('styles', function() {
    return gulp.src("src/sass/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("dist/css")) // после обработки складываем в чистовую папку
        .pipe(browserSync.stream());
});

gulp.task('watch', function () {
    gulp.watch("src/sass/**/*.+(scss|sass|css)", gulp.parallel('styles')); 
    // css добавили на всякий случай
    gulp.watch("src/*.html").on('change', gulp.parallel('html'));
});

gulp.task('html', function () {
    return gulp.src("src/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("dist/"));
});

// копируем все скрипты
gulp.task('scripts', function () {
    return gulp.src("src/js/**/*.js")
        .pipe(gulp.dest("dist/js"));
});

// копируем все шрифты
gulp.task('fonts', function () {
    return gulp.src("src/fonts/**/*")
        .pipe(gulp.dest("dist/fonts"));
});

// копируем все иконки
gulp.task('icons', function () {
    return gulp.src("src/icons/**/*")
        .pipe(gulp.dest("dist/icons"));
});

// копируем мейлер
gulp.task('mailer', function () {
    return gulp.src("src/mailer/**/*")
        .pipe(gulp.dest("dist/mailer"));
});

// 
gulp.task('images', function () {
    return gulp.src("src/img/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/img "));
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'scripts', 'fonts', 'icons', 'mailer', 'images', 'html'));