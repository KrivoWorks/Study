// Julp
// Настройка Gulp начинается с установки Node.js
// https://nodejs.org

// в терминале VsCode - npm init
// на список вопросов можно ответить и донастроить проект либо скипнуть
// после в корневой папке появится файл package.json

// ===================================================================

// npm install gulp-cli -g (в терминале VsCode)
// npm - обращение к менеджеру пакетов
// install - команда, чтобы установить данный пакет
// gulp-cli - пакет позволяющий работать с gulp с помощью терминала
// -g - флаг обозначающий, что будет устанавливать глобально
// если установлено глобально, то мы сможем работать с этим пакетом из любой папки
// без этого флага установится только в этот проект
// при первой установке, лучше установить глобально а затем локально
// npm install gulp-cli --save-dev
// в package.json появится новая запись - "devDependencies": {"gulp-cli": "^2.3.0"}
// теперь локальный проект знает, что в него установлен такой пакет

// npm install gulp --save-dev

// npm i sass --save-dev
// новый формат, ниже старый, уточнить нужен ли
// npm i gulp-sass --save-dev

// npm install -g browser-sync
// снчала устанавливаем глобально, затем установим локально
// после глобальной установки запись в package.json не добавляется
// может появиться ошибка на MacOs - нужно запустить от имени администратора
// sudo npm install -g browser-sync
// в терминале VsCode - npm i browser-sync --save-dev
// i -сокращений от install

// npm i gulp-autoprefixer --save-dev
// подставляет вендорные префиксы в css код, там где это необходимо

// npm i gulp-clean-css --save-dev
// сжимает css и немного оптимизирует код

// npm i gulp-rename --save-dev

// ===================================================================

// Задача по созданию компилятора кода sass
const gulp = require('gulp'),
	  browserSync = require('browser-sync'),
	  sass = require('gulp-sass')(require('sass')),
	  cleanCSS = require('gulp-clean-css'),
	  autoprefixer = require('gulp-autoprefixer'),
	  rename = require("gulp-rename");

// Настроим первую задачу - сервер
gulp.task('server', function() {
    browserSync({
        server: {
            baseDir: "src"
        }
    });
	// Задача следящая за изменениями файлов
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('styles', function() {
    return gulp.src("src/sass/**/*.+(scss|sass)")
	// берём файлы по определённому пути
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		// запускаем компилятор кода и указываем тип стиля - compressed
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("src/css")) // скомпилированный код помещаем по указанному пути
        .pipe(browserSync.stream()); // перезапускаем браузер
});

gulp.task('watch', function() {
    gulp.watch("src/sass/**/*.+(scss|sass)", gulp.parallel('styles'));
})

// запускаем задачи с помощью ещё одной задачи
gulp.task('default', gulp.parallel('watch', 'server', 'styles'));

// чтобы запустить задачу по умолчанию достаточно просто написать gulp
// запустится default
// чтобы остановить сервер, нужно нажать ctrl C

// чтобы запустить только определённую задачу - gulp server
// запустится только сервер

// при переносе файлов gulp в другой проект нужно прописать команду - npm i