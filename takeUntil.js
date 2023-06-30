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
    console.log(`🫥🫥🫥 ${actual} !== ${expected} 🫥🫥🫥`);
    return;
  }

  console.log(`☽⍟☾ ☽⍟☾ ${actual} === ${expected} ☽⍟☾ ☽⍟☾`);
};

const takeUntil = (array, callback) => {
  const newArray = [];
  let i = 0;
  while (!callback(array[i])) {
    newArray.push(array[i]);
    i++;
  }
  return newArray;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');


assertArraysEqual(results1, [1, 2, 5, 7, 2]);
console.log("---");
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);