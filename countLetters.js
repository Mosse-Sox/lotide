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


const countLetters = function(lettersToCount) {
  const letterCounts = {};

  for (const letter of lettersToCount) {
    
    if (letterCounts[letter]) {
      letterCounts[letter]++;
    } else {
      letterCounts[letter] = 1;
    }
  }

  return letterCounts;
};

console.log(countLetters("beefaroonie"));

const result = countLetters("beefaroonie");

assertEqual(result['b'], 1);
assertEqual(result['e'], 3);
assertEqual(result['f'], 1);
assertEqual(result['a'], 1);
assertEqual(result['r'], 1);
assertEqual(result['o'], 2);
assertEqual(result['n'], 1);
assertEqual(result['i'], 1);
assertEqual(result['z'], undefined);
assertEqual(result[''], undefined);