const tail = require('../tail');
const assert = require('chai').assert;


describe('#tail', () => {

  it('returns ["Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), [ "Lighthouse", "Labs" ]);
  });

  it('returns [4, 3, 2, 1]', () => {
    assert.deepEqual(tail([5, 4, 3, 2, 1]), [4, 3, 2, 1]);
  });

  it('return an empty array when passed an array with a single element', () => {
    assert.deepEqual(tail([1]), []);
  });

  it('returns undefined if it is passed an empty array', () => {
    assert.deepEqual(tail([]), undefined);
  });

});