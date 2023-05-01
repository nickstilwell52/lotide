const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

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


const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(assertEqual((results1),['g','c','t','m','t']));
console.log(assertEqual((results1),['a','b','c','d','e']));
