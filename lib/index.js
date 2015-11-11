var Class = require("osr-class");
var pjson = require("../package.json");
var debug = require("debug")("osr-utils:main\t");
var Types = require("./types");
var Utils = Class.extends({
    $ : function(){
        this.version = pjson.version;
        this.name = pjson.name;
        this.author = pjson.author;
        debug("name\t\t:",this.name);
        debug("version\t:",this.version);
        debug("author\t\t:",this.author);
        this.types = new Types(this);
    }
    
});

module.exports = new Utils();