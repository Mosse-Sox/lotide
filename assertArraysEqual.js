const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  
  if (!eqArrays(actual, expected)) {
    console.log(`🫥🫥🫥 ${actual} !== ${expected} 🫥🫥🫥`);
    return;
  }

  console.log(`☽⍟☾ ☽⍟☾ ${actual} === ${expected} ☽⍟☾ ☽⍟☾`);
};

module.exports = assertArraysEqual; 

