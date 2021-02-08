//const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;


describe("#tail", () => {
  it("returns[2,3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns ['Lighthouse', 'Labs'] for ['hello','Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

});
