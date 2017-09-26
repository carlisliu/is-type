is-type
=========

Check javascript data type.

Installation
============

```bash
$ npm install js-is-type
```

Example
=======

Example:
```js
var typeUtil = require('js-is-type')
typeUtil.isString('string');
typeUtil.isArray([]);
typeUtil.isBoolean(true);
typeUtil.isFunction(function(){});
typeUtil.isObject({});
typeUtil.isNull(null);
typeUtil.isUndefined(undefined);
```

License
=======
MIT
