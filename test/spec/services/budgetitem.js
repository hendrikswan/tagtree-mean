'use strict';

describe('Service: Budgetitem', function () {

  // load the service's module
  beforeEach(module('budgetApp'));

  // instantiate service
  var Budgetitem;
  beforeEach(inject(function (_Budgetitem_) {
    Budgetitem = _Budgetitem_;
  }));

  it('should do something', function () {
    expect(!!Budgetitem).toBe(true);
  });

});
