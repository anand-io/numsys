numsys = {}
function Number(value, type){
	var _me = this;
	_me.type = type || "decimal";
	_me.value = parseInt(value, _me.SystemMap[_me.type]) || 0;
	_me.getValue = function(){
        return _me.value.toString(_me.SystemMap[_me.type]);
	}
}

Number.prototype.SystemMap = {
   "binary": 2,
   "decimal": 10,
   "octal" : 8,
   "hex"   : 16
 }

Number.prototype.toBinary= function(){
    
   var value = this.value.toString(this.SystemMap["binary"]);
   return new Number(value, "binary");
}

Number.prototype.toOctal = function(){
   var value = this.value.toString(this.SystemMap["octal"]);
   return new Number(value, "octal");
}

Number.prototype.toHex = function(){
  var value = this.value.toString(this.SystemMap["hex"]);
   return new Number(value, "hex");
}

Number.prototype.toDecimal = function(){
  var value = this.value.toString(this.SystemMap["decimal"]);
  return new Number(value);
}

numsys.Number = Number;


module.exports = numsys;