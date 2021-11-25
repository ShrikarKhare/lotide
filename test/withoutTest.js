const assert = require('chai').assert;
const without = require('../without');
const words = ["hello", "world", "lighthouse"];

describe('#without', ()=> {
  it('should return ["hello", "world"] without ["lighthouse"]', () => {
    assert.deepEqual(without(words, ['lighthouse']), ['hello','world']);
  });
  it('should return full array', () => {
    assert.deepEqual(without(words, []), ['hello','world', 'lighthouse']);
  });
  it('should return [] without a word array passed', () => {
    assert.deepEqual(without([], ['lighthouse']), []);
  });
  it('should return [1,3,5] when removing numbers from array', () => {
    assert.deepEqual(without([1,2,3,4,5], [2,'3',4]), [1,3,5]);
  });
});