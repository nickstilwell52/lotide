const assertEqual = function(actual, expected) {
  let assertResult = false;
  if (typeof actual === "object") {
    if (actual.length === expected.length) {
      assertResult = true;
      for (let i = 0; i < actual.length; i++) {
        if (actual[i] !== expected[i]) {
          assertResult = false;
        }
      }
    }
  } else {
    if (actual === expected) {
      assertResult = true;
    } else {
      assertResult = false;
    }
  }
  if (assertResult === true) {
    return console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`❎ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence.charAt(i) !== ' ') {
      if (results[(sentence.charAt(i))]) {
        results[(sentence.charAt(i))].push(i);
      } else {
        results[(sentence.charAt(i))] = [i];
      }
    }
  }
  return results;
};


const result1 = letterPositions('hello world');
console.log(result1);
assertEqual(result1["h"], [0]);
assertEqual(result1["e"], [1]);
assertEqual(result1["l"], [2,3,9]);
assertEqual(result1["o"], [4,7]);
assertEqual(result1[" "], undefined);

module.exports = letterPositions;