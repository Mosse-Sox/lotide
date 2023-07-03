const assertEqual = require("./assertEqual");

const head = function(array) {
  if (array.length > 0) {
    const firstElement = array[ 0 ];
    return firstElement;
  }

  return undefined;
};

assertEqual(head([ "Hello", "Lighthouse", "Labs" ]), "Hello");
assertEqual(head([ "Hey", "Lighthouse", "Labs" ]), "Hey");
assertEqual(head([ 5, 6, 7 ]), 5);
assertEqual(head([]), undefined);