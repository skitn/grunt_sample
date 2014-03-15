module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {
      pc: {
        options: {
          sassDir: './public_html/pc/common/sass',
          cssDir: './public_html/pc/common/css_min',
          outputStyle : 'compress',
          noLineComments: true,
          force: true
        }
      }
    },
    cssmin: {
      pc: {
        expand: true,
        cwd   : './public_html/pc/common/css',
        src: ['./**/*.css'],
        dest  : './public_html/pc/common/css_min',
      }
    },
    esteWatch: {
      options: {
        dirs: ['./public_html/pc/common/sass/**/', './public_html/pc/common/css/**/']
      },
      scss: function(filepath){
        return ["compass"]
      },
      css: function(filepath){
        return ["cssmin"]
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-este-watch');
  grunt.registerTask('default', ['compass', 'cssmin']);
}
