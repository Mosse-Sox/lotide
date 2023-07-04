
const countOnly = require('../countOnly');
const assert = require('chai').assert; 

describe('#countOnly', () => {

  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

  it('returns an object with the correct counts of names specified by the object passed', () => {
    assert.deepEqual(countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false}),
     {Jason: 1, Fang: 2});
  }); 

  it('returns an empty object when nothing is passed', () => {
    assert.deepEqual(countOnly(firstNames, {}), {});
  });
});