'use strict';

/**
 * @ngdoc function
 * @name suriMovilNgApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the suriMovilNgApp
 */
angular.module('suriMovilNgApp').controller('LoginCtrl', function ($scope, $location, $http, base64) {

  $scope.user = {};
  $scope.user.username = 'surdesa';
  $scope.user.password = 'surdesa';

  $scope.login = function(){

    var userpass64 = base64.encode($scope.user.username + ':' + $scope.user.password);
    $http.defaults.headers.common.Authorization = 'Basic ' + userpass64;
    //$location.path('/workspace/');
    $location.path('/datasources/');
  };
});
