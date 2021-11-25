const middle = (arr) => {
  if (arr.length <= 2) {
    return [];
  }
  if (arr.length % 2 === 1) { //odd length
    return arr[Math.ceil(arr.length / 2 - 1)];
  }
  if (arr.length % 2 === 0) { //even length
    return [arr[(arr.length / 2 - 1)],arr[arr.length / 2]];
  }
};
module.exports = middle;