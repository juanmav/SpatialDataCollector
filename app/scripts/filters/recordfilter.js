'use strict';

/**
 * @ngdoc filter
 * @name suriMovilNgApp.filter:recordFilter
 * @function
 * @description
 * # recordFilter
 * Filter in the suriMovilNgApp.
 */
var app = angular.module('suriMovilNgApp');
app.filter('recordFilter', function () {
  return function (input, index, schema) {
    return input[Object.keys(schema.properties)[index]];
  };
});
