'use strict';

describe('Service: slidersService', function () {

  // load the service's module
  beforeEach(module('rpicolorslidersApp'));

  // instantiate service
  var slidersService;
  beforeEach(inject(function (_slidersService_) {
    slidersService = _slidersService_;
  }));

  it('should do something', function () {
    expect(!!slidersService).toBe(true);
  });

});
