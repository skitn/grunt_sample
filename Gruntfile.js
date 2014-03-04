module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
      compress: {
        files: {
          'min.css': ['css/**/*.css'],
          'min_pc.css': ['css/pc/css/*.css'],
          'min_pc_fuge.css': ['css/pc/css/fuge.css'],
        }
      }
    },
    watch: {
      files: ['css/**/*.css'],
      tasks: ['cssmin']
    },
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['watch']);
}
