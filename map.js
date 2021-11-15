const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback){
    const results = [];
    for ( let item of array) {
        results.push(callback(item));
    }
    return results;
};
const results1 = map(words, word => word[0]);
console.log(results1);

function assertArraysEqual(arr1,arr2){
    if(arr1.length !== arr2.length){
      return console.log(arr1 + ' !== ' + arr2)
    } else {
      for(let i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]){
          return console.log(arr1 + ' !== ' + arr2)
        }
      }
      return console.log(arr1 + ' === ' + arr2)
    }
}
function eqArrays(arr1,arr2){
    if(arr1.length !== arr2.length){
      return false
    } else {
      for(let i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]){
          return false
        }
      }
      return true
    }
  }

//   assertArraysEqual(words, ['a','b','c','d']); //test case 1
//   assertArraysEqual(words, words); //test case 2
//   assertArraysEqual(words, []); //test case 3