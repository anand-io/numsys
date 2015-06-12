var num = require('../src/numsys.js');


exports.GeoMerticSeriesTest = function(beforeExit, assert){
   var series = new num.GeoMetricSeries();
   console.log(series.sum(1,2,3));
   assert.ok(series.sum(1,2,3)==7)
}

exports.GeoSeriesGenerationTest = function(beforeExit, assert){
  var series = new num.GeoMetricSeries();
  var gen = series.generate(1,2,4);
  assert.ok(gen.next() == 2);
  assert.ok(gen.prev() == 1);
  assert.ok(gen.next() == 4);
  assert.ok(gen.getValues()[0] == 8);
}

exports.GeoSeriesProductTest = function(beforeExit, assert){
  var series = new num.GeoMetricSeries();
  var value = series.product(1,2,3);
  console.log(value);
  assert.ok(value == 64);
}
