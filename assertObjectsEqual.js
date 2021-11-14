function eqObjects(object1, object2){
  var obj1 = Object.keys(object1);
  var obj2 = Object.keys(object2);
  if(obj1.length !== obj2.length){
    return false;
  } else {
    for(i of obj1){
      if(Array.isArray(object1[i])){
        return eqArrays(object1[i],object2[i]);
      } else if(object1[i] !== object2[i]){
        return false;
      };
    };
    return true;
  };
};
function assertObjectsEqual(actual, expected){
  const inspect = require('util').inspect;
  // console.log(`Example label: ${inspect(actual)}`);
  if(eqObjects(actual,expected)){
    return console.log(`Assertion Passed: ${inspect(actual)} ===  ${inspect(expected)}`)
  } else {
    return console.log(`Assertion Failed: ${inspect(actual)} !==  ${inspect(expected)}`)
  }
};
const obj1 = {
  name: 'A',
  title: 'B'
}
const obj2 = {
  name: 'A',
  title: 'B',
}
assertObjectsEqual(obj1,obj2);
