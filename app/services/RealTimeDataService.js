module.exports = function (server) {
    var url = require('url'),
  		WebSocketServer = require('ws').Server,
  		wss = new WebSocketServer({ server: server });

  	var websockets = [];

	wss.on('connection', function (ws) {
		var location = url.parse(ws.upgradeReq.url, true);

		ws.on('message', function (message) {
			console.log('received: %s', message);

			if (message === "register:client") {
				return registerClient(ws);
			}

			websockets.forEach(function (ws, index) {
				try {
    				ws.send(message);
				} 
				catch(err) {
					console.log("some-client-left");
					websockets.splice(index, 1);
				}
			});
		});
	});

	function registerClient(ws) {
		console.log('new-client-registered:');
		websockets.push(ws);
	}
};