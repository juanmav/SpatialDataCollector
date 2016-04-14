'use strict';

describe('Filter: recordFilter', function () {

  // load the filter's module
  beforeEach(module('suriMovilNgApp'));

  // initialize a new instance of the filter before each test
  var recordFilter;
  beforeEach(inject(function ($filter) {
    recordFilter = $filter('recordFilter');
  }));

  it('should return the input prefixed with "recordFilter filter:"', function () {
    var text = 'angularjs';
    expect(recordFilter(text)).toBe('recordFilter filter: ' + text);
  });

});
