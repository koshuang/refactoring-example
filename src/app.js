var express = require('express');
var app = express();
var formatDate = require('./formatDate');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/api/format-date', function (req, res) {
  var input = '2016/01/02 11:33:20';
  var type = 'short-1';
  var result = formatDate(input, type);

  res.json({ result: result });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
