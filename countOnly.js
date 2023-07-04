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

module.exports = countOnly;