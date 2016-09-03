module.exports = function (grunt) {

  var config = {
    pkg: grunt.file.readJSON('package.json'),
    compass: {
      dist: {
        options: {
          cacheDir: './css/.sass-cache',
          cssDir: './css',
          sassPath: './css/sass'
        }
      }
    },
    jshint: {
      files: ['./Gruntfile.js', './js/**/*.js']
    },
    watch: {
      js: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint'],
        options: {
          interrupt: true,
        }
      },
      css: {
        files: ['./css/**/*.scss'],
        tasks: ['compass'],
        options: {
          interrupt: true,
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 8000,
          hostname: '*',
          open: true,
          debug: true
        }
      }
    }
  };

  grunt.initConfig(config);

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // default task
  grunt.registerTask('default', ['connect', 'watch']);
};
