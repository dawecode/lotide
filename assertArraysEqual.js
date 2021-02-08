const eqArrays = require('./eqArrays');


const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};
//TEST
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);// should fail 
assertArraysEqual([1, 2, 3], [1, 2, 3]); // should pass 

module.exports = assertArraysEqual;