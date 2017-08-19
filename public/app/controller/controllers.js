var controllers = angular.module('myapp.controllers', []);

controllers.controller('IndexController', ['$scope','$http', function($scope,$http) {
    
	$scope.message = "hello";
	$scope.users = [];
	$http.get('/user').then(function(res){
		$scope.users = res.data;
		for(var i = 0; i < $scope.users.length;i++){
			console.log($scope.users[i]);
		}
	},function(err){
		console.log('error');
	});
	
		$http.get('/admin').then(function(res){
		$scope.users = res.data;
		for(var i = 0; i < $scope.users.length;i++){
			console.log($scope.users[i]);
		}
	},function(err){
		console.log('error');
	});
	
	
}]);
