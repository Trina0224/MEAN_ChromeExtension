console.log('popup.js load.');
let myAmazonHistory = angular.module("myamazonhistory", ['ui.router']);

myAmazonHistory.config(function($stateProvider, $urlRouterProvider){

	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: '../views/home.html'
        })
		.state('login', {
			url: '/login',
			templateUrl: '../views/login.html'
        })
		.state('signup', {
			url: '/signup',
			templateUrl: '../views/signup.html'
        })
    $urlRouterProvider.otherwise('login') //set default place to login.
});

myAmazonHistory.controller("PopupCtrl", ['$scope', '$state', function($scope, $state){
	console.log('PopupCtrl Initialized');

	$scope.login = function(formData){
		console.log('formData from login: ',formData);
	};
	$scope.signup = function(formData){
		console.log('formData from signup: ',formData);
	};


}]);
