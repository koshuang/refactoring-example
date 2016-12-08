var moment = require('moment');

function formatDate(input, type) {
  var mapping = getDateFomatMapping();
  var keys = Object.keys(mapping);

  if (keys.indexOf(type) > -1) {
    var dateFormat = mapping[type].dateFormat;
    return formatMomentDate(input, dateFormat);
  }

  switch (type) {
    case 'referenceTime':
      return moment(input).calendar();
    case 'durationSec':
      return moment.duration(input, 'seconds').humanize();
    default:
      return input;
  }
}

function formatMomentDate(input, dateFormat) {
  return moment(input).format(dateFormat);
}

function getDateFomatMapping() {
  var obj = {
    'short-1': { dateFormat: 'MM/DD/YYYY' },
    'short-2': { dateFormat: 'MM/DD/YY' },
    'short-3': { dateFormat: 'MMMM DD, YYYY' },
    'short-4': { dateFormat: 'MMM. Do YYYY' },
    'short-day': { dateFormat: 'dddd' },
    'long-1': { dateFormat: 'dddd, MMM. Do YYYY, h:mm a' },
    'long-2': { dateFormat: 'MM/DD/YY, h:mm a' },
    'long-3': { dateFormat: 'MMMM DD YYYY,  h:mm a' },
    'long-4': { dateFormat: 'MM/DD/YYYY,  hh:mm' },
  };

  return obj;
}

exports.formatDate = formatDate;
