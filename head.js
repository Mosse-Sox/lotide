// this function returns a message based on if the values passed to it are equal or not
const assertEqual = function (actual, expected) {
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

const head = function (array) {
  if (array.length > 0) {
    const firstElement = array[ 0 ];
    return firstElement;
  }

  return undefined;
}

assertEqual(head([ "Hello", "Lighthouse", "Labs" ]), "Hello");
assertEqual(head([ "Hello", "Lighthouse", "Labs" ]), "Labs");
assertEqual(head([ 5, 6, 7 ]), 5);
assertEqual(head([]), undefined);