const flatten = function(input) {
  let result = [];
  if (Array.isArray(input) === false) {
    return;
  } else {
    result = input.flat();
  }
  console.log(result);
};

flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]

module.exports = flatten;