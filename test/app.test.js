var assert = require('assert');
var app = require('../app.js');
var records = require('./data/dateFormats/dateFormatMappings.js');

describe('app.js', function() {
  describe('#formatDate()', function() {
    var formatDate = app.formatDate;
    var input = '2016/01/02 11:33:20';

    records.forEach(function(record) { // => destrcuting
      it('should return ' + record.expectation + ' when the input is ' + record.type, function() {
        var result = formatDate(input, record.type);

        assert.equal(record.expectation, result);
      });
    });

    it('should throw an error when format type is unknow', function() {
      assert.throws(function() {
        formatDate(input, 'unknown');
      }, Error);
    });
  });
});
