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


const eqArrays = function(array1, array2) {
  let matching = true;

  for (let i = 0; i < array1.length; i++) {
    const element1 = array1[i];
    const element2 = array2[i];

    if (typeof(element1) !== typeof(element2)) {
      matching = false; 
      return matching;
    }

    if (element1 !== element2) {
      matching = false;
      
      return matching;
    }

    
  }
  return matching;
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // pass
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // fails
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // pass
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // pass 