'use strict';

/**
 * @ngdoc function
 * @name suriMovilNgApp.controller:DatasourcesCtrl
 * @description
 * # DatasourcesCtrl
 * Controller of the suriMovilNgApp
 */
angular.module('suriMovilNgApp').controller('DatasourcesCtrl', function ($scope, DatasourcesService, $mdSidenav, $location) {

  DatasourcesService.getList().then(function(items){
    $scope.datasources = items;
  });

  $scope.openMainMenu = function(){
    $mdSidenav('left').toggle();
  };

  $scope.viewRecords = function(datasource){
    console.log(datasource);
    $location.path('/datasources/' + datasource.id);
  };

});
