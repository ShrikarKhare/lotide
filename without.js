function assertArraysEqual(arr1,arr2){
  if(arr1.length !== arr2.length){
    return console.log(arr1 + ' !== ' + arr2);
  } else {
    for(let i = 0; i < arr1.length; i++){
      if(arr1[i] !== arr2[i]){
        return console.log(arr1 + ' !== ' + arr2);
      }
    }
    return console.log(arr1 + ' === ' + arr2);
  }
}
function eqArrays(arr1,arr2){
  if(arr1.length !== arr2.length){
    return false;
  } else {
    for(let i = 0; i < arr1.length; i++){
      if(arr1[i] !== arr2[i]){
        return false;
      }
    }
    return true;
  }
}

function without(source, itemsToRemove){
  var sortedarray =[];
  for (let i = 0; i < source.length; i++){
    if(itemsToRemove.includes(source[i])){
      continue;
    } else {
      sortedarray.push(source[i]);
    }
  }
  return sortedarray;
}

//Test cases
const words = ["hello", "world", "lighthouse"]; //Test Case
console.log(without(words, ["lighthouse"])); // Test Case
console.log(without(words, [])); // Test Case
console.log(without([], 'lighthouse')); // Test Case
console.log(without([1,2,3,4,5], [2,'3',4]));//Test Case
