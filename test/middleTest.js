const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
assertArraysEqual(middle([1,2,3,4,5,6,7]), [4]); //Test Case
assertArraysEqual(middle([1,2,3,4,5,6,7,8]),[4,5]); //Test Case
assertArraysEqual(middle([1,2,3,4,5,6,7,99,21635,2,6,48]),[6,7]); //Test Case
assertArraysEqual(middle([1,2,3,4,5,6,7,8,1,1,1,1,1,1,1,1,2]),[8]); //Test Case