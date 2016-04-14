'use strict';

describe('Service: recordsService', function () {

  // load the service's module
  beforeEach(module('suriMovilNgApp'));

  // instantiate service
  var recordsService;
  beforeEach(inject(function (_recordsService_) {
    recordsService = _recordsService_;
  }));

  it('should do something', function () {
    expect(!!recordsService).toBe(true);
  });

});
