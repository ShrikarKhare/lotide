const assertEqual = function(actual, expected){
    if(actual === expected){
      return console.log('Assertion Passed: ' + actual + ' === ' + expected)
    } else {
      return console.log('Assertion Failed: "' + actual + '" !== "' + expected + '"')
    }
  };

  const findKey = (object, callback) => {
      let returnval;
    for(let key in object) {
        if(callback(object[key])){
            returnval = key;
            return returnval;
        }

    }
  }

//   const findKey2 = (object, callback) => {
//     const found = object.find(callback);

//     return found
//   }

  let result = findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 12 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 21 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2)

  assertEqual(result , 'noma')