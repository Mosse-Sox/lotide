const assertEqual = require("./assertEqual");

const head = function(array) {
  if (array.length > 0) {
    const firstElement = array[ 0 ];
    return firstElement;
  }

  return undefined;
};

module.exports = head; 