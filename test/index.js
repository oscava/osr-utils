var _ = require("../");

require("should");

var fn = function(){}

var fullarray = [1,2,3,4,5,6];

var emptyarray = [];

var string = 'Hello';

var fullObj = { a: 'b' };

var emptyObj = {};

describe("Types-isString",function(){
    
    it("isString(string) should be true",function(){
        _.isString(string).should.eql(true);
    });
    it("isString(fn) should be false",function(){
        _.isString(fn).should.eql(false);
    });
    it("isString(0) should be false",function(){
        _.isString(0).should.eql(false);
    });
    it("isString(1) should be false",function(){
        _.isString(1).should.eql(false);
    });
    it("isString(fullarray) should be false",function(){
        _.isString(fullarray).should.eql(false);
    });
    it("isString(emptyarray) should be false",function(){
        _.isString(emptyarray).should.eql(false);
    });
    it("isString(fullObj) should be false",function(){
        _.isString(fullObj).should.eql(false);
    });
    it("isString(emptyObj) should be false",function(){
        _.isString(emptyObj).should.eql(false);
    });
    it("isString(false) should be false",function(){
        _.isString(false).should.eql(false);
    });
    it("isString(true) should be false",function(){
        _.isString(true).should.eql(false);
    });
    it("isString(null) should be false",function(){
        _.isString(null).should.eql(false);
    });
    it("isString(undefined) should be false",function(){
        _.isString(undefined).should.eql(false);
    });
});

describe("Types-isFunction",function(){
    
    it("isFunction(string) should be true",function(){
        _.isFunction(string).should.eql(false);
    });
    it("isFunction(fn) should be true",function(){
        _.isFunction(fn).should.eql(true);
    });
    it("isFunction(0) should be false",function(){
        _.isFunction(0).should.eql(false);
    });
    it("isFunction(1) should be false",function(){
        _.isFunction(1).should.eql(false);
    });
    it("isFunction(fullarray) should be false",function(){
        _.isFunction(fullarray).should.eql(false);
    });
    it("isFunction(emptyarray) should be false",function(){
        _.isFunction(emptyarray).should.eql(false);
    });
    it("isFunction(fullObj) should be false",function(){
        _.isFunction(fullObj).should.eql(false);
    });
    it("isFunction(emptyObj) should be false",function(){
        _.isFunction(emptyObj).should.eql(false);
    });
    it("isFunction(false) should be false",function(){
        _.isFunction(false).should.eql(false);
    });
    it("isFunction(true) should be false",function(){
        _.isFunction(true).should.eql(false);
    });
    it("isFunction(null) should be false",function(){
        _.isFunction(null).should.eql(false);
    });
    it("isFunction(undefined) should be false",function(){
        _.isFunction(undefined).should.eql(false);
    });
});

describe("Types-isNumber",function(){
    
    it("isNumber(string) should be false",function(){
        _.isNumber(string).should.eql(false);
    });
    it("isNumber(fn) should be false",function(){
        _.isNumber(fn).should.eql(false);
    });
    it("isNumber(0) should be true",function(){
        _.isNumber(0).should.eql(true);
    });
    it("isNumber(1) should be true",function(){
        _.isNumber(1).should.eql(true);
    });
    it("isNumber(fullarray) should be false",function(){
        _.isNumber(fullarray).should.eql(false);
    });
    it("isNumber(emptyarray) should be false",function(){
        _.isNumber(emptyarray).should.eql(false);
    });
    it("isNumber(fullObj) should be false",function(){
        _.isNumber(fullObj).should.eql(false);
    });
    it("isNumber(emptyObj) should be false",function(){
        _.isNumber(emptyObj).should.eql(false);
    });
    it("isNumber(false) should be false",function(){
        _.isNumber(false).should.eql(false);
    });
    it("isNumber(true) should be false",function(){
        _.isNumber(true).should.eql(false);
    });
    it("isNumber(null) should be false",function(){
        _.isNumber(null).should.eql(false);
    });
    it("isNumber(undefined) should be false",function(){
        _.isNumber(undefined).should.eql(false);
    });
});

