//使用包
var gulp = require("gulp");

//scss转换成css
var sass = require('gulp-sass');
//页面刷新
var browserSync = require('browser-sync');

//定义任务 sass任务
gulp.task("sass", function() {
    //导入文件
    gulp.src("../sass/*.scss")
        //转代码
        .pipe(sass().on('error', sass.logError))
        //导出文件
        .pipe(gulp.dest("../css/"))
})
//修改文件即刷新浏览器
gulp.task('myserver', () => {
    // 开启服务器
    browserSync({
        server: '../../src',
        // 端口
        port: 10087,
        //需要监听的文件路径
        files: ['../sass/*.scss']
    });

    // 监听sass文件修改
    gulp.watch('../sass/*.scss', ['sass']);
   
});
//默认处理的任务序列
gulp.task('default', ['sass','myserver']);