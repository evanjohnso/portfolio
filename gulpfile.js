var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var pkg = require("./package.json");
var uglify = require("gulp-uglify");

// Copy vendor files from /node_modules into /vendor
// NOTE: requires `npm install` before running!
gulp.task("copy", function() {
  gulp
    .src([
      "node_modules/bootstrap/dist/**/*",
      "!**/npm.js",
      "!**/bootstrap-theme.*",
      "!**/*.map"
    ])
    .pipe(gulp.dest("vendor/bootstrap"));

  gulp
    .src([
      "node_modules/jquery/dist/jquery.js",
      "node_modules/jquery/dist/jquery.min.js"
    ])
    .pipe(gulp.dest("vendor/jquery"));
});

// Default task
gulp.task("default", ["copy"]);

// Configure the browserSync task
gulp.task("browserSync", function() {
  browserSync.init({
    server: {
      baseDir: ""
    }
  });
});

// Dev task with browserSync
gulp.task("serve", ["browserSync", "minifyScripts"], function() {
  // Reloads the browser whenever HTML or CSS files change
  gulp.watch("js/*.js", browserSync.reload);
  gulp.watch("css/*.css", browserSync.reload);
  gulp.watch("*.html", browserSync.reload);
});

gulp.task("minifyScripts", function() {
  return gulp
    .src("./build/js/scripts.js")
    .pipe(uglify())
    .pipe(gulp.dest("./build/js/"));
});
