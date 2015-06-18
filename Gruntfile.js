/*global module:false*/
module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    // Default task.
    grunt.registerTask('default', ['watch']);

    // Build task.
    grunt.registerTask('build', ['clean', 'jshint', 'concat', 'sass', 'karma']);

    // Travis CI task.
    grunt.registerTask('travis', 'concat', 'karma');

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),

        banner: '/* <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>;\n' +
            '* License: <%= pkg.license %> */\n\n\n',

        src: {
            js: ['src/tdcss.js', 'src/vendors/jquery-cookie.js', 'src/vendors/prism/prism.js', 'src/vendors/html2canvas.js', 'src/vendors/resemble-modified.js']
        },

        // Task configuration.
        watch: {
            files: ['src/**/*', 'test/**/*'],
            tasks: ['concat', 'sass'],
            options: {
                livereload: false
            }
        },

        clean: { build: ['build'] },

        sass: {
            options: {
                sourceMap: false
            },
            dist: {
              files: [{
                expand: true,
                cwd: 'src',
                src: ['**/*.scss'],
                dest: 'download',
                ext: '.css'
              }]
            }
        },

        concat: {
            js: {
                src: '<%= src.js %>',
                dest: 'download/tdcss.js',
                options: {
                    banner: '<%= banner %>',
                    stripBanners: true
                }
            }
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc',
                ignores: ['test/**/*']
            },
            src: 'src/tdcss.js'
        },

        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        }
    });
};
