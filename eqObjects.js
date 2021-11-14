function assertEqual(actual, expected){
  if(actual === expected){
    return console.log('Assertion Passed: ' + actual + ' === ' + expected)
  } else {
    return console.log('Assertion Failed: "' + actual + '" !== "' + expected + '"')
  }
};

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
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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

const ab = { a: '1', b: '2'};
const ba = { b: '2', a: '1'};

eqObjects(ab,ba);
const abc = {a:'1', b:'2', c:'3'};
eqObjects(ab,abc);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

assertEqual(eqObjects(ab,ba), true);
assertEqual(eqObjects(ab,abc), false);
assertEqual(eqObjects(cd,dc),true);
assertEqual(eqObjects(cd,cd2),false);
