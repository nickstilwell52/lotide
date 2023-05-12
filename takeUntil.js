const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item)) {
      return results;
    } else {
      results.push(item)
    }
  }
  return results;
};

const assertEqual = function(actual, expected) {
  let assertResult = false;
  if (Array.isArray(actual) && Array.isArray(expected)) {
    assertResult = eqArrays(actual, expected);
  }
  if (assertResult === false) {
    assertResult = (`❎ Assertion Failed: ${actual} !== ${expected}`);
  } else if (assertResult === true) {
    assertResult = (`✅ Assertion Passed: ${actual} === ${expected}`);
  }
  return assertResult;
};

const eqArrays = function(array1, array2) {
  let result = false;
  if (Array.isArray(array1) === false || (Array.isArray(array2) === false)) {
    return false;
  } if (array1.length !== array2.length) {
    return false;
  } else {
    result = true;
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results1);
console.log(assertEqual(results1,[1, 2, 5, 7, 2,]));
console.log('---');
console.log(results2);
console.log(assertEqual(results2,["I've", "been", "to", "Hollywood"]));

module.exports = takeUntil;