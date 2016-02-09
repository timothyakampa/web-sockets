(function(module) {
    module.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/templates/user/index.html',
                controller: 'ClientController'
            });
    });

})(angular.module('websockets.routes', ['ui.router']));