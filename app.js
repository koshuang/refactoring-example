var format = 'short-1';
var input = '2016/01/02 11:33:20';
var result;

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

console.log(result);
