module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ["./public_html/pc/common/css_min", "./docs/styleguide/pc/"],
    compass: {
      pc: {
        options: {
          sassDir: './public_html/pc/common/sass',
          cssDir: './public_html/pc/common/css',
          outputStyle : 'compact',
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
    styledocco: {
      pc: {
        options: {
          name: 'Style Guide',
        },
        files: {
          './docs/styleguide/pc': './public_html/pc/common/css/**/'
        }
      }
    },
    esteWatch: {
      options: {
        dirs: ['./public_html/pc/common/sass/**/', './public_html/pc/common/css/**/'],
        livereload: {
          enabled: false
        }
      },
      scss: function(filepath){
        return ["compass", "cssmin"]
      },
      css: function(filepath){
        return ["cssmin"]
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-styledocco');
  grunt.loadNpmTasks('grunt-este-watch');
  grunt.registerTask('default', ['clean', 'compass', 'cssmin', 'styledocco']);
}
