const middle = function(array) {
  let middleElements = [];

  if (array.length === 0 || array.length === 1 || array.length === 2) {
    return middleElements;
  }

  if (array.length % 2 === 0) {
    const indexOne = Math.floor(array.length / 2) - 1;
    const indexTwo = Math.ceil(array.length / 2);
    middleElements = [ array[ indexOne ], array[ indexTwo ] ];
    return middleElements;
  }

  const middleIndex = Math.floor(array.length / 2);
  middleElements.push(array[middleIndex]);
  return middleElements;
};

module.exports = middle; 