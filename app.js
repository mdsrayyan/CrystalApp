var user;
var app = angular.module('app', ['ngRoute']);
app .config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/login', {
        templateUrl: 'container.html',
        controller: 'LoginController'
      }).
    when('/landing', {
        templateUrl: 'templates/Home.html'
      }).
    when('/DailyDetails', {
        templateUrl: 'templates/DailyDetails.html'
      }).
      otherwise({
        redirectTo: '/login'
      });
  }]);