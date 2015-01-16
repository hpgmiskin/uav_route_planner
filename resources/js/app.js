//Define an angular module for our app
var sampleApp = angular.module('sampleApp', ["ngRoute"]);
 
sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/AddNewOrder', {
        templateUrl: 'resources/html/add_order.html',
        controller: 'AddOrderController'
      }).
      when('/ShowOrders', {
        templateUrl: 'resources/html/show_orders.html',
        controller: 'ShowOrdersController'
      }).
      when('/ShowRoute', {
        templateUrl: 'resources/html/route.html',
        controller: 'ShowRouteController'
      }).
      otherwise({
        redirectTo: '/AddNewOrder'
      });
}]);
 
 
sampleApp.controller('AddOrderController', function($scope) {
    $scope.message = 'This is Add new order screen';
});
 
 
sampleApp.controller('ShowOrdersController', function($scope) {
    $scope.message = 'This is Show orders screen';
}); 

