// this function returns a message based on if the values passed to it are equal or not
const assertEqual = function(actual, expected) {
  let matching = false;

  if (actual === expected) {
    matching = true;
  }

  if (matching === true) {
    console.log(`🍀🍀🍀 ${actual} === ${expected}`);
    return;
  }

  console.log(`❗️❗️❗️ ${actual} !== ${expected}`);
};

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

// test array functionality
const pantsObject = { fabric: ["jean", "cotton"], length: 30 };
const anotherPantsObject = { length: 30, fabric: ["jean", "cotton"] };
assertEqual(eqObjects(pantsObject, anotherPantsObject), true);
const differentPantsObject = { fabric: ["jean", "cotton"], length: "30", brand: "wrangler" };
assertEqual(eqObjects(pantsObject, differentPantsObject), false);


// test values without arrays for values
const fruitObject = { type: "strawberry", size: "regular" };
const anotherFruitObject = { size: "regular", type: "strawberry" };
assertEqual(eqObjects(fruitObject, anotherFruitObject), true);
const differentFruitObject = { size: "regular", type: "strawberry", juiciness: "juicy" };
assertEqual(eqObjects(pantsObject, differentFruitObject), false);