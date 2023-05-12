const eqArrays = function(array1, array2) {
  let assertResult = false;
  if (array1.length === array2.length) {
    assertResult = true;
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        assertResult = false;
      }
    }
  }
  return assertResult;
};

module.exports = eqArrays;