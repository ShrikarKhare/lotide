const assertEqual = require('./assertEqual');

  const findKey = (object, callback) => {
      let returnval;
    for(let key in object) {
        if(callback(object[key])){
            returnval = key;
            return returnval;
        }

    }
  }

  let result = findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 12 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 21 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2)

  assertEqual(result , 'noma')
  module.exports = findKey;