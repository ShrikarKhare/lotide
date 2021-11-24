const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
describe('#assertEqual', ()=> {
    it('should return true for same values', () => {
        assert.strictEqual(assertEqual(1,1),true);
    });
    it('should return false for different values', () => {
        assert.strictEqual(assertEqual('Lighthouse Labs', 'Bootcamp'), false);
    });
});