const eqArrays = require('./eqArrays');
const assertArraysEqual = (arr1, arr2) => {
  
  if (eqArrays(arr1, arr2)) {
    return true;
  } else {
    return false;
  }
};
module.exports = assertArraysEqual;