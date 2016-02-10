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
                src: ['Gruntfile.js', 'app.js', 'app/**/*.js', 'config/**/*.js']
            }
        },
        nodemon: {
            dev: {
                script: 'app.js'
            }
        },
        watch: {
            js: {
                files: ['Gruntfile.js', 'app.js', 'app/**/*.js', 'config/**/*.js'],
                tasks: ['jshint'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.registerTask('dev', function () {
        grunt.task.run('jshint:all');
        grunt.task.run('concurrent:dev');
    });

    grunt.registerTask('default', ['dev']);
};
