const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it('returns 4 for [1,2,3,4,5,6,7]', () => {
    assert.deepEqual(middle([1,2,3,4,5,6,7]), 4);
  });
  it('it returns [4,5] for [1,2,3,4,5,6,7,8]', () => {
    assert.deepEqual(middle([1,2,3,4,5,6,7,8]), [4,5]);
  });
  it('it returns 1 for [1,2,3,4,5,6,7,8,1,1,1,1,1,1,1,1,2]', () => {
    assert.deepEqual(middle([1,2,3,4,5,6,7,8,1,1,1,1,1,1,1,1,2]),1);
  });
  it('it returns [6,7] for [1,2,3,4,5,6,7,99,21635,2,6,48]', () => {
    assert.deepEqual(middle([1,2,3,4,5,6,7,99,21635,2,6,48]), [6,7]);
  });
});