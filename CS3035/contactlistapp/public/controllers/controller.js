var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http',
	function($scope, $http) {
	console.log("Hello World from contoller");
	
	var refresh = function(){
		$http.get('/contactlist').success(function(response){
			console.log("Got data!");
			$scope.contactlist = response;
		});
	};
	refresh();
	
		$scope.addContact = function(){
			$http.post('/contactlist', $scope.contact).success(function(response){
				console.log(response);
				refresh();
			});
		};


		$scope.remove = function(id){
			console.log(id);
			$http.delete('/contactlist/' + id).success(function(respoonse){
				refresh();
			});
		};
		
}]);