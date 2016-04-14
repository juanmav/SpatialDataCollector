'use strict';

describe('Service: DatasourcesService', function () {

  // load the service's module
  beforeEach(module('suriMovilNgApp'));

  // instantiate service
  var DatasourcesService;
  beforeEach(inject(function (_DatasourcesService_) {
    DatasourcesService = _DatasourcesService_;
  }));

  it('should do something', function () {
    expect(!!DatasourcesService).toBe(true);
  });

});
