const assertEqual = require('../assertEqual');

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("hello", "hello");
assertEqual(1, 1);
assertEqual(1, 2);

//❎ Assertion Failed: Lighthouse Labs !== Bootcamp
//✅ Assertion Passed: hello === hello
//✅ Assertion Passed: 1 === 1
//❎ Assertion Failed: 1 !== 2