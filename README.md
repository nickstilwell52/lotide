# Lotide
A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 
## Usage:
**Install it:**\
`npm install @nickstilwell52/lotide`

**Require it:**\
`const _ = require('@nickstilwell52/lotide');`

so when you require the index like this:
```JavaScript
    const _ = require('@nickstilwell52/lotide');
```
this will create an object containing all the functions, which will allow you to access a certain function, for example:

```JavaScript
    const myArray = [1,2,3];
    console.log(_.tail(myArray));
```
will log this into the console: 
> [2,3]

## Functions:
* [countOnly](countOnly.js):\
  return the count from a given list of objects only for items that are chosen to be counted.

* [findKeyByValue](findKeyByValue.js):\
find the name of the key which contains the given value in the given object

* [flatten](flatten.js):\
returns a flattened array.

* [head](head.js):\
returns the first element of an array.

* [letterPositions](letterPositions.js):\
returns the given sentence as an object with the letters of the sentence as keys,\
 and the values of them an array of the indexes the letters appeared.

* [middle](middle.js):\
returns the middle element(s) of an array.

* [tail](tail.js):\
returns everything except the first element of an array.

* [eqObjects](eqObjects.js):\
returns true or false if two objects contain identical keys and values.

* [eqArrays](eqArrays.js):\
returns true or false if two arrays are identical.