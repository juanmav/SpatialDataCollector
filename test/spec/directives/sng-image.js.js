'use strict';

describe('Directive: sngImage.js', function () {

  // load the directive's module
  beforeEach(module('suriMovilNgApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<sng-image.js></sng-image.js>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the sngImage.js directive');
  }));
});
