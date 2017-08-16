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
            './js/**/*.js',
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
      stage: {
        files: [{
          expand: true,
          src: ['favicons/**'],
          dest: '../stage'
        },{
          expand: true,
          src: ['blog/**'],
          dest: '../stage'
      }]
        // grunt-inline will copy and inline the develop version of 'index.html'
      },
      production: {
        files: [{
          expand: true,
          src: ['favicons/**'],
          dest: '../'
        },{
          expand: true,
          src: ['blog/**'],
          dest: '../'
        },{
          expand: true,
          src: '../stage/index.html',
          dest: '../',
          flatten: true,
          filter: 'isFile'
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

  // staging
  grunt.registerTask('stage', ['copy:stage', 'inline:stage', 'htmlmin:stage']);

  // build task for production
  grunt.registerTask('build', ['copy:production']);
};
