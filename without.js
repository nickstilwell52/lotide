const without = function(wanted, unwanted) {
  const result = [];
  if (typeof wanted !== "object" || typeof unwanted !== "object") {
    return;
  } else {
    for (let i = 0; i < wanted.length; i++) {
      if (wanted[i] !== unwanted[i]) {
        result.push(wanted[i]);
      }
    }
  }
  console.log(result)
};

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function