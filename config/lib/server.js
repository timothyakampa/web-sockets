module.exports = function(app, config) {
	var http = require('http'),
		server = http.createServer(app);

	console.log('[express train application listening on %s]', process.env.PORT || config.port);
	server.listen(process.env.PORT || config.port, '0.0.0.0');
    return server;
};