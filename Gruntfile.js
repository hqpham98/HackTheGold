module.exports = function(grunt) {

  grunt.initConfig({

    jade: {
      compile: {
        files: {
          'index.html': 'src/index.jade'
        }
      }
    },

    concat: {
      css: {
        files: {
          'css/main.css': ['css/bootstrap.css', 'css/custom.css']
        }
      }
    },

    cssmin: {
      combine: {
        files: {
          'css/main.min.css': ['css/main.css']
        }
      }
    },

    watch: {
      jade: {
        files: 'src/*.jade',
        tasks: ['jade']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('html', ['jade']);
  grunt.registerTask('css', ['concat', 'cssmin']);

  grunt.registerTask('default', ['jade', 'concat', 'cssmin', 'watch']);

};
