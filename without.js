const without = function(array, itemToRemove) {
  let arrayWithout = [];

  for (let i = 0; i < array.length; i++) {
    for (let k = 0; k < itemToRemove.length; k++) {
      if (array[i] === itemToRemove[k]) {
        continue;
      }
      arrayWithout.push(array[i]);
    }
  }

  return arrayWithout;
};

module.exports = without; 
