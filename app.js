var moment = require('moment');

function formatDate(format, input) {
  var obj = getDateFomatMapping();
  var keys = Object.keys(obj);
  var ok = keys.indexOf(format) > -1;

  if (ok) {
    var dateFomat = obj[format];
    return formatMomentDate(input, dateFomat);
  }

  switch (format) {
    case 'referenceTime':
      return moment(input).calendar();
    case 'durationSec':
      return moment.duration(input, 'seconds').humanize();
    default:
      return input;
  }
}

function formatMomentDate(input, dateFomat) {
  return moment(input).format(dateFomat);
}

function getRecords() {
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

  return records;
}

function getDateFomatMapping() {
  var obj = {
    'short-1': 'MM/DD/YYYY',
    'short-2': 'MM/DD/YY',
    'short-3': 'MMMM DD, YYYY',
    'short-4': 'MMM. Do YYYY',
    'short-day': 'dddd',
    'long-1': 'dddd, MMM. Do YYYY, h:mm a',
    'long-2': 'MM/DD/YY, h:mm a',
    'long-3': 'MMMM DD YYYY,  h:mm a',
    'long-4': 'MM/DD/YYYY,  hh:mm',
  };

  return obj;
}

exports.formatDate = formatDate;
exports.getRecords = getRecords;
