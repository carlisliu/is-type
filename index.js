var isType = exports.isType = function isType(type) {
    return function(arg) {
        if (type === 'Array' && Array.isArray) {
            return Array.isArray(arg);
        }
        return Object.prototype.toString.call(arg) === "[object " + type + "]";
    }
};

'String Array Function Object Boolean Number Null Undefined'.split(/\s+/).forEach(function(type) {
    exports['is' + type] = isType(type);
});