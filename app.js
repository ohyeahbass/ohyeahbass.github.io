var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
		.when('/home',{
			templateUrl:'template/home.html'
		})
		.when('/about', {
			templateUrl:'template/about.html'
		})
		.when('/contact',{
			templateUrl:'template/contact.html'
		})
		.when('/',{
			templateUrl:'template/openingPage.html'
		})
		.when('/work',{
			templateUrl:'template/work.html'
		})
		.otherwise('/home',{
			redirectTo:'template/home.html'
		})
});
app.controller('ctrl', function($scope, $location){
	$scope.work=function(){
		$location.path('/work')
	}
})
