const assert = require('chai').assert;
const takeUntil = require('../takeuntil');
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

describe('#takeuntil', ()=> {
    it('should return -1 when callback is x < 0', () => {
        assert.deepEqual(takeUntil(data1, x => x<0), [ 1, 2, 5, 7, 2 ]);
    });
    it('should return "I\'ve been to Hollywood," when callback is x === ","', () => {
        assert.deepEqual(takeUntil(data2, x => x === ","), [ "I've", 'been', 'to', 'Hollywood' ]);
    });
});
