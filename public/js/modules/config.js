(function (module) {

    module.constant('Config', {
        HOST: window.location.hostname,
        BASE_URL: window.location.origin
    });

})(angular.module('websockets.config', []));