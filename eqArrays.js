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
  for (let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
  }
}
eqArrays([1, 2, 3], [1, 2, 3]) // => true
console.log();
eqArrays([1, 2, 3], [3, 2, 1]) // => false
console.log();
eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
console.log();
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false