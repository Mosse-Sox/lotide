// this function returns a message based on if the values passed to it are equal or not
const assertEqual = (actual, expected) => {
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

const findKey = (object, callback) => {

  for (const key in object) {
    console.log(callback(object[key]));
    if (callback(object[key])) {
      return key;
    }

    
  }
  return undefined;
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2), "noma"); // => "noma"
