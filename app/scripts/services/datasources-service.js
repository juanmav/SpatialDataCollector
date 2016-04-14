'use strict';

/**
 * @ngdoc service
 * @name suriMovilNgApp.DatasourcesService
 * @description
 * # DatasourcesService
 * Service in the suriMovilNgApp.
 */
angular.module('suriMovilNgApp').service('DatasourcesService', function (Restangular) {
  return Restangular.service('datasources/');
});
