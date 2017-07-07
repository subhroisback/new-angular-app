(function(){
  'use strict';

  angular
    .module("myApp",[])
    .controller("nameCalculatorCtrl",function($scope){
      $scope.name="";
      $scope.totalValue = 0;

      $scope.displayNumeric = function(){
        var totalNameValue = calculateTotalStringValue($scope.name) ;
        $scope.totalValue = totalNameValue;
      }

       function calculateTotalStringValue(string){
        var totalStringValue = 0;
        for(var i=0; i < string.length; i++){
          totalStringValue += string.charCodeAt(i);
        }
        return totalStringValue;
      }

    });
})();
