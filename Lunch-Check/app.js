(function(){
  'use strict';

  angular
    .module("LunchCheck",[])
    .controller("LunchCheckController",LunchCheckController);
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope){
      $scope.lunchItems = "";
      $scope.checkVerdict = ""; //Enjoy! , Too much!, Please enter data first
      $scope.checkLunch = function (){
        if($scope.lunchItems == ""){
          $scope.checkVerdict = "Please enter data first";
        }else{
          var stringLength = $scope.lunchItems.split(',').length;
          if(stringLength <= 3){
            $scope.checkVerdict = "Enjoy!";
          }else{
            $scope.checkVerdict = "Too much!";
          }
        }
      };
    }

})();
