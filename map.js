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

const map = (arr, callBack) => {
  const newArray = [];
  arr.forEach(element => {
    newArray.push(callBack(element));
  });

  return newArray;
}


const array = ["beans", "treats", "toots", "scoops"];
assertArraysEqual(map(array, (x) => x.length), [5, 6, 5, 6]);

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);