const eqArrays = require('./eqArrays');
const assertArraysEqual = (arr1, arr2) => {
  if(eqArrays(arr1, arr2)) {
    return `${arr1} === ${arr2}`; 
  } else {
    return `${arr1} !== ${arr2}`;
  }
}
module.exports = assertArraysEqual;