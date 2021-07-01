let myApp=angular.module('myApp', []);


myApp.controller('phoneController', function($scope) {
  $scope.phone = {
        name: 'Nokia Lumia 630',
        year: 2014,
        price: 200,
        company: {
            name: 'Nokia',
            country: 'Финляндия'
        }
    }
});


myApp.controller('myController', function() {
    this.message ='myController';
    this.text ='Контроллер без $scope';
});