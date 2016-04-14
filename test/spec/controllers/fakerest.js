'use strict';

describe('Controller: FakerestCtrl', function () {

  // load the controller's module
  beforeEach(module('suriMovilNgApp'));

  var FakerestCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FakerestCtrl = $controller('FakerestCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
