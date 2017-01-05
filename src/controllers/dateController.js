var express = require('express');
var router = express.Router();
var formatDate = require('../helpers/formatDate');

// GET /api/date/format-date
router.get('/format-date', function (req, res) {
  var input = '2016/01/02 11:33:20';
  var type = 'short-1';
  var result = formatDate(input, type);

  res.json({ result: result });
});

module.exports = router;
