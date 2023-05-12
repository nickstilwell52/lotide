const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3], true); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1], false); // => false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"], true); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3], false); // => false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"], false); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3], true); // => false
assertArraysEqual(1, ["1", "2", 3], true); // => false