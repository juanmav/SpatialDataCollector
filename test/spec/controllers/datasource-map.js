'use strict';

describe('Controller: DatasourceMapCtrl', function () {

  // load the controller's module
  beforeEach(module('suriMovilNgApp'));

  var DatasourceMapCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DatasourceMapCtrl = $controller('DatasourceMapCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
