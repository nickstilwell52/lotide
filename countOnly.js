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


const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      console.log(item);
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
