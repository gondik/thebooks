var books = require('./../../book.json');
var angular = require('angular');
var moment = require('angular-moment');
var arp = require('angular-utils-pagination');
require('angular-router-browserify')(angular);

var app = angular.module('booksApp', ['angularMoment', 'ngRoute', 'angularUtils.directives.dirPagination']);

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

app.run(function($rootScope, $window) {
	$rootScope.$on('$routeChangeSuccess', function () {
		if (document.readyState == 'complete') {
			$window.scrollTo(0, 0);
		}
	});
});

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
	$scope.books = books;
});