describe("Types-isBoolean",function(){
    
    it("isBoolean(string) should be false",function(){
        _.isBoolean(string).should.eql(false);
    });
    it("isBoolean(fn) should be false",function(){
        _.isBoolean(fn).should.eql(false);
    });
    it("isBoolean(0) should be false",function(){
        _.isBoolean(0).should.eql(false);
    });
    it("isBoolean(1) should be false",function(){
        _.isBoolean(1).should.eql(false);
    });
    it("isBoolean(fullarray) should be false",function(){
        _.isBoolean(fullarray).should.eql(false);
    });
    it("isBoolean(emptyarray) should be false",function(){
        _.isBoolean(emptyarray).should.eql(false);
    });
    it("isBoolean(fullObj) should be false",function(){
        _.isBoolean(fullObj).should.eql(false);
    });
    it("isBoolean(emptyObj) should be false",function(){
        _.isBoolean(emptyObj).should.eql(false);
    });
    it("isBoolean(false) should be true",function(){
        _.isBoolean(false).should.eql(true);
    });
    it("isBoolean(true) should be true",function(){
        _.isBoolean(true).should.eql(true);
    });
    it("isBoolean(null) should be false",function(){
        _.isBoolean(null).should.eql(false);
    });
    it("isBoolean(undefined) should be false",function(){
        _.isBoolean(undefined).should.eql(false);
    });
});

describe("Types-isArray",function(){
    
    it("isArray(string) should be false",function(){
        _.isArray(string).should.eql(false);
    });
    it("isArray(fn) should be false",function(){
        _.isArray(fn).should.eql(false);
    });
    it("isArray(0) should be false",function(){
        _.isArray(0).should.eql(false);
    });
    it("isArray(1) should be false",function(){
        _.isArray(1).should.eql(false);
    });
    it("isArray(fullarray) should be true",function(){
        _.isArray(fullarray).should.eql(true);
    });
    it("isArray(emptyarray) should be true",function(){
        _.isArray(emptyarray).should.eql(true);
    });
    it("isArray(fullObj) should be false",function(){
        _.isArray(fullObj).should.eql(false);
    });
    it("isArray(emptyObj) should be false",function(){
        _.isArray(emptyObj).should.eql(false);
    });
    it("isArray(false) should be false",function(){
        _.isArray(false).should.eql(false);
    });
    it("isArray(true) should be false",function(){
        _.isArray(true).should.eql(false);
    });
    it("isArray(null) should be false",function(){
        _.isArray(null).should.eql(false);
    });
    it("isArray(undefined) should be false",function(){
        _.isArray(undefined).should.eql(false);
    });
});

describe("Types-isNull",function(){
    
    it("isNull(string) should be false",function(){
        _.isNull(string).should.eql(false);
    });
    it("isNull(fn) should be false",function(){
        _.isNull(fn).should.eql(false);
    });
    it("isNull(0) should be false",function(){
        _.isNull(0).should.eql(false);
    });
    it("isNull(1) should be false",function(){
        _.isNull(1).should.eql(false);
    });
    it("isNull(fullarray) should be false",function(){
        _.isNull(fullarray).should.eql(false);
    });
    it("isNull(emptyarray) should be false",function(){
        _.isNull(emptyarray).should.eql(false);
    });
    it("isNull(fullObj) should be false",function(){
        _.isNull(fullObj).should.eql(false);
    });
    it("isNull(emptyObj) should be false",function(){
        _.isNull(emptyObj).should.eql(false);
    });
    it("isNull(false) should be false",function(){
        _.isNull(false).should.eql(false);
    });
    it("isNull(true) should be false",function(){
        _.isNull(true).should.eql(false);
    });
    it("isNull(null) should be true",function(){
        _.isNull(null).should.eql(true);
    });
    it("isNull(undefined) should be false",function(){
        _.isNull(undefined).should.eql(false);
    });
});

