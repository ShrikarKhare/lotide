const input = process.argv.slice(2);

function eqArrays(arr1,arr2){
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

eqArrays(input[0],input[1]) // should return true
