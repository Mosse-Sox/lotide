const tail = require('../tail');
const assertEqual = require('../assertEqual');

const words = [ "Yo Yo", "Lighthouse", "Labs" ];
tail(words);
assertEqual(words.length, 3);

const numbers = [ 5, 4, 3, 2, 1 ];
const numbersTail = tail(numbers);
assertEqual(numbersTail.length, 4);

const oneElement = [ 1 ];
const oneElementTail = tail(oneElement);
assertEqual(oneElementTail.length, 0);

const nothing = [];
const nothingTail = tail(nothing);
assertEqual(nothingTail, undefined);