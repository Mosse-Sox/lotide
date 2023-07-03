const assertEqual = require('../assertEqual');
const head = require('../head');  

assertEqual(head([ "Hello", "Lighthouse", "Labs" ]), "Hello");
assertEqual(head([ "Hey", "Lighthouse", "Labs" ]), "Hey");
assertEqual(head([ 5, 6, 7 ]), 5);
assertEqual(head([]), undefined);