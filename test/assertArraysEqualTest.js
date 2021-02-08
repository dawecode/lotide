const assertArraysEqual = require('../assertArraysEqual')

//TEST
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);// should fail 
assertArraysEqual([1, 2, 3], [1, 2, 3]); // should pass 