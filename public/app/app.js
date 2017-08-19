var app = angular.module('myapp', ['myapp.controllers','ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/userlist', {
        templateUrl: 'partials/user.html',
        controller: 'IndexController'
    });
	   $routeProvider.when('/adminlist', {
        templateUrl: 'partials/admin.html',
        controller: 'IndexController'
    });
	
}]);
