const eqArrays = require('./eqArrays');

// this function returns true if two objects have the same key: value pairs and false otherwise
// handles arrays as values but not objects as values
const eqObjects = function(object1, object2) {
  let matching = true;

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    matching = false;
    return matching;
  }

  for (const key in object1) {
    if (Array.isArray(object1[key])) {
      matching = eqArrays(object1[key], object2[key]);
      return matching;
    }

    if (!(key in object2) || object1[key] !== object2[key]) {
      matching = false;
      return matching;
    }
  }
  
  return matching;
};

module.exports = eqObjects;
