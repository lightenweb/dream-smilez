var dreamSmilez = angular.module('dreamSmilez', ['ui.router']);

dreamSmilez.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider

	.state('test', {
		url : '/',
		template : "Test Page"
	})

	.state('home', {
		url : '/home',
		templateUrl : 'views/Home/index.html'
	})
}])