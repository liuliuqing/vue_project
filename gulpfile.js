//引入模块
var gulp=require('gulp');
var uglify=require('gulp-uglify');
var htmlmin=require('gulp-htmlmin');
var cssmin=require('gulp-cssmin');
var imagemin=require('gulp-imagemin');
var concat=require('gulp-concat');
var babel = require('gulp-babel');//识别es6语法转为es5
var es2015Preset = require('babel-preset-es2015');

//编写任务
/* --------------------   压缩css文件   -------------------- */
gulp.task('compress:css',function(){
    gulp.src('src/assets/css/*.css')//配置要压缩的文件源路径
        .pipe(cssmin()) //该任务调用的模块
        .pipe(gulp.dest('src/style/css'))  //生成文件保存的路径
});
/* --------------------   压缩js文件（首先将es6语法转化为es5语法）   -------------------- */
gulp.task('es6to5', function() {
    return gulp.src('src/assets/js/*.js') //配置要压缩的文件源路径
        .pipe(babel({presets: [es2015Preset]}))
        .pipe(gulp.dest('src/style/js/'));
});
gulp.task('compress:js', ['es6to5'], function() {
    return gulp.src('./src/assets/app.js')
        .pipe(uglify({
            mangle: false,//类型：Boolean 默认：true 是否修改变量名
            compress: true,//类型：Boolean 默认：true 是否完全压缩
        }))
        .pipe(gulp.dest('src/style/js'));
});
/* --------------------   压缩img文件（可能会失真）   -------------------- */
gulp.task('compress:img',function(){
    gulp.src('src/assets/image/*.png')
        .pipe(imagemin())
        .pipe(gulp.dest('src/style/image'))
});
/* --------------------   压缩html文件   -------------------- */
gulp.task('compress:html',function(){
    gulp.src('*.html')
        .pipe(htmlmin({
            removeComments: true,       //删除注释
            collapseWhitespace: true   //删除空格
        }))
        .pipe(gulp.dest('/'))
});
//监听模块 ---（就是监听某一个文件发生改变的时候知道自动执行相应的压缩任务）
//gulp.watch('src/demo/*.html',['compress:html']);
//注册默认任务 --- （在当前目录下执行“gulp”指令即可）
gulp.task('default',['compress:css','compress:js','compress:img','compress:html']);
