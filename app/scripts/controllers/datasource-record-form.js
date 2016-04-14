'use strict';

/**
 * @ngdoc function
 * @name suriMovilNgApp.controller:DatasourceRecordFormCtrl
 * @description
 * # DatasourceRecordFormCtrl
 * Controller of the suriMovilNgApp
 */
var app = angular.module('suriMovilNgApp');
app.controller('DatasourceRecordFormCtrl', function ($scope, $routeParams, DatasourcesService, RecordsService, $location, $mdDialog) {

  $scope.datasourceId = $routeParams.datasourceId;
  $scope.recordId = $routeParams.id;
  $scope.schema = {};
  $scope.record = {};

  DatasourcesService.one($scope.datasourceId).get().then(function(datasource){
    //console.log(datasource);
    $scope.datasource = datasource;
    $scope.schema = datasource.schema;
  });

  if ($scope.recordId > -1){ // Es edicion
    RecordsService.one($scope.recordId).get().then(function(record){
      console.log(record);
      $scope.record = record;
    });
  } else { // Es creacion
    $scope.record = {};
    $scope.record.value = {};
  }

  $scope.save = function(){
    console.log('salvando el registro');

    var confirmDialog = function(){
      var confirm = $mdDialog.confirm()
        .title('Exito!')
        .textContent('Su Resgitro fue guardado exitosamente')
        .ariaLabel('Lucky day')
        .ok('Ok');
      $mdDialog.show(confirm).then(function() {
        back();
      }, function() {
        console.log('nada');
      });
    };

    if ($scope.record.save){ //es edicion
      $scope.record.save().then(confirmDialog);
    } else { // es creacion
      $scope.record.datasource = $scope.datasource;
      RecordsService.post($scope.record).then(confirmDialog);
    }

  };

  $scope.cancel = function(){
    console.log('cancelando el registro preguntar');

    var confirm = $mdDialog.confirm()
      .title('Cambios')
      .textContent('Esta a punto de descartar los cambios')
      .ariaLabel('Lucky day')
      .cancel('Cancel')
      .ok('Ok');
    $mdDialog.show(confirm).then(function() {
      back()
    }, function() {
      console.log('nada');
    });
  };

  function back(){
    window.history.back();
  }

  /*$scope.schema= {
    "type": "object",
    "properties": {
      "measurement": {
        "type": "number"
      },
      "description": {
        "type": "string"
      },
      "the_geom": {
        "title": "Point",
        "type": "object",
        "format": "point",
        "properties": {
          "latitude": {
            "type": "number"
          },
          "longitude": {
            "type": "number"
          }
        }
      },
      "image": {
        "title": "Image",
        "type": "string",
        "format": "image"
      }
    },
    "required": []
  };*/

  $scope.form = [
    "*"
  ];

});
