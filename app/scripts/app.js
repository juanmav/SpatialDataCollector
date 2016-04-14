'use strict';

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('suriMovilNgApp', [
    'ngMaterial',
    'ngRoute',
    'restangular',
    'ngCordova',
    'ab-base64',
    'schemaForm',
    'leaflet-directive'
  ])

  .run(function() {

  })

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      }).when('/workspace/', {
      templateUrl: 'views/workspace.html',
      controller: 'WorkspaceCtrl'
    }).when('/datasources/', {
      templateUrl: 'views/datasources.html',
      controller: 'DatasourcesCtrl'
    }).when('/datasources/:id', {
      templateUrl: 'views/datasource-records.html',
      controller: 'DatasourceRecordsCtrl'
    }).when('/datasources/:id/map', {
      templateUrl: 'views/datasource-map.html',
      controller: 'DatasourceMapCtrl'
    }).when('/datasources/:datasourceId/record/:id', {
        templateUrl: 'views/datasource-record-form.html',
        controller: 'DatasourceRecordFormCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

  .config(function(RestangularProvider) {
    RestangularProvider.setBaseUrl('http://192.168.10.111:1337/');
  })

  .config(function(RestangularProvider) {
    RestangularProvider.setResponseExtractor(function(response){
      if (response.items){
        return response.items;
      } else {
        return response;
      }
    });

    RestangularProvider.setRestangularFields({
      selfLink: 'self.href'
    });
  })
  .config(function ($httpProvider) {
    /*$httpProvider.defaults.headers.common = {};
     $httpProvider.defaults.headers.post = {};
     $httpProvider.defaults.headers.put = {};
     $httpProvider.defaults.headers.patch = {};*/
    $httpProvider.defaults.headers.common.Authorization = 'Basic ' + 'c3VyZGVzYTpzdXJkZXNh';
  })
  .config(function($mdIconProvider) {
    $mdIconProvider.defaultIconSet('./images/mdi.svg');
  })
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('grey')
      .backgroundPalette('grey')
      .warnPalette('red');
  });
