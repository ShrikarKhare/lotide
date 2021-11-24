const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;
const arr1 = [1,2,3];
const arr2 = [1,2,3];
describe('#assertArraysEqual', () => {
    it('should return true for 1,2,3 === 1,2,3', () => {
        assert.strictEqual(assertArraysEqual(arr1,arr2), true);
    });
});