var assert = require('assert');
var app = require('../app.js');

var formatDate = app.formatDate;
var getRecords = app.getRecords;

describe('app.js', function() {
  describe('#formatDate()', function() {
    var records = getRecords();

    records.forEach(function(record) { // => destrcuting
      it('should return ' + record.expectation + ' when the input is ' + record.format, function() {
        var input = '2016/01/02 11:33:20';
        var result = formatDate(record.format, input);

        assert.equal(record.expectation, result);
      });
    });
  });
});
