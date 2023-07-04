const without = require('../without');
const assert = require('chai').assert; 

describe('#without', () => {

  it('returns an array without a specified item', () => {
    const veggies = ["carrot", "peppers", "cucumbers"];
    const veggiesWithoutPeppers = without(veggies, ["peppers"]);

    assert.deepEqual(veggiesWithoutPeppers, ["carrot", "cucumbers"]);
  });

  it('does not alter the original array', () => {
    const veggies = ["carrot", "peppers", "cucumbers"];
    const veggiesWithoutPeppers = without(veggies, ["peppers"]);

    assert.deepEqual(veggies, ["carrot", "peppers", "cucumbers"]);
  });

});