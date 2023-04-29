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

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]