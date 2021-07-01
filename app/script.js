let myApp=angular.module('myApp', []);


myApp.run(function($rootScope) {
    $rootScope.moduleName = 'myApp';
    $rootScope.message = 'Hello AngularJS';
});

myApp.controller('myController', function($scope) {
    $scope.message = 'Контроллер myController';
});