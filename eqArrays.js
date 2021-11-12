const input = process.argv.slice(2);
function assertEqual(actual, expected){
  if(actual === expected){
    return console.log('Assertion Passed: ' + actual + ' === ' + expected)
  } else {
    return console.log('Assertion Failed: "' + actual + '" !== "' + expected + '"')
  }
};

console.log(input)
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

assertEqual(eqArrays([1,2,3],[1,2,3]), true); // should return true
assertEqual(eqArrays([1,2,3],[1,"2",3]), true); //should return false
