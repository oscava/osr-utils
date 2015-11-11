var Class = require('osr-class');

var Types = Class.extends({
    
    $ : function( main ){
        this.main = main;
        this.main.isFunction = this.isFunction.bind(this);
        this.main.isNumber = this.isNumber.bind(this);
        this.main.isArray = this.isArray.bind(this);
        this.main.isNull = this.isNull.bind(this);
        this.main.isUndefined = this.isUndefined.bind(this);
        this.main.isString = this.isString.bind(this);
        this.main.isBoolean = this.isBoolean.bind(this);
        this.main.isEmpty = this.isEmpty.bind(this);
        this.main.isObject = this.isObject.bind(this);
    },
    
    isType: function( type ){
        return function( obj ){
            return type === typeof(obj);
        }
    },
    isEqual: function( eql ){
        return function( obj ){
            return eql === obj;
        }
    },
    isInstance: function( instance ){
        return function( obj ){
            return obj instanceof instance;
        }
    },
    isFunction: function(){
        return this.isType('function').apply(this,arguments);
    },
    isString: function(){
        return this.isType('string').apply(this,arguments);
    },
    isNumber: function(){
        return this.isType('number').apply(this,arguments);
    },
    isBoolean: function(){
        return this.isType('boolean').apply(this,arguments);
    },
    isArray: function(){
        return this.isInstance(Array).apply(this,arguments);
    },
    isNull: function(){
        return this.isEqual(null).apply(this,arguments);
    },
    isUndefined: function(){
        return this.isEqual(undefined).apply(this,arguments);
    },
    isObject: function( obj ){
        if(!obj)return false;
         return  "[object Object]" === obj.toString();
    },
    isEmpty: function( obj ){
        if(this.isArray(obj)){
            for(var i = 0; i< obj.length/2; i++){
                if(obj[i] || obj[obj.length-1-i]){
                    return false;
                };
            }
        }else if(this.isString(obj)){
            return !obj;
        }else if(this.isNumber(obj)){
            return false;
        }else if(this.isUndefined(obj)){
            return true;
        }else if(this.isObject(obj)){
            for(var key in obj){
                if(obj[key])return false;
            }
        }else if(this.isNull(obj)){
            return true;
        }else if(this.isBoolean(obj)){
            return false;
        }else{
            return !obj;
        }
        return true;
    }
});

module.exports = Types;