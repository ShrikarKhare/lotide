const assertEqual = (actual, expected) => {
  if(actual === expected) {
    return true;
  } else {
    return false;
  }
};

module.exports = assertEqual;