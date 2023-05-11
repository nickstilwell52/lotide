const eqArrays = function(actual, expected) {
  let assertResult = false;
  if (actual.length === expected.length) {
    assertResult = true;
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        assertResult = false;
      }
    }
  }
  return assertResult;
};

module.exports = eqArrays;