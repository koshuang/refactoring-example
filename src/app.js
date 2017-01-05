var express = require('express');
var app = express();
var dateController = require('./controllers/dateController');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use('/api/date', dateController);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
