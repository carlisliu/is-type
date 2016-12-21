function isType(type) {
    return function(arg) {
        if (type === 'Array' && Array.isArray) {
            return Array.isArray;
        }
        return Object.prototype.toString.call(arg) === "[object " + type + "]";
    }
}

export var isString = isType('String');
export var isArray = isType('Array');
export var isFunction = isType('Function');
export var isObject = isType('Object');
export var isBoolean = isType('Boolean');
export var isUndefined = isType('Undefined');
export var isNull = isType('Null');
