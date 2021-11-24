  const findKey = (object, callback) => {
    let returnval;
    for(let key in object) {
      if(callback(object[key])){
        returnval = key;
        return returnval;
      }
    }
  }
  module.exports = findKey;