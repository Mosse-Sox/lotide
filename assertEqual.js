// this function returns a message based on if the values passed to it are equal or not
const assertEqual = function(actual, expected) {
  let matching = false;

  if (actual === expected) {
    matching = true;
  }

  if (matching === true) {
    console.log(`☽⍟☾ ☽⍟☾ ${actual} === ${expected} ☽⍟☾ ☽⍟☾`);
    return;
  }

  console.log(`🫥🫥🫥 ${actual} !== ${expected} 🫥🫥🫥`);
};

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

module.exports = assertEqual; 