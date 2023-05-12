const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([1]),[],false); // => []
assertArraysEqual(middle([1, 2]),[],true); // => []
assertArraysEqual(middle([1, 2, 3]),[2],true); // => [2]
assertArraysEqual(middle([1, 2, 3, 4]),[2, 3],true); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3],true); // => [3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4],false); // => [3, 4]