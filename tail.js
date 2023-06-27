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

const tail = function(array) {
  let tail = new Array();

  if (array.length > 1) {
    for (let i = 1; i < array.length; i++) {
      tail.push(array[ i ]);
    }
    return tail;
  } else if (array.length === 1) {
    return tail;
  }

  return undefined;
};

const words = [ "Yo Yo", "Lighthouse", "Labs" ];
tail(words);
assertEqual(words.length, 3);

const numbers = [ 5, 4, 3, 2, 1 ];
const numbersTail = tail(numbers);
assertEqual(numbersTail.length, 4);

const oneElement = [ 1 ];
const oneElementTail = tail(oneElement);
assertEqual(oneElementTail.length, 0);

const nothing = [];
const nothingTail = tail(nothing);
assertEqual(nothingTail, undefined);