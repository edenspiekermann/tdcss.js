/*global module:false*/
module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    // Default task.
    grunt.registerTask('default', ['watch']);

    // Build task.
    grunt.registerTask('build', ['clean', 'jshint', 'concat', 'sass:dist', 'autoprefixer', 'karma']);

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

        dirs: {
            source: 'src',
            build: 'download',
            test: 'test'
        },

        src: {
            js: ['<%= dirs.source %>/tdcss.js', '<%= dirs.source %>/vendor/**/*.js']
        },

        // Task configuration.
        watch: {
            files: ['<%= dirs.source %>/**/*', '<%= dirs.test %>/**/*'],
            tasks: ['concat', 'sass:watch', 'autoprefixer'],
            options: {
                livereload: false
            }
        },

        clean: { build: ['build'] },

        sass: {
            watch: {
                options: {
                    sourceComments: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= dirs.source %>',
                    src: ['**/*.scss'],
                    dest: '<%= dirs.build %>',
                    ext: '.css'
                }]
            },
            dist: {
                options: {
                    outputStyle: 'compressed'
                },
                files: [{
                    expand: true,
                    cwd: '<%= dirs.source %>',
                    src: ['**/*.scss'],
                    dest: '<%= dirs.build %>',
                    ext: '.css'
                }]
            }
        },

        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 8', 'ie 9', '> 1%']
            },
            dist: {
                expand: true,
                flatten: true,
                src: '<%= dirs.build %>/**/*.css',
                dest: '<%= dirs.build %>'
            }            
        },

        concat: {
            js: {
                src: '<%= src.js %>',
                dest: '<%= dirs.build %>/tdcss.js',
                options: {
                    banner: '<%= banner %>',
                    stripBanners: true
                }
            }
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc',
                ignores: ['<%= dirs.test %>/**/*']
            },
            src: '<%= dirs.source %>/tdcss.js'
        },

        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        }
    });
};
