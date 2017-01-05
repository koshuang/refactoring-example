var express = require('express');
var app = express();
var formatDate = require('./formatDate');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/format-date', function (req, res) {
  var input = '2016/01/02 11:33:20';
  var type = 'short-1';
  var result = formatDate(input, type);

  res.send(result);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
