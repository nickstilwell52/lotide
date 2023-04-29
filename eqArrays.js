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
    };
  }
  if (assertResult === true) {
    return console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`❎ Assertion Failed: ${actual} !== ${expected}`);
  };
};

const tail = function(array) {
  return array.slice(1);
};

assertEqual([1, 2, 3], [1, 2, 3]) // => true
assertEqual([1, 2, 3], [3, 2, 1]) // => false

assertEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
assertEqual(["1", "2", "3"], ["1", "2", 3]) // => false


assertEqual([1, 2, 3], [1, 2, 3], true);