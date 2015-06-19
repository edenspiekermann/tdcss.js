/*global module:false*/
module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-recess');
    grunt.loadNpmTasks('grunt-browserify');

    // Default task.
    grunt.registerTask('default', ['clean', 'jshint', 'browserify', 'sass:watch', 'autoprefixer', 'watch']);

    // Build task.
    grunt.registerTask('build', ['clean', 'jshint', 'sass:dist', 'autoprefixer', 'karma']);

    // Travis CI task.
    grunt.registerTask('travis', 'karma');

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
            tasks: ['sass:watch', 'autoprefixer'],
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
                files: [{
                    expand: true,
                    cwd: '<%= dirs.build %>',
                    src: ['**/*.css'],
                    dest: '<%= dirs.build %>',
                }]
            }
        },

        browserify: {
            client: {
                src: ['<%= dirs.source %>/tdcss.js'],
                dest: '<%= dirs.build %>/tdcss.js',
                options: {
                    transform: ['hbsfy'],
                    banner: '<%= banner %>',
                }
            }
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc',
                ignores: ['test/**/*']
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
