(function () {
'use strict'

angular.module('myFirstApp', [])

.controller('myFirstController', function ($scope) {
  $scope.name = "Alessandro";
  $scope.sayHello = function () {
    return "Hello Coursera!"
  }
})

})();
