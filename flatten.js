const flatten = function(input) {
  let result = [];
  if (Array.isArray(input) === false) {
    return;
  } else {
    result = input.flat();
    return result;
  }
};

module.exports = flatten;