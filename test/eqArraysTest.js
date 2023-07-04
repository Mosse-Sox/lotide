// const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // pass

const assert = require('chai').assert;

describe('#eqArrays', () => {
  
  it('returns true if the arrays passed are the same array', () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it('returns returns false if the arrays are not the same', () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });

  it('still returns true with an array of strings', () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });

});