#!/usr/bin/env node

var WebSocket = require('ws');
var ws = new WebSocket('ws://localhost:3000');

ws.on('open', function open() {

	console.log("connection established");
	
	ws.send('register:client');
	
	setInterval(function () {
		ws.send("heart-beat");
	}, 2000);

});

ws.on('message', function(data, flags) {
 	console.log("received-message: ", data);
});