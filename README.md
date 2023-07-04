# Lotide

a mini clone of the [Lodash](https://lodash.com) library.

## Purpose 

**_BEWARE:_ This library as published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Useage

**Install it:** 

`npm install @mosse-sox/lotide`

**Require it**

`const _ = require('@mosse-sox/lotide);`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The follow functions are currently implemeneted: 

* `countLetters(string)`: This function returns an object that has a count of how many times a letter shows up in a string.
* `countOnly(allItemsArray, itemsToCountObject)`: 
  This function returns an object with the counts of each name it found in the array that was marked `true` to count in the itemsToCountObject.
  * allArrayItems: `const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];`
  * itemsToCountObject: `{"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false}`.
* `eqArrays(array1, array2)`: This function returns true if two arrays are the same, and returns false if two arrays are not the same. 
* `eqObjects(object1, object2)`: This function returns true if two objects are the same, and returns false if two objects are not the same. 

* `findKeys(object, callback)`: This function returns the key if it exists specified by the callback function passing a value to it.
* `findKeysByValue(object, value)`: This function returns the key specified by the value passed to it. 
* `head(array)`: This function returns the first element of an array and does not alter the origin array. 
* `index.js`: This file exports every function as one object.
* `letterPositions(sentence)`: This function returns an object with the indexes of each letter. Example -> `letterPositions('hello')` would return `{ h: 0, e: 1, l: [2, 3], o: 4}`
* `map(array, callback)`: This function returns an array where every element of the passed array has been altered by a callback function. Does not alter original array. 
* `middle(array)`: This function returns the very middle element if an arrays length is odd or an arrays very middle two elements if an arrays length is even. Does not alter original array.
* `tail(array)`: This function returns all the elements in an array except for the first element. Does not alter the original array. 
* `takeUntil(array, callback)`: This function returns a sub array of the original array passed to it up until a point specified by the callback.
* `without(array, itemToRemove)`: This function returns a copy of the array passed to it without the specified item to remove. 