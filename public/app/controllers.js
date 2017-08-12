var controllers = angular.module('myapp.controllers', []);

controllers.controller('IndexController', ['$scope','$http', function($scope,$http) {
    
	$scope.message = "hello";
	$http.get('/user').then(function(res){
		$scope.userList = res.data;
		for(var i = 0; i < $scope.userList.length;i++){
			console.log($scope.userList[i]);
		}
	},function(err){
		console.log('error');
	});
	
	
}]);
