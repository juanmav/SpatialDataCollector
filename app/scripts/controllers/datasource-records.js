'use strict';

/**
 * @ngdoc function
 * @name suriMovilNgApp.controller:DatasourceRecordsCtrl
 * @description
 * # DatasourceRecordsCtrl
 * Controller of the suriMovilNgApp
 */
var app = angular.module('suriMovilNgApp');
app.controller('DatasourceRecordsCtrl', function ($scope, $routeParams, DatasourcesService, $location, $mdDialog) {
  $scope.datasourceId = $routeParams.id;

  DatasourcesService.one($scope.datasourceId).get().then(function(datasource){
    $scope.datasource = datasource;
    $scope.schema = datasource.schema;

    $scope.enableMap = datasource.schema.properties.the_geom ? true: false;

    console.log($scope.datasource);
  });

  function getList(){
    DatasourcesService.one($scope.datasourceId).getList('records').then(function(records){
      console.log(records);
      $scope.records = records;
    });
  }

  getList();

  $scope.select = function(record){
    if ($scope.selectedRecord === record){
      $scope.selectedRecord = null;
    } else {
      $scope.selectedRecord = record;
    }
  };

  $scope.add = function(){
    $location.path('/datasources/' + $scope.datasourceId  +'/record/-1');
  };

  $scope.edit= function(){
    $location.path('/datasources/' + $scope.datasourceId + '/record/' + $scope.selectedRecord.id);
  };

  $scope.remove = function(){
    var confirm = $mdDialog.confirm()
      .title('Eliminacion')
      .textContent('Esta por eliminar el registro!')
      .ariaLabel('Lucky day')
      .cancel('Cancel')
      .ok('Ok');
    $mdDialog.show(confirm).then($scope.selectedRecord.remove, function() {
    }).then(function(){
      $scope.selectedRecord = null;
      getList();
    });
  };

  $scope.enableFind = false;
  $scope.find = function(){
    $scope.enableFind = true;
  };

  $scope.cancelFind = function(){
    $scope.enableFind = false;
    delete $scope.filter;
  };

  $scope.map = function(){
    $location.path('/datasources/' + $scope.datasourceId + '/map/');
  };



});
