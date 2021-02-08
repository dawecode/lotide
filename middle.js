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


module.exports = middle; 