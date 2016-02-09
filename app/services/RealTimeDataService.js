module.exports = function (server) {
    var io = require('socket.io')(server);

    io.on('connection', function (socket) {

        socket.on('message', function (message) {
            socket.to('clients').emit("message", message);
        });

        socket.on('register:client', function () {
            socket.join('clients');
        });

    });
};
