// Enhanced onbjects litreles, introduced in ECMAScript 6 (Es6), are a set echancements to the syntax for defining objects in javascript .These enhancement make it more conmvenient and concise to define object properties and methods

function user(name, age, work) {
  return {
    name,
    age,
    work,
    intro: () => {
      console.log(`My name is ${name} & I'm ${age} years old & I'm a ${work}`);
    },
  };
}

const Shankar = user('shankar', 19, 'programmer');

console.log(Shankar.intro());

//-----------------------------------------
// exersiee

const a = 1;
const b = 2;
const c = 3;

const obj = { a, b, c };

console.log(obj);

const lib = {
  sum: (a, b) => a + b,
  mult: (a, b) => a * b,
};

console.log(lib.sum(2, 3)); //5
console.log(lib.mult(2, 3)); //6
