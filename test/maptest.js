const assert = require('chai').assert;
const map = require('../map');
const words = ["ground", "control", "to", "major", "tom"];
describe('#map', ()=> {
  it('should return the first letters of each word', () => {
    assert(map(words, word => word[0]));
  });
  it('should return the last letter of each word', () => {
    assert(map(words, word => word[word.length - 1]));
  });
  it('should return the word', () => {
    assert(map(words, word => word));
  });
});