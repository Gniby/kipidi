var app = angular.module('myapp', ['myapp.controllers','ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'partials/user.html',
        controller: 'IndexController'
    });
}]);
