var format1 = 'short-1';
var format2 = 'short-2';
var input = '2016/01/02 11:33:20';

var result1 = formatDate(format1, input);
var result2 = formatDate(format2, input);

var expectation1 = '01/02/2016';
var expectation2 = '01/02/16';

testFormatDate(result1, expectation1);
testFormatDate(result2, expectation2);

function testFormatDate(result, expectation) {
  if (result === expectation) {
    console.log('Y');
  } else {
    console.log('N');
  }
}

function formatDate(format, input) {
  switch (format) {
    case 'short-1':
      result = moment(input).format('MM/DD/YYYY');
      break;
    case 'short-2':
      result = moment(input).format('MM/DD/YY');
      break;
    case 'short-3':
      result = moment(input).format('MMMM DD, YYYY');
      break;
    case 'short-4':
      result = moment(input).format('MMM. Do YYYY');
      break;
    case 'short-day':
      result = moment(input).format('dddd');
      break;
    case 'long-1':
      result = moment(input).format('dddd, MMM. Do YYYY, h:mm a');
      break;
    case 'long-2':
      result = moment(input).format('MM/DD/YY, h:mm a');
      break;
    case 'long-3':
      result = moment(input).format('MMMM DD YYYY,  h:mm a');
      break;
    case 'long-4':
      result = moment(input).format('MM/DD/YYYY,  hh:mm');
      break;
    case 'referenceTime':
      result = moment(input).calendar();
      break;
    case 'durationSec':
      result = moment.duration(input, 'seconds').humanize();
      break;
    default:
      break;
  }

  return result;
}
