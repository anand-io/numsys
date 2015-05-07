numsys = {}
function Number(value, type){
	var _me = this;
	_me.type = type || "decimal";
	_me.value = value || 0;

	_me.getValue = function(){
		if(_me.type == "decimal"){
			return _me.value;
		}
		return _me.value.reverse().join("")
	}
}

Number.prototype.toBinary= function(){
   var digits = [];
   var value  = this.value;

   while(value>0){
   	  digits.push(value % 2);
   	  value = Math.floor(value/2);  	  
   }

   return new Number(digits, "binary");
}

Number.prototype.toOctal = function(){
	   var digits = [];
       var value  = this.value;

      while(value>0){
   	  digits.push(value % 8);
   	  value = Math.floor(value/8);  	  
      }

      return new Number(digits, "octal");
}

Number.prototype.toHex = function(){
	var digits = [];
	var value = this.value;
	var map = {"10":"A", "11": "B", "12":"C", "13": "D", "14": "E", "15": "F"};
	while(value>0){
   	  var bit = value % 16;
   	  if(bit > 9){
   	  	digits.push(map[bit.toString()]);
   	  }
   	  else{
   	  	digits.push(bit);
   	  }
   	  value = Math.floor(value/16);  	  
      }
     return new Number(digits, "hex");
}

numsys.Number = Number;
module.exports = numsys;