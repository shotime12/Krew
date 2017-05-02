var app = angular.module('myApp', ['ngRoute', '720kb.datepicker'])

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/home.html'
	})
	.when('/submit', {
		templateUrl: 'partials/submit.html'
	})

})
