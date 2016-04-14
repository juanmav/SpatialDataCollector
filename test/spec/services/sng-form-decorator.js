'use strict';

describe('Service: sngFormDecorator', function () {

  // load the service's module
  beforeEach(module('suriMovilNgApp'));

  // instantiate service
  var sngFormDecorator;
  beforeEach(inject(function (_sngFormDecorator_) {
    sngFormDecorator = _sngFormDecorator_;
  }));

  it('should do something', function () {
    expect(!!sngFormDecorator).toBe(true);
  });

});
