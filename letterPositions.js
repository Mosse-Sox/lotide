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

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }

  return results;
};

const tester = letterPositions("hello");

assertArraysEqual(tester["h"], [0]);
assertArraysEqual(tester["e"], [1]);
assertArraysEqual(tester["l"], [2,3]);
assertArraysEqual(tester["o"], [4]);