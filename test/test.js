var num = require('../src/numsys.js');

exports.toBinaryTest = function(beforeExit, assert){
   
   /*
     Test whether a given decimal number is converted to
     proper binary number or not.
   */
   var a = new num.Number(2);
   var b = a.toBinary();
   assert.ok(b.getValue() == "10");
}

exports.toOctalTest = function(beforeExit, assert){

  var a = new num.Number(9);
  var b = a.toOctal();
  assert.ok(b.getValue() == "11");
}

exports.toHexTest = function(beforeExit, assert){
	var a = new num.Number(15);
	var b = a.toHex();
	assert.ok(b.getValue() == "f")
}

exports.TestSeriesSum = function(beforeExit, assert){
  var a = new num.LinearSeries([1,2,3]);
  assert.ok(a.sum()=== 6);
}

exports.TestProduce = function(beforeExit, assert){
  var a = num.LinearSeries.prototype.produce(1, 2, 10);
  assert.ok(a.next() == 3);
  assert.ok(a.next() == 5);
}

exports.TestProduct = function(beforeExit, assert){
  var product = num.LinearSeries.prototype.findProduct(1,1,5);
  assert.ok(parseInt(product) == 120);
}