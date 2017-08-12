var app = angular.module('myapp', ['myapp.controllers']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'partials/user.html',
        controller: 'IndexController'
    }).otherwise({
        redirectTo: '/'
    });
}]).config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true);
}]);
