var assert = require('assert');
var app = require('../app.js');

var formatDate = app.formatDate;

describe('app.js', function() {
  describe('#formatDate()', function() {
    var records = [
      {
        format: 'short-1',
        expectation: '01/02/2016',
      },
      {
        format: 'short-2',
        expectation: '01/02/16',
      },
      {
        format: 'short-3',
        expectation: 'January 02, 2016',
      },
    ];

    records.forEach(function(record) { // => destrcuting
      it('should return ' + record.expectation + ' when the input is ' + record.format, function() {
        var input = '2016/01/02 11:33:20';
        var result = formatDate(record.format, input);

        assert.equal(record.expectation, result);
      });
    });
  });
});
