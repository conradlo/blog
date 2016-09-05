module.exports = function (grunt) {

  var config = {
    pkg: grunt.file.readJSON('package.json'),
    compass: {
      // https://github.com/gruntjs/grunt-contrib-compass
      dist: {
        options: {
          outputStyle: 'compressed',
          noLineComments: true,
          cacheDir: 'css/.sass-cache/',
          cssDir: 'css/',
          sassDir: 'css/sass/',
          specify: 'css/sass/styles.scss',
          imagesDir: 'img/'
        }
      }
    },
    jshint: {
      // https://github.com/gruntjs/grunt-contrib-jshint
      files: ['./Gruntfile.js', './js/**/*.js']
    },
    watch: {
      // https://github.com/gruntjs/grunt-contrib-watch
      js: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint'],
        options: {
          interrupt: true,
        }
      },
      css: {
        files: ['<%= compass.dist.options.sassDir %>/*.scss'],
        tasks: ['compass'],
        options: {
          interrupt: true,
        }
      }
    },
    connect: {
      // https://github.com/gruntjs/grunt-contrib-connect
      server: {
        options: {
          port: 8000,
          hostname: 'slo.local',
          debug: true
        }
      }
    },
    browserSync: {
      // https://www.browsersync.io/docs/grunt
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
    },
    copy: {
      // https://github.com/gruntjs/grunt-contrib-copy
      main: {
        files: [{
          expand: true,
          src: ['favicons/**', 'img/**'],
          dest: '../'
        }, {
          expand: true,
          src: 'css/styles.css',
          dest: '../'
        }, {
          expand: true,
          src: 'js/script.js',
          dest: '../'
        }, {
          expand: true,
          src: 'index.html',
          dest: '../'
        }]
      }
    },
    htmlmin: {
      // https://github.com/gruntjs/grunt-contrib-htmlmin
      main: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          '../index.html': '../index.html'
        }
      },
      stage: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          '../stage/index.html': '../stage/index.html'
        }
      }
    },
    inline: {
      stage: {
        options:{
          uglify: true
        },
        src: './index.html',
        dest: '../stage/index.html'
      }
    }
  };

  grunt.initConfig(config);

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-inline');

  // default task
  grunt.registerTask('default', ['connect', 'browserSync', 'watch']);

  // build task for production
  // grunt.registerTask('build', ['copy', 'htmlmin']);

  // staging
  grunt.registerTask('stage', ['inline:stage', 'htmlmin:stage']);
};
