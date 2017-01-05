const moment = require('moment');

function formatDate(input, type) {
  const mapping = getDateFomatMapping();
  const typeNotFound = Object.keys(mapping).indexOf(type) === -1;

  if (typeNotFound) {
    throw new Error(`Unknown format type: ${type}`);
  }

  const obj = mapping[type];
  const dateFormat = obj.dateFormat;
  const action = obj.action;

  return action(input, dateFormat);
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

module.exports = formatDate;
