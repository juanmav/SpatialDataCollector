'use strict';

/**
 * @ngdoc service
 * @name suriMovilNgApp.recordsService
 * @description
 * # recordsService
 * Service in the suriMovilNgApp.
 */
angular.module('suriMovilNgApp').service('RecordsService', function (Restangular) {
  return Restangular.service('records/');
});
