var assert = require('assert');
var isType = require('../');

describe('isType', function() {
    describe('#isType()', function() {
        it('should return function', function() {
            assert.equal('function', typeof isType.isType);
        });
    });
});

describe('isType', function() {
    describe('#isString()', function() {
        it('should return true', function() {
            assert.equal(true, isType.isString('string'));
        });
    });

    describe('#isArray()', function() {
        it('should return true', function() {
            assert.equal(true, isType.isArray([]));
        });
    });

    describe('#isObject()', function() {
        it('should return true', function() {
            assert.equal(true, isType.isObject({}));
        });
    });

    describe('#isFunction()', function() {
        it('should return true', function() {
            assert.equal(true, isType.isFunction(function() {}));
        });
    });
});