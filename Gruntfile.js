module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {
      pc: {
        options: {
          sassDir: './public_html/pc/common/sass',
          cssDir: './public_html/pc/common/css_min',
          outputStyle : 'compress',
          noLineComments: true
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
    watch: {
      files: ['./public_html/pc/common/sass/**/*.scss', './public_html/pc/common/css/**/*.css'],
      tasks: ['compass', 'cssmin']
    },
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['compass', 'cssmin']);
}
