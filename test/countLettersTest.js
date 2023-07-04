

const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe('#countLetters', () => {
  
  it('returns the correct counts for each letter in a string', () => {
    assert.deepEqual(countLetters('beefaroonie'), 
    { b: 1,
      e: 3, 
      f: 1,
      a: 1,
      r: 1,
      o: 2,
      n: 1,
      i: 1 
    });
  }); 

  it('returns an empty object if there is no string passed', () => {
    assert.deepEqual(countLetters(''), {});
  });
});