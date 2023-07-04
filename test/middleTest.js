const middle = require('../middle');
const assert = require('chai').assert; 

describe('#middle', () => {

  it('returns a single number if the array length is odd', () => {
    assert.deepEqual(middle([4,5,6]), [5]);
  });

  it('returns two numbers if the array length is even', () => {
    assert.deepEqual(middle([4,5,6,7]), [5,6]);
  });

  it('returns an empty array when passed an empty array', () => {
    assert.deepEqual(middle([]), []);
  });

  it('returns an empty array when passed an array with only one value', () => {
    assert.deepEqual(middle([1]), []);
  });

  it('returns an empty array when passed an array with only two numbers', () => {
    assert.deepEqual(middle([1,2]), []);
  });

});