const findKeyByValue = (obj, val) =>{
  let keys = Object.keys(obj);
  for (let i of keys) {
    if (obj[i] === val) {
      return i;
    }
  }
};

module.exports = findKeyByValue;