describe("Types-isUndefined",function(){
    
    it("isUndefined(string) should be false",function(){
        _.isUndefined(string).should.eql(false);
    });
    it("isUndefined(fn) should be false",function(){
        _.isUndefined(fn).should.eql(false);
    });
    it("isUndefined(0) should be false",function(){
        _.isUndefined(0).should.eql(false);
    });
    it("isUndefined(1) should be false",function(){
        _.isUndefined(1).should.eql(false);
    });
    it("isUndefined(fullarray) should be false",function(){
        _.isUndefined(fullarray).should.eql(false);
    });
    it("isUndefined(emptyarray) should be false",function(){
        _.isUndefined(emptyarray).should.eql(false);
    });
    it("isUndefined(fullObj) should be false",function(){
        _.isUndefined(fullObj).should.eql(false);
    });
    it("isUndefined(emptyObj) should be false",function(){
        _.isUndefined(emptyObj).should.eql(false);
    });
    it("isUndefined(false) should be false",function(){
        _.isUndefined(false).should.eql(false);
    });
    it("isUndefined(true) should be false",function(){
        _.isUndefined(true).should.eql(false);
    });
    it("isUndefined(null) should be false",function(){
        _.isUndefined(null).should.eql(false);
    });
    it("isUndefined(undefined) should be true",function(){
        _.isUndefined(undefined).should.eql(true);
    });
});

describe("Types-isEmpty",function(){
    
    it("isEmpty(string) should be false",function(){
        _.isEmpty(string).should.eql(false);
    });
    it("isEmpty(fn) should be false",function(){
        _.isEmpty(fn).should.eql(false);
    });
    it("isEmpty(0) should be false",function(){
        _.isEmpty(0).should.eql(false);
    });
    it("isEmpty(1) should be false",function(){
        _.isEmpty(1).should.eql(false);
    });
    it("isEmpty(fullarray) should be false",function(){
        _.isEmpty(fullarray).should.eql(false);
    });
    it("isEmpty(emptyarray) should be true",function(){
        _.isEmpty(emptyarray).should.eql(true);
    });
    it("isEmpty(fullObj) should be false",function(){
        _.isEmpty(fullObj).should.eql(false);
    });
    it("isEmpty(emptyObj) should be true",function(){
        _.isEmpty(emptyObj).should.eql(true);
    });
    it("isEmpty(false) should be false",function(){
        _.isEmpty(false).should.eql(false);
    });
    it("isEmpty(true) should be false",function(){
        _.isEmpty(true).should.eql(false);
    });
    it("isEmpty(null) should be true",function(){
        _.isEmpty(null).should.eql(true);
    });
    it("isEmpty(undefined) should be true",function(){
        _.isEmpty(undefined).should.eql(true);
    });
});

describe("Types-isObject",function(){
    
    it("isObject(string) should be false",function(){
        _.isObject(string).should.eql(false);
    });
    it("isObject(fn) should be false",function(){
        _.isObject(fn).should.eql(false);
    });
    it("isObject(0) should be false",function(){
        _.isObject(0).should.eql(false);
    });
    it("isObject(1) should be false",function(){
        _.isObject(1).should.eql(false);
    });
    it("isObject(fullarray) should be false",function(){
        _.isObject(fullarray).should.eql(false);
    });
    it("isObject(emptyarray) should be false",function(){
        _.isObject(emptyarray).should.eql(false);
    });
    it("isObject(fullObj) should be true",function(){
        _.isObject(fullObj).should.eql(true);
    });
    it("isObject(emptyObj) should be true",function(){
        _.isObject(emptyObj).should.eql(true);
    });
    it("isObject(false) should be false",function(){
        _.isObject(false).should.eql(false);
    });
    it("isObject(true) should be false",function(){
        _.isObject(true).should.eql(false);
    });
    it("isObject(null) should be false",function(){
        _.isObject(null).should.eql(false);
    });
    it("isObject(undefined) should be false",function(){
        _.isObject(undefined).should.eql(false);
    });
});