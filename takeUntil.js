const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};


const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};


const takeUntil = function(array, callback) {
  let sliced = [];
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      sliced.push(array[i]);
    } else if (callback(array[i])) {
      break;
    }
  }
  return sliced;
};



//ex
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

//TESTING
assertArraysEqual(results1, [1, 2, 5, 7, 2]);// should pass
assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']); // should pass
assertArraysEqual(results1, [1, 2, 4, 7, 2]);// should fail

//EXPECTED OUTPUT
/*[ 1, 2, 5, 7, 2 ]
---
[ 'I\'ve', 'been', 'to', 'Hollywood' ]*/