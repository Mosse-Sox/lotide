// this function takes an array and returns all but the first element of the array
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

module.exports = tail;