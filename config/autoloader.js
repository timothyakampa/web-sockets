var train = require('express-train');
module.exports = train({
    base: __dirname,
    config: './environments',
    files : [
    	'../app/**/*.js',
    	'./**/*.js',
    	'!enviroments/**',
		'!build-tool/**'
    	]
});