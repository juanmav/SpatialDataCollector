'use strict';

/**
 * @ngdoc directive
 * @name suriMovilNgApp.directive:sngPoint
 * @description
 * # sngPoint
 */
var app = angular.module('suriMovilNgApp');
app.directive('sngPoint', function () {
  return {
    templateUrl: 'views/sng-point.html',
    restrict: 'E',
    controller: 'SngPointCtrl',
    replace: false,
    scope : {
      ngModel : '='
    }
  };
});

var app = angular.module('suriMovilNgApp');
app.controller('SngPointCtrl', function ($scope, $cordovaGeolocation) {

  $scope.capture = function(){
    console.log($scope.ngModel);
  };

  $cordovaGeolocation.watchPosition({ timeout : 3000, enableHighAccuracy: false}).then(
    null,
    function(err) {
      // error
    },
    function(position) {
      console.log(position);
      setCoord(position);
    });

  function setCoord(position){
    if ($scope.ngModel){
      $scope.ngModel.latitude = position.coords.latitude;
      $scope.ngModel.longitude = position.coords.longitude;
    } else {
      $scope.ngModel = {};
      setCoord(position);
    }
  }
});
