var input = '2016/01/02 11:33:20';

function formatDate(format, input) {
  var obj = getDateFomatMapping();
  var keys = Object.keys(obj);
  var ok = keys.indexOf(format) > -1;

  if (ok) {
    var dateFomat = obj[format];
    result = formatMomentDate(input, dateFomat);
  } else {
    switch (format) {
      case 'referenceTime':
        result = moment(input).calendar();
        break;
      case 'durationSec':
        result = moment.duration(input, 'seconds').humanize();
        break;
      default:
        break;
    }
  }

  return result;
}

function formatMomentDate(input, dateFomat) {
  return moment(input).format(dateFomat);
}

run(getRecords());

function run(records) {
  // records.forEach(function({ format, expectation }) { // => destrcuting
  records.forEach(function(record) { // => destrcuting
    var result = formatDate(record.format, input);
    assertEqual(result, record.expectation, result + ' should be equal to ' + record.expectation);
  });
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

function assertEqual(result, expectation, msg) {
  if (result === expectation) {
    console.log('Y');
  } else {
    console.error('N', msg);
  }
}
