const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length === 0 && arr2.length === 0) {
    return true;
  } else if (arr1.length !== arr2.length) {
    return false;
  } for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
    return true;
  }
};

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else if (sentence[i] !== " ") {
      results[sentence[i]] = [];
      results[sentence[i]].push(i);
    }
  }
  return results;
};

//TEST
assertArraysEqual((letterPositions("hello").e), [1]);//should pass
assertArraysEqual((letterPositions("hello").l), [2, 3]);//should pass
assertArraysEqual((letterPositions("hello").h), [1]);// should fail

module.exports = letterPositions;