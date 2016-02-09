module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concurrent: {
            dev: [
                'nodemon',
                'watch'
            ],
            options: {
                logConcurrentOutput: true
            }
        },
        jshint: {
            all: {
                src: ['Gruntfile.js', 'app.js', 'app/**/*.js', 'config/**/*.js'],
                options: {
                    ignores: ['public/bower/**']
                }
            }
        },
        nodemon: {
            dev: {
                script: 'app.js'
            }
        },
        watch: {
            js: {
                files: ['Gruntfile.js', 'app.js', 'app/**/*.js', 'config/**/*.js', 'public/**/*.js'],
                tasks: ['jshint'],
                options: {
                    spawn: false
                }
            },
            css: {
                files: ['public/sass/**'],
                tasks: ['sass:dist'],
                options: {
                    spawn: false
                }
            }
        },
        sass: {
            dist: {
                options: {
                    sourcemap: false
                },
                files: [{
                    expand: true,
                    cwd: 'public/sass',
                    src: ['*.scss'],
                    dest: 'public/dist/css',
                    ext: '.css'
                }]
            }
        }
    });

    grunt.registerTask('dev', function () {
        grunt.task.run('jshint:all');
        grunt.task.run('sass:dist');
        grunt.task.run('concurrent:dev');
    });

    grunt.registerTask('default', ['dev']);
};
