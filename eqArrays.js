const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    } else if (arr1.length !== arr2.length) {
      return false;
    }
    return true;
  }
};


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false); // should pass
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // should pass
assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), false); // should pass