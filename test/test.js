var num = require('../src/numsys.js');

exports.toBinaryTest = function(beforeExit, assert){
   
   /*
     Test whether a given decimal number is converted to
     proper binary number or not.
   */
   var a = new num.Number(2);
   var b = a.toBinary();
   assert.ok(b.getValue() === "10");
}

exports.toOctalTest = function(beforeExit, assert){

  var a = new num.Number(9);
  var b = a.toOctal();
  assert.ok(b.getValue() == "11");
}

exports.toHexTest = function(beforeExit, assert){
	var a = new num.Number(15);
	var b = a.toHex();
	assert.ok(b.getValue() == "F")
}