let myApp = angular.module('myApp', []);

myApp.controller('phoneController', function($scope) {
   $scope.somestyle = {background: '#eee', color: '#f103f3'};
   $scope.someclass = 'myclass';
   $scope.data = {visible: false};
});