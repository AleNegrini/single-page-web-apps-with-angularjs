(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope']
function LunchCheckController ($scope) {
  $scope.lunchListStr = "";
  $scope.lunchEsit = "";

  $scope.lunchChecker = function(){
    var array = $scope.lunchListStr.split(",");
    //console.log(array.lunchListStr);
    //console.log(array.length);
    var emptyItems = 0
    for (var i=0;i<array.length;i++){
      //console.log(array[i]);
      if(array[i]==""){
        emptyItems = emptyItems+1;
      }
    }
    //console.log("Empty"+emptyItems);
    if ($scope.lunchListStr=="") {
      $scope.lunchEsit = "Please enter data first!";
    } else if ((array.length - emptyItems) <= 3) {
       $scope.lunchEsit = "Enjoy!";
    } else {
       $scope.lunchEsit = "Too much!";
    }
  }
}

})();
