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
const eqObjects = function(object1, object2) {
  let matching = true;

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    matching = false;
    return matching;
  }

  for (const key in object1) {
    if (Array.isArray(object1[key])) {
      matching = eqArrays(object1[key], object2[key]);
      return matching;
    }

    if (!(key in object2) || object1[key] !== object2[key]) {
      matching = false;
      return matching;
    }
  }
  
  return matching;
};


const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;

  let matching = eqObjects(object1, object2);

  if (matching) {
    console.log(`🍀🍀🍀 ${inspect(object1)} === ${inspect(object2)}`);
    return;
  }

  console.log(`❗️❗️❗️ ${inspect(object1)} !== ${inspect(object2)}`);
};

const pantsObject = { fabric: ["jean", "cotton"], length: 30 };
const anotherPantsObject = { length: 30, fabric: ["jean", "cotton"] };
assertObjectsEqual(pantsObject, anotherPantsObject);
const differentPantsObject = { fabric: ["jean", "cotton"], length: "30", brand: "wrangler" };
assertObjectsEqual(pantsObject, differentPantsObject);
