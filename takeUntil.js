const takeUntil = (array,callback) => {
  let returnarr = [];
    
  for (let item of array) {
    if (callback(item)) {
      break;
    } else {
      returnarr.push(item);
    }
  }
  return returnarr;
};
module.exports = takeUntil;