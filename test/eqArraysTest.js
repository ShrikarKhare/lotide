const eqArrays = require("../eqArrays");
const assert = require('chai').assert;

describe('#eqArrays', () => {
  it('should return true when arrays are the same', () => {
    assert.deepEqual(eqArrays([1,2,3],[1,2,3]), true);
  });
  it('should return false when there is a string in the num arrays', () => {
    assert.deepEqual(eqArrays([1,2,3],[1,'2',3]), false);
  });
});
