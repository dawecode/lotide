const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true 
  }
};



/*const eqArrays = function (arr1, arr2) {
  if (arr1.length === 0 && arr2.length ===0){
    return true 
  } else if (arr1.length !== arr2.length) {
    return false;
  }for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    } 
    return true;
  }
};*/

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const middle = function(arr) {
  let middArr = []
   let mid = Math.round((arr.length /2) -1)
  if (arr.length <= 2) {
    middArr = []
  } else if (arr.length % 2 === 1) {
    middArr.push(arr[mid])
  } else if (arr.length % 2 === 0) {
    middArr.push(arr[mid])
    middArr.push(arr[mid +1])
  }
  return middArr
}

//TEST MIDDLE 
assertArraysEqual(middle([1, 2]), [])// should pass 
assertArraysEqual(middle([1]), [])// should pass 
assertArraysEqual(middle([1, 2, 3]), [2])// should pass 
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])// should pass 
assertArraysEqual(middle([1, 2, 3]), [3])// should fail
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [2])// should fail
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [4, 5])// should fail 