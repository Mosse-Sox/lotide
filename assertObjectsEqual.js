// this array returns true if two arrays are the same and false otherwise
const eqArrays = function(array1, array2) {
  let matching = true;

  for (let i = 0; i < array1.length; i++) {
    const element1 = array1[i];
    const element2 = array2[i];

    if (element1 !== element2 || typeof(element1) !== typeof(element2)) {
      matching = false;
      
      return matching;
    }
  }

  return matching;
};

// this function returns true if two objects have the same key: value pairs and false otherwise
// handles arrays as values but not objects as values
const eqObjects = function(actual, expected) {
  let matching = true;

  if (Object.keys(actual).length !== Object.keys(expected).length) {
    matching = false;
    return matching;
  }

  for (const key in actual) {
    if (Array.isArray(actual[key])) {
      matching = eqArrays(actual[key], expected[key]);
      return matching;
    }

    if (!(key in expected) || actual[key] !== expected[key]) {
      matching = false;
      return matching;
    }
  }
  
  return matching;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  let matching = eqObjects(actual, expected);

  if (matching) {
    console.log(`☽⍟☾ ☽⍟☾ ${inspect(actual)} === ${inspect(expected)} ☽⍟☾ ☽⍟☾`);
    return;
  }

  console.log(`🫥🫥🫥 ${inspect(actual)} !== ${inspect(expected)} 🫥🫥🫥`);
};

const pantsObject = { fabric: ["jean", "cotton"], length: 30 };
const anotherPantsObject = { length: 30, fabric: ["jean", "cotton"] };
assertObjectsEqual(pantsObject, anotherPantsObject);
const differentPantsObject = { fabric: ["jean", "cotton"], length: "30", brand: "wrangler" };
assertObjectsEqual(pantsObject, differentPantsObject);
