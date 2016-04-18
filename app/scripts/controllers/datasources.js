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
    $location.path('/datasources/' + datasource.id);
  };

  $scope.select = function(datasource){
    if ($scope.selectedDatasource === datasource){
      $scope.selectedDatasource = null;
      $scope.enableMap = false;
      $scope.enableRecords = false;
    } else {
      $scope.selectedDatasource = datasource;
      $scope.enableMap = $scope.selectedDatasource.schema.properties.the_geom ? true: false;
      $scope.enableRecords = true;
    }
  };

  $scope.map = function(datasource){
    $location.path('/datasources/' + datasource.id + '/map/');

  };

  $scope.enableFind = false;
  $scope.find = function(){
    $scope.enableFind = true;
  };

  $scope.cancelFind = function(){
    $scope.enableFind = false;
    delete $scope.filter;
  };

});
