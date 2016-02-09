module.exports = function(grunt) {
    if (process.env.NODE_ENV == 'production') {
        return require('./config/build-tool/production.js')(grunt);
    }
    return require('./config/build-tool/development.js')(grunt);
};