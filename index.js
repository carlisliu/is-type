function isType(type) {
    return function(arg) {
        if (type === 'Array' && Array.isArray) {
            return Array.isArray(arg);
        }
        return Object.prototype.toString.call(arg) === "[object " + type + "]";
    }
}

export var isString = isType('String');
export var isArray = isType('Array');
export var isFunction = isType('Function');
export var isObject = isType('Object');