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
function middle(arr){
  var middleval =[];
  if (arr.length <=2){
    return []
  }
  if (arr.length%2 === 1){ //odd length
    return arr[Math.ceil(arr.length/2)-1]
  }
  if (arr.length%2 === 0){ //even length
    return [arr[(arr.length/2)-1],arr[arr.length/2]]
  }
}
console.log(middle([1,2,3,4,5,6,7])) //Test Case
console.log(middle([1,2,3,4,5,6,7,8])) //Test Case
console.log(middle([1,2,3,4,5,6,7,99,21635,2,6,48])) //Test Case
console.log(middle([1,2,3,4,5,6,7,8,1,1,1,1,1,1,1,1,2])) //Test Case
