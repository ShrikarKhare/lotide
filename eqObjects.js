const eqArrays = require('./eqArrays');
const eqObjects = (object1, object2) => {
  if (object1 === undefined || object2 === undefined) {
    return false;
  }
  let obj1 = Object.keys(object1);
  let obj2 = Object.keys(object2);
  if (obj1.length !== obj2.length) {
    return false;
  } else {
    for (let i of obj1) {
      if (Array.isArray(object1[i])) {
        return eqArrays(object1[i],object2[i]);
      } else if (object1[i] !== object2[i]) {
        return false;
      }
    }
    return true;
  }
};
module.exports = eqObjects;