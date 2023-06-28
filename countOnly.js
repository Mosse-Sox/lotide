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

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const counts = {};

  for (const key in itemsToCount) {
    for (const element of allItems) {
      
      if (itemsToCount[key] === true) {
        
        if (element === key) {

          if (counts[key]) {
            counts[key] += 1;
          } else {
            counts[key] = 1;
          }

        }
      }
    }
  }

  return counts;
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];


// test
const result1 = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});

console.log(result1);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);