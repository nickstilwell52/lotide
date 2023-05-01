const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let assertResult = undefined;
  if (Array.isArray(actual) || Array.isArray(expected)) {
    assertResult = "❎ Assertion Failed: there is an array amongus.";
  } else if (typeof actual !== "object" || typeof expected !== "object") {
    assertResult = "❎ Assertion Failed: the objects are sus";
  } else {
    assertResult = eqObjects(actual, expected);
  }
  if (assertResult === false) {
    assertResult = (`❎ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  } else if (assertResult === true) {
    assertResult = (`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
  console.log(assertResult);
};


const eqArrays = function(array1, array2) {
  let result = false;
  if (Array.isArray(array1) === false || (Array.isArray(array2) === false)) {
    return false;
  } if (array1.length !== array2.length) {
    return false;
  } else {
    result = true;
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return result;
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (const key of Object.keys(object1)) {
      if (Array.isArray(object1[key]) || Array.isArray(object2[key])) {
        if (eqArrays(object1[key], object2[key]) === false) {
          return false;
        } else if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
  }
  return true;
};


const shirtObject = {
  color: "red",
  size: "medium"
};
const anotherShirtObject = {
  size: "medium",
  color: "red"
};
const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long"
};
const multiColorShirtObject = {
  colors: ["red", "blue"],
  size: "medium"
};
const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long"
};
const randomArray = ["testing","hello","world"];


assertObjectsEqual(shirtObject,anotherShirtObject);
assertObjectsEqual(shirtObject,longSleeveShirtObject);
assertObjectsEqual(multiColorShirtObject,longSleeveMultiColorShirtObject);
assertObjectsEqual(longSleeveMultiColorShirtObject,longSleeveShirtObject);
assertObjectsEqual(longSleeveShirtObject,randomArray);
assertObjectsEqual("longSleeveMultiColorShirtObject",longSleeveShirtObject);