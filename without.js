const without = (source, itemsToRemove) => {
  let sortedarray = [];
  for (let i = 0; i < source.length; i++) {
    if (itemsToRemove.includes(source[i])) {
      continue;
    } else {
      sortedarray.push(source[i]);
    }
  }
  return sortedarray;
};
module.exports = without;