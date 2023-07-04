const head = require('./head');
const middle = require('./middle');
const tail = require('./tail');
const countLetters = require('./countLetters');
const eqArrays = require('./eqArrays');
const countOnly = require('./countOnly');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');

module.exports = {
  countLetters: countLetters,
  countOnly: countOnly,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  head: head,
  letterPositions: letterPositions,
  middle: middle,
  tail: tail
};