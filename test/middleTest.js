const middle = require('../middle')
const assertArraysEqual = require('../assertArraysEqual')
//TEST MIDDLE 
assertArraysEqual(middle([1, 2]), [])// should pass 
assertArraysEqual(middle([1]), [])// should pass 
assertArraysEqual(middle([1, 2, 3]), [2])// should pass 
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])// should pass 
assertArraysEqual(middle([1, 2, 3]), [3])// should fail
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [2])// should fail
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [4, 5])// should fail 
