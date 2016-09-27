console.log('js is sourced');

//require angular
var myApp = angular.module( 'myApp', []);

//controller for auth0
myApp.controller('authController', ['$scope', '$http', function($scope, http){
  console.log('NG is sourced');

//this is the example of 2-way binding expressions in Angular
  $scope.exampleThing = "I am the exampleThing!";

//change true or false to show or hide content in the ng-show and ng-hide tags in index.html
  $scope.toggleShowStuff = function(){
    $scope.showStuff = !$scope.showStuff;
  };

}]);
