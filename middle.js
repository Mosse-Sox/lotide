const eqArrays = function(actual, expected) {
  let matching = true;

  for (let i = 0; i < actual.length; i++) {
    const actualElement = actual[i];
    const expectedElement = expected[i];

    if (actualElement !== expectedElement || typeof(actualElement) !== typeof(expectedElement)) {
      matching = false;
      return matching;
    }
  }

  return matching;
};


const assertArraysEqual = function(actual, expected) {
  
  if (!eqArrays(actual, expected)) {
    console.log(`❗️❗️❗️ ${actual} !== ${expected}`);
    return;
  }

  console.log(`🍀🍀🍀 ${actual} === ${expected}`);
};

const middle = function(array) {
  let middleElements = [];

  for(let i = 1; i < array.length - 1; i++) {
    middleElements.push(array[i]);
  }

  return middleElements;
}

// assertArraysEqual()