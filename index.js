var isType = exports.isType = function isType(type) {
    return function(arg) {
        if (type === 'Array' && Array.isArray) {
            return Array.isArray(arg);
        }
        return Object.prototype.toString.call(arg) === "[object " + type + "]";
    }
};

exports.isString = isType('String');
exports.isArray = isType('Array');
exports.isFunction = isType('Function');
exports.isObject = isType('Object');