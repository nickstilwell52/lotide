const findKey = function(data, callback) {
  for (key of Object.keys(data)) {
    if (callback(data[key])) {
    return +Object.values(data[key]);
    }
  }
};

const results2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`❎ Assertion Failed: ${actual} !== ${expected}`);
  }
};

console.log(assertEqual(results2,2));

module.exports = findKey;