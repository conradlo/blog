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
        files: ['<%= compass.dist.options.sassPath %>/*.scss'],
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
          hostname: 'slo.local',
          debug: true
        }
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: [
            './css/*.css',
            './js/*.js',
            './index.html'
          ]
        },
        options: {
          watchTask: true,
          open: 'external',
          host: '<%= connect.server.options.hostname %>',
          proxy: 'http://<%= connect.server.options.hostname %>:<%= connect.server.options.port %>',
          port: '<%= connect.server.options.port %>'
        }
      }
    }
  };

  grunt.initConfig(config);

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-browser-sync');

  // default task
  grunt.registerTask('default', ['connect', 'browserSync', 'watch']);
};
