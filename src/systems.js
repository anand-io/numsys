numsys = {}

function Number(value, type) {
    var _me = this;
    _me.type = type || "decimal";
    _me.value = parseInt(value, _me.SystemMap[_me.type]) || 0;
    _me.getValue = function() {
        return _me.value.toString(_me.SystemMap[_me.type]);
    }
}

Number.prototype.SystemMap = {
    "binary": 2,
    "decimal": 10,
    "octal": 8,
    "hex": 16
}

Number.prototype.toBinary = function() {

    var value = this.value.toString(this.SystemMap["binary"]);
    return new Number(value, "binary");
}

Number.prototype.toOctal = function() {
    var value = this.value.toString(this.SystemMap["octal"]);
    return new Number(value, "octal");
}

Number.prototype.toHex = function() {
    var value = this.value.toString(this.SystemMap["hex"]);
    return new Number(value, "hex");
}

Number.prototype.toDecimal = function() {
    var value = this.value.toString(this.SystemMap["decimal"]);
    return new Number(value);
}

numsys.Number = Number;



function Series(numlist) {
    function isString(e, i, a){
      return typeof(e) != "string";
    }
    var _me = this;
    if (numlist.hasOwnProperty('length')) {
         if(! numlist.every(isString))
            throw "String on sequence";
        _me.start = numlist[0];
        _me.end = numlist[numlist.length - 1];
        _me.length = numlist.length;
    } else {
        numlist = [numlist];
        _me.start = numlist[0];
        _me.end = numlist[0];
        _me.length = numlist.length;
    }
}

Series.prototype.sum = function() {
    var _me = this;
    return (function() {
        return (_me.length * (_me.start + _me.end)) / 2;
    })();
}

Series.prototype.findSum = function(firstnumber, difference, length) {

    //The aryabatta function
    return (function() {
        var n = length;
        var a1 = firstnumber;
        var d = difference;
        dipole_series = 2 * a1 + (n - 1) * d;
        sum_of_series = dipole_series / 2;
        return sum_of_series;
    })();
}

Series.prototype.findProduct = function(firstnumber, difference, length){
   
   // http://en.wikipedia.org/wiki/Lanczos_approximation
   return (function(){
      var f = require('gamma');
      var n = length;
      var d = difference;
      var a1 = firstnumber;
      var kernal = Math.pow(d, n);
      var fraction = a1/d;
      var result = kernal * (f(fraction+ n)/f(fraction));
      return result;
   })();
}

Series.prototype.produce = function(firstnumber, difference, length){
   //for inheritance.
}

numsys.Series = Series;




module.exports = numsys;