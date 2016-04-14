'use strict';

/**
 * @ngdoc function
 * @name suriMovilNgApp.controller:WorkspaceCtrl
 * @description
 * # WorkspaceCtrl
 * Controller of the suriMovilNgApp
 */
angular.module('suriMovilNgApp').controller('WorkspaceCtrl', function ($scope, $location, $mdSidenav) {
  $scope.goToforms = function(){
    $location.path('/datasources/');
  };

  $scope.openMainMenu = function(){
    $mdSidenav('left').toggle();
  };
});
