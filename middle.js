const middle = function(array) {
  let result = [];
  let i = (array.length / 2) - 1;
  if (Array.isArray(array) === false || array.length < 3) {
    return result;
  } else {
    if (array.length % 2 === 1) {
      i += 0.5;
      result.push(array[i]);
    } else {
      result.push(array[i]);
      i++;
      result.push(array[i]);
    }
  }
  return result;
};
module.exports = middle;