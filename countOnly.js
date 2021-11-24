const assertEqual =  require('./assertEqual');

const countOnly = (allItems, itemsToCount) => {
  const results = {}
  for (const item of allItems){
    if(itemsToCount[item]){
      if(item in results){
        results[item]++;
      } else {
        results[item] = 1;
      };
    };
  };
  return results;
}
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
module.exports = countOnly;