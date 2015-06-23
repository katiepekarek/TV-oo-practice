var Castle = require('../encastleation');

describe('Castle', function() {
  it('does not allow outside entities to modify state', function() {
    // happy path
    var calc = new Castle(1,2,3);
    expect(calc.sum()).toEqual(6);

    // should not allow outside modification
    calc.a = 10;
    calc.b = 50;
    calc.c = 40;
    expect(calc.sum()).toEqual(6);
  });
});
