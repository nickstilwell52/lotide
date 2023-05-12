const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2, expected) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return console.log(`❎ Assertion Failed: not an array.`);
  }
  const assertResult = eqArrays(array1, array2);
  if (assertResult === expected) {
    if (expected === true) {
      return console.log(`✅ Assertion Passed: ${array1} === ${array2} as expected`);
    } else if (expected === false) {
      return console.log(`✅ Assertion Passed: ${array1} !== ${array2} as expected`);
    }
  } else if (assertResult !== expected) {
    if (expected === true) {
      return console.log(`❎ Assertion Failed: ${array1} !== ${array2} unexpectedly`);
    } else if (expected === false) {
      return console.log(`❎ Assertion Failed: ${array1} === ${array2} unexpectedly`);
    }
  }
};
module.exports = assertArraysEqual;