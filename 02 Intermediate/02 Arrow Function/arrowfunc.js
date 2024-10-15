// Arrow function is also known as fat arrow function are a cocise and shorter way to define fucntions in Js. they were iontroduces in ECMASCRIPT 6(Es6) and provide a more compact syntax compared to traditional function expressions

// function greet (username ) {
//     return `Hello ${username} `
// }
// console.log(greet("shankar"))

// Arrow function
const greet = (username) => `Hello ${username}`;

console.log(greet('shankar'));

// function double(number) {
//   return number * 2;
// }
// console.log(double(10));

const double = (n) => n * 2;
console.log(double(100));

//Refactor this code to ES^ arrow functios,
setTimeout(() => {
  console.log('hello');
  setTimeout(() => {
    console.log('hey');
    setTimeout(() => {
      console.log('namste');
      setTimeout(() => {
        console.log('hi');
        setTimeout(() => {
          console.log('Bonjour');
        }, 2000);
      }, 2000);
    }, 200);
  }, 2000);
}, 2000);
