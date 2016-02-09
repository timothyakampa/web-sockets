(function (module) {

    module.controller('ClientController', function ($scope, $window, socket) {
    	$scope.messages = ["some messages"]
        socket.emit('register:client');

        $scope.send = function (message) {
        	socket.emit("message", message)
        }

		socket.on("message", function (message) {
			$scope.messages.push(message);
		});        
    });

})(angular.module('websockets.client', ['websockets.socket']));