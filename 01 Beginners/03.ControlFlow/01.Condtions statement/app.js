// if == money

// -> by some stuff

// else ==== money

// -> bring some money dude

// if{condtion }{..}

// else if (ci=ondtion) {...}

// else {...}

let a = 100;
let b = 100;

if (a > b) {
  console.log(' a is greate then b');
} else if (a < b) {
  console.log('a is less then b');
} else {
  console.log(' a is equal to b');
}

let time = 82;
let greetings;

if (time < 10) {
  greetings = 'Goood Moring';
  console.log(greetings);
} else if (time < 20) {
  greetings = 'good day';
  console.log(greetings);
} else {
  greetings = ' good evening';
  console.log(greetings);
}

// exeercise

let password = 0;

if (password == 8) {
  console.log('Welcome');
} else if (password <= 8) {
  console.log(' Password is to short');
} else if (password >= 8) {
  console.log('Too long Password' & ' Password should be 8 characters ');
} else {
  console.log(' please provide a password');
}
