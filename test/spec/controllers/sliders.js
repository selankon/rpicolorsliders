'use strict';

describe('Controller: SlidersCtrl', function () {

  // load the controller's module
  beforeEach(module('rpicolorslidersApp'));

  var SlidersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SlidersCtrl = $controller('SlidersCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SlidersCtrl.awesomeThings.length).toBe(3);
  });
});
