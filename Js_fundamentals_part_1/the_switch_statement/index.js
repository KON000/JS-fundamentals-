const day = 'Monday';
switch (day) {
  case 'Monday': // day === 'Monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'Tuesday':
    console.log('Prepare theory videos');
    break;
  case 'Wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'Friday':
    console.log('Record videos');
  case 'Saturday':
  case 'Sunday':
    console.log('Enjoy the weekend :)');
    break;
  default:
    console.log('Not a valid day!');
}
