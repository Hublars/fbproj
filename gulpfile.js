var gulp       = require('gulp'),
    browserify = require('browserify'),
    watchify   = require('watchify'),
    reactify   = require('reactify'),
    source     = require('vinyl-source-stream'),
    glob       = require('glob'),
    concat     = require('gulp-concat'),
    less       = require('gulp-less'),
    gulpwatch      = require('gulp-watch'),
    livereload = require('gulp-livereload'),
    nodemon    = require('gulp-nodemon'),
    notify     = require('gulp-notify');

// npm run dev
gulp.task('dev', function() {
  livereload.listen();
  doBrowserify(true);
  compileLess(true);
  nodemon({
    script: 'web.js',
    ext: 'js less hbs',
    ignore: ['public', 'gulpfile.js'],
    env: { 'NODE_ENV': 'development' }
  }).on('restart', function() {
    // nothing happening here
  });
});

function restart() {
  gulp.src('web.js')
    .pipe(livereload())
    .pipe(notify('Reloading page, please wait...'));
}

function doBrowserify(watch) {
  var b = browserify({
    transform: [reactify],
    debug: true
  });

  if (watch) {
    b = watchify(b);
    b.on('update', function() {
      build(b);
      restart();
    });
  }

  b.add('./clientmain');
  b.exclude('react');
  b.exclude('events');
  build(b);
}

function build(b) {
  b.bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./public/build'));
}

function compileLess(watch) {
  glob('./flux/modules/**/*.less', function(err, files) {
    gulp.src(files)
      .pipe(gulpwatch(files))
      .on('change', function() {
        if (watch) {
          buildCSS(files);
          restart();
        }
      });

    buildCSS(files);
  });
}

function buildCSS(files) {
  return gulp.src(files)
  .pipe(less({ paths: [] }))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./public/build'))
    .pipe(notify('Rebuilding less, please wait...'));
}

// npm run bNodeModules
gulp.task('browserifyNodeModules', function() {
  var b = browserify();
  b.require('react');
  b.require('events');
  b.require('jquery');
  b.require('backbone');
  b.require('fluxbone');
  b.bundle()
  .pipe(source('nodeModules.js'))
  .pipe(gulp.dest('./public/build'));
});
