const assert = require('chai').assert;
const assertObjectsEqual = require('../assertObjectsEqual');
const obj1 = {
  name: 'A',
  title: 'B'
};
const obj2 = {
  name: 'A',
  title: 'B',
};
describe("#assertObjectsEqual", ()=>{
    it('should return true when comparing objects with same key-val pairs', ()=>{
        assert.deepEqual(assertObjectsEqual(obj1,obj2), true);
    });
    it('should return false if one of the objects is undefined', () =>{
        assert.deepEqual(assertObjectsEqual(obj1), false);
    });
})