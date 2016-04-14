'use strict';

describe('Controller: DatasourceRecordFormCtrl', function () {

  // load the controller's module
  beforeEach(module('suriMovilNgApp'));

  var DatasourceRecordFormCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DatasourceRecordFormCtrl = $controller('DatasourceRecordFormCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
