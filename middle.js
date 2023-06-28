const eqArrays = function (actual, expected) {
  let matching = true;

  for (let i = 0; i < actual.length; i++) {
    const actualElement = actual[i];
    const expectedElement = expected[i];

    if (actualElement !== expectedElement || typeof (actualElement) !== typeof (expectedElement)) {
      matching = false;
      return matching;
    }
  }

  return matching;
};


const assertArraysEqual = function (actual, expected) {

  if (!eqArrays(actual, expected)) {
    console.log(`❗️❗️❗️ ${actual} !== ${expected}`);
    return;
  }

  console.log(`🍀🍀🍀 ${actual} === ${expected}`);
};

const middle = function (array) {
  let middleElements = [];

  if (array.length === 0 || array.length === 1 || array.length === 2) {
    return middleElements;
  }

  if (array.length % 2 === 0) {
    const indexOne = Math.floor(array.length / 2) - 1;
    const indexTwo = Math.ceil(array.length / 2);
    middleElements = [ array[ indexOne ], array[ indexTwo ] ];
    return middleElements;
  }

  const middleIndex = Math.floor(array.length / 2);
  middleElements.push(array[middleIndex]);
  return middleElements;
}

// test cases
assertArraysEqual(middle([4,5,6]), [5]);
assertArraysEqual(middle([4,5,6,7]), [5,6]);
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1,2]), []);

