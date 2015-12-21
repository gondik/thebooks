var books = require('./../../book.json');
var angular = require('angular');
var moment = require('angular-moment');
require('angular-router-browserify')(angular);

console.log(books[0]);

var app = angular.module('booksApp', ['angularMoment', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/', {
			templateUrl: 'index.html',
			controller: 'IndexCtrl'
		}).
		when('/ShowBook/:bookId', {
			templateUrl: 'book.html',
			controller: 'BookCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});
}]);

app.controller('IndexCtrl', function($scope) {

	$scope.genres = [];
	$scope.topics = [];

	angular.forEach(books, function(value, key) {
		if ($scope.genres.indexOf(value.genre.category) == -1) {
			$scope.genres.push(value.genre.category);
		}
		if ($scope.topics.indexOf(value.genre.name) == -1) {
			$scope.topics.push(value.genre.name);
		}
	});

	$scope.books = books;
});

app.controller('BookCtrl', function($scope, $filter, $routeParams) {
	$scope.book = $filter('filter')(books, {id:$routeParams.bookId}, true)[0];
});
