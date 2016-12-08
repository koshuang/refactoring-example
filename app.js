var moment = require('moment');

function formatDate(input, type) {
  var mapping = getDateFomatMapping();
  var keys = Object.keys(mapping);

  if (keys.indexOf(type) > -1) {
    var obj = mapping[type];
    var dateFormat = obj.dateFormat;
    var action = obj.action;
    return action(input, dateFormat);
  }

  return input;
}

function formatMomentDate(input, dateFormat) {
  return moment(input).format(dateFormat);
}

function formatMomentCalendar(input) {
  return moment(input).calendar();
}

function formatMomentDuration(input) {
  return moment.duration(input, 'seconds').humanize();
}

function getDateFomatMapping() {
  var obj = {
    'short-1':       { dateFormat: 'MM/DD/YYYY',                 action: formatMomentDate },
    'short-2':       { dateFormat: 'MM/DD/YY',                   action: formatMomentDate },
    'short-3':       { dateFormat: 'MMMM DD, YYYY',              action: formatMomentDate },
    'short-4':       { dateFormat: 'MMM. Do YYYY',               action: formatMomentDate },
    'short-day':     { dateFormat: 'dddd',                       action: formatMomentDate },
    'long-1':        { dateFormat: 'dddd, MMM. Do YYYY, h:mm a', action: formatMomentDate },
    'long-2':        { dateFormat: 'MM/DD/YY, h:mm a',           action: formatMomentDate },
    'long-3':        { dateFormat: 'MMMM DD YYYY,  h:mm a',      action: formatMomentDate },
    'long-4':        { dateFormat: 'MM/DD/YYYY,  hh:mm',         action: formatMomentDate },
    'referenceTime': { dateFormat: null,                         action: formatMomentCalendar },
    'durationSec':   { dateFormat: null,                         action: formatMomentDuration },
  };

  return obj;
}

exports.formatDate = formatDate;
