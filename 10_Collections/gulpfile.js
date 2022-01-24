const path = require('node:path');
const del = require('del');
const gulp = require('gulp');
const debug = require('gulp-debug');
const concat = require('gulp-concat');
const copy = require('gulp-copy');
const through = require('through2');
const fileInclude = require('gulp-file-include');
const dartSass = require('sass');
const gulpSass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const ts = require('gulp-typescript')
const sourcemaps = require('gulp-sourcemaps')

const sass = gulpSass(dartSass);

const SRC = './src';
const BUILD = './build';
const PUBLIC = './public';

const paths = {
    build: {
        root: `${BUILD}/`,
        html: `${BUILD}/`
    },
    src: {
        ts: `${SRC}/ts/index.ts`,
        public: `${PUBLIC}/**/*`,
    },
    compileWatch: {
        ts: `${SRC}/ts/**/*.ts`,
        img: `${SRC}/img/**/*`,
        html: `${SRC}/html/*.html`,
    },
    reloadWatch: {
        js: `${BUILD}/**/*.js`,
        html: `${BUILD}/*.html`,
    },
};

function verify() {
    const write = (file, enc, cb) => {
        console.log('file', file.path);
        cb(null, file);
    };

    const end = (cb) => {
        console.log('done');
        cb();
    };

    return through({objectMode: true}, write, end);
}

const tsProject = ts.createProject(path.resolve(process.cwd(), './tsconfig.json'))
const project = tsProject()

function compileTypescript() {
    return tsProject
        .src()
        .pipe(sourcemaps.init())
        .pipe(project)
        .pipe(sourcemaps.write({
            sourceRoot: (file) => {
                const sourceFile = path.join(file.cwd, 'src', file.sourceMap.file)
                return path.relative(path.dirname(sourceFile), file.cwd)
            }
        }))
        .pipe(gulp.dest(paths.build.root))
}

gulp.task('clean', (cb) => {
    del.sync([paths.build.root])
    cb()
});

gulp.task('copy', (cb) => {
    gulp
        .src(paths.src.public)
        .pipe(copy(paths.build.root, {prefix: 1}))
        .pipe(verify());
    cb()
});


gulp.task('scripts', (cb) => {
    compileTypescript()
    cb();
});

gulp.task('fileInclude', (cb) => {
    gulp.src([SRC + '/html/index.html'])
        .pipe(fileInclude({prefix: '@@', basepath: '@file'}))
        .pipe(gulp.dest(BUILD));
    cb();
});

gulp.task('build', gulp.series('clean', 'fileInclude', gulp.parallel('copy', 'scripts')));

gulp.task('watch', () => {
    gulp.watch(paths.compileWatch.html, gulp.series('fileInclude'));
    gulp.watch(paths.compileWatch.ts, gulp.series('scripts'));
});

gulp.task('serve', () => {
    browserSync.init({server: {baseDir: './build/'}});
    browserSync.watch(paths.reloadWatch.js).on('change', browserSync.reload);
    browserSync.watch(paths.reloadWatch.html).on('change', browserSync.reload);
});

gulp.task('default', gulp.series('build', gulp.parallel('watch', 'serve')));