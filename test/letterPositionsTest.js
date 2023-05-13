const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

const result1 = letterPositions('hello world');

describe("#letterPositions", () => {
  it("returns [0] for ['h']", () => {
    assert.deepEqual(result1['e'], [1]);
  });
  it("returns [2,3,9] for ['l']", () => {
    assert.deepEqual(result1['l'], [2,3,9]); 
  });
  it("returns [4,7] for ['o']", () => {
    assert.deepEqual(result1['o'], [4,7]); 
  });
  it("returns undefined for [' ']", () => {
    assert.deepEqual(result1[' '], undefined); 
  });
});