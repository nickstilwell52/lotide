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

const findKeyByValue = function(genreList,favoriteShow) {
  for (const [genre, shows] of Object.entries(genreList)) {
    if (shows === favoriteShow) {
      return genre;
    }
  }
  return undefined;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
