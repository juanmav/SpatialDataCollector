'use strict';

/**
 * @ngdoc function
 * @name suriMovilNgApp.controller:DatasourceMapCtrl
 * @description
 * # DatasourceMapCtrl
 * Controller of the suriMovilNgApp
 */
var app = angular.module('suriMovilNgApp');
app.controller('DatasourceMapCtrl', function ($scope, $routeParams, DatasourcesService) {

  $scope.datasourceId = $routeParams.id;

  DatasourcesService.one($scope.datasourceId).get().then(function(datasource){
    $scope.datasource = datasource;
    console.log($scope.datasource);
  });

  function getList(){
    DatasourcesService.one($scope.datasourceId).getList('records').then(function(records){
      console.log(records);
      $scope.records = records;
      //$scope.leafLeatGeoJson = geoJsonToLeafLet(recordsToGeoJson(records));
      //console.log($scope.leafLeatGeoJson);
      $scope.markers = recordsToMarkers(records);
      console.log($scope.markers);
    });
  }

  getList();


  function recordsToMarkers(records){
    return records.map(function(record){
      return {
        lat: record.value.the_geom.latitude,
        lng: record.value.the_geom.longitude,
        message: record.value.measurement + ' ' + record.value.description
      }
    });
  }

  function geoJsonToLeafLet (geoJson) {
    return {
      data: geoJson,
      style: {
        radius: 10,
        fillColor: "green",
        color: "green",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      }
    }
  }

  function recordsToGeoJson(records){
    var features = records.map(function(record){
      return {
        type: "Feature",
        geometry:{
          type : "Point",
          coordinates: [record.value.the_geom.longitude, record.value.the_geom.latitude ]
        },
        properties: {
          name: record.value.name,
          description : record.value.description
        }
      }
    });

    return {
      "type": "FeatureCollection",
      "features": features
    }
  }

  $scope.osloCenter = {
    lat: -35,
    lng: -60,
    zoom: 6
  };


  $scope.defaults = {
    scrollWheelZoom: false,
    zoomControl : false
  };

  $scope.legend = {
    position: 'bottomleft',
    colors: [ '#ff0000'],
    labels: [ 'Records' ]
  };

  $scope.layers = {
    position: 'bottomleft',
    baselayers: {
      osm: {
        name: 'OpenStreetMap',
        url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        type: 'xyz'
      },
      ing: {
        name : 'Ign Map',
        url: 'http://wms.ign.gob.ar/geoserver/wms?',
        type: 'wms',
        layerParams: {
          layers: 'capabaseargenmap'
        }
      }//*/
    },
    overlays : {
      offline:{
        name: 'offline',
        url : '/images/map/{z}/{x}/{y}.png',
        type: 'xyz'
      }
    }
  }

});
