module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
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

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('build', ['sass:dist']);
};
