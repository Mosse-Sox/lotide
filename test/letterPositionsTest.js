const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe('#letterPositions', () => {

  it('returns an object that contains the correct indexes of where letters are found in the string passed to it', () => {
    assert.deepEqual(letterPositions('hello'), 
    { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] });

  });

});