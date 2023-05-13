# Lotide

# How to use it:
## [index](index.js) 
this file will require every module (file containing the function) listed below.

so when you require the index like this:
```JavaScript
    const _ = require('index');
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