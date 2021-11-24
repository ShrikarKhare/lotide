const assert = require('chai').assert;
const findKey = require('../findKey');

let testObject = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 21 },
    "Akelarre":  { stars: 3 }
};

describe('#findKey', ()=> {
    it('should return noma for 2 stars', () => {
        assert.strictEqual(findKey(testObject, x => x.stars === 2),'noma');
    });
    it('should return Ora for 21 stars', () => {
        assert.strictEqual(findKey(testObject, x => x.stars === 21),'Ora');
    });
});