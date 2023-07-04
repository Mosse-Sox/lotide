const map = require('../map');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('#map', () => {

  it('returns an array specified by a passed in array and a callback function', () => {
    const array = ["beans", "treats", "toots", "scoops"];
    assert.deepEqual(map(array, (x) => x.length), [5, 6, 5, 6]);
  });

  it('returns an empty object if no array was passed to it', () => {
    const array = [];
    assert.deepEqual(map(array, (x) => x.length), []);
  });
});