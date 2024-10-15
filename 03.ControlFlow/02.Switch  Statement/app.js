// switch statement

// switch(expression){
//case x;
//print
//break;
//case y;
// print;
// break;
//}

let x = 4;
let text;

switch (x) {
  case 0:
    text = 'off';
    console.log(text);
    break;

  case 1:
    text = 'On';
    console.log(text);
    break;

  default:
    text = ' no value found';
    console.log(text);
}

//-----------------------------------

let day = 'wednesday';

switch (day) {
  case 'monday':
    console.log('Today is monday');
    break;

  case 'tuesday':
    console.log(' Today is tuesday');
    break;

  case 'wednesday':
    console.log('Today is Wednesday');
    break;

  case 'thursday':
    console.log('today is thursday');
    break;

  case 'friday':
    console.log('today is sunday');
    break;

  case 'saturday':
    console.log('today is saturday');
    break;

  case 'sunday':
    console.log('Tody is sunday');
    break;

  default:
    console.log('Dnt show know what day is today');
}

///-------------------------------------

let fruit = 'banana';

switch (fruit) {
  case 'banana':
    console.log('banana was good');
    break;

  case 'Orange ':
    console.log('I am not a fan of orange');
    break;

  case 'Apple ':
    console.log('  How i like them Apples');
    break;

  default:
    console.log('i have never of that fruit');
    break;
}
