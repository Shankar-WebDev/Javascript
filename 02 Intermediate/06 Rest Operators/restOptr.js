// The rest parameter syntax allows a function to accept an indefinite  number of arguments

// as an array , providing a way to represrnt variadic functions in js

//Rest Operators

function user(X, ...userData) {
  console.log(X);
  console.log(userData);
}

user('shankar', 19, ' Programming', 'football');

function person(firstName, lastName, ...hobbies) {
  console.log('firstName:', firstName);
  console.log('lastName', lastName);
  console.log('Hobbies', hobbies);
}

person('shankar', 19, 'programming ', 'football');

//--- exerise

function variadic(parms) {
  console.log(parms);
}

console.log('shankar', 'WebDev', 19, 20, ['one']);

//// 2 exercise

const foo = ['one', 'two', 'three'];

// const one = foo[0]
// console.log(one)

const [red, yellow, blue] = foo;

const [one, two, three] = foo;
console.log(yellow);
