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


const without = function(array, itemToRemove) {
  let arrayWithout = [];

  for (let i = 0; i < array.length; i++) {
    for (let k = 0; k < itemToRemove.length; k++) {
      if (array[i] === itemToRemove[k]) {
        continue;
      }
      arrayWithout.push(array[i]);
    }
  }

  return arrayWithout;
}

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

const veggies = ["carrot", "peppers", "cucumbers"];
const veggiesWithoutPeppers = without(veggies, ["peppers"]);
assertArraysEqual(veggiesWithoutPeppers, ["carrot", "peppers", "cucumbers"]);