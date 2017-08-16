// var grunt=require('grunt');

// //配置
// grunt.config.init({
//     pkg: grunt.file.readJSON('gruntPackage.json'),
//     'create-windows-installer': {
//         x64:{
//             version:'1.0.0',
//             authors:'xsc',
//             projectUrl:'',
//             appDirectory:'./firstApp/firstApp-win32-x64',//要打包的输入目录
//             outputDirectory:'./firstApp',//grunt打包后的输出目录
//             exe:'firstApp.exe',
//             description:'firstApp',
//             setupIcon:"./icon.ico",
//             noMsi:true
//         }
//     }
// });

// //加载任务
// grunt.loadNpmTasks('grunt-electron-installer');

// //设置为默认
// grunt.registerTask('default', ['create-windows-installer']);
// 



module.exports = function(grunt) {
  grunt.initConfig({
    'create-windows-installer': {
      ia32: {
        appDirectory: './firstApp-win32-x64',
        outputDirectory: './firstApp',
        name: 'MyApp',
        description: 'MyApp',
        authors: 'xsc',
        exe: 'MyApp.exe'
      }
    }
  });

  grunt.loadNpmTasks('grunt-electron-installer');
};