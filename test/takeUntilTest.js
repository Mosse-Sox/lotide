// 
// 

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');


// assertArraysEqual
// console.log("---");
// assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

const takeUntil = require('../takeUntil');
const assert = require('chai').assert;

describe('#takeUntil', () => {
  
  it('returns a sub array of an array passed and up until a point specified by a callback function', () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const results1 = takeUntil(data1, x => x < 0);

    assert.deepEqual(results1, [1, 2, 5, 7, 2]);
  });

});