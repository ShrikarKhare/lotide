const eqObjects = require('./eqObjects');
const assertObjectsEqual = (actual, expected) => {
  if (eqObjects(actual,expected)) {
    return true;
  } else {
    return false;
  }
};

module.exports = assertObjectsEqual;
