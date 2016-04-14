'use strict';

describe('Directive: sngPoint', function () {

  // load the directive's module
  beforeEach(module('suriMovilNgApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<sng-point></sng-point>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the sngPoint directive');
  }));
});
