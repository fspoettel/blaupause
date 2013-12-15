module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          // cssmin will minify later
          style: 'expanded',
          noCache: true
        },
        files: {
          'css/build/build.css': 'css/build.scss'
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 2 version']
      },
      multiple_files: {
        expand: true,
        flatten: true,
        src: 'css/build/*.css',
        dest: 'css/build/prefixed/'
      }
    },

    cssmin: {
      combine: {
        files: {
          'css/build/minified/build.css': ['css/build/prefixed/build.css']
        }
      }
    },

    concat: {
      dist: {
        src: [
          'js/lib/plugins/*.js',
          'js/global.js'
        ],
        dest: 'js/build/production.js'
      }
    },

    uglify: {
      build: {
        src: 'js/build/production.js',
        dest: 'js/build/production.min.js'
      }
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'img/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'img/'
        }]
      }
    },

    watch: {
      options: {
        livereload: true,
      },
      scripts: {
        files: ['js/*.js'],
        tasks: ['concat', 'uglify']
      },
      css: {
        files: ['**/*.scss'],
        tasks: ['sass', 'autoprefixer', 'cssmin']
      },
      images: {
        files: ['images/**/*.{png,jpg,gif}', 'images/*.{png,jpg,gif}'],
        tasks: ['imagemin']
      }
    },

    connect: {
      server: {
        options: {
          port: 8000,
          base: './'
        }
      }
    },

  });

  require('load-grunt-tasks')(grunt);

  // Default Task is basically a rebuild
  grunt.registerTask('default', ['concat', 'uglify', 'sass', 'autoprefixer', 'cssmin', 'imagemin']);

  grunt.registerTask('dev', ['connect']);

};