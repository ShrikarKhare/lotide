const eqArrays = require('./eqArrays');
// const assertEqual = (actual, expected) => {
//   if(actual === expected){
//     return console.log('Assertion Passed: ' + actual + ' === ' + expected)
//   } else {
//     return console.log('Assertion Failed: "' + actual + '" !== "' + expected + '"')
//   }
// };

// const eqArrays = (arr1,arr2) => {
//   if(arr1.length !== arr2.length){
//     return false
//   } else {
//     for(let i = 0; i < arr1.length; i++){
//       if(arr1[i] !== arr2[i]){
//         return false
//       }
//     }
//     return true
//   }
// }
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = (object1, object2) => {
  if (object1 === undefined || object2 === undefined) {
    return false;
  }
  var obj1 = Object.keys(object1);
  var obj2 = Object.keys(object2);
  if (obj1.length !== obj2.length) {
    return false;
  } else {
    for(i of obj1){
      if (Array.isArray(object1[i])) {
        return eqArrays(object1[i],object2[i]);
      } else if (object1[i] !== object2[i]) {
        return false;
      };
    };
    return true;
  };
};
module.exports = eqObjects;