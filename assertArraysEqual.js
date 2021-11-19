const eqArrays = require('./eqArrays');
const assertArraysEqual = (arr1, arr2) => {
  if(eqArrays(arr1, arr2)) {
    return console.log(`${arr1} === ${arr2}`); 
  } else {
    return console.log(`${arr1} !== ${arr2}`);
  }
}
module.exports = assertArraysEqual;