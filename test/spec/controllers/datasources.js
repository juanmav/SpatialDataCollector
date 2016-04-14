'use strict';

describe('Controller: DatasourcesCtrl', function () {

  // load the controller's module
  beforeEach(module('suriMovilNgApp'));

  var DatasourcesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DatasourcesCtrl = $controller('DatasourcesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
