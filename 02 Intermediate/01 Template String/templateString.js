// template strings, also know as template litrals are a feature in js that allows you to create strings with embedded expressions. they are denoted by bactricks   `` insted of single or double quotes. template strings provide a more flexible and concise way to construct strings, expecially when they involve variables or expressions.

const firstName = 'shankar';
const secondName = 'WebDev';

console.log(`My name is ${firstName} ${secondName}`);

function info() {
  return `My name is huxn webdev & I' am 19 years old`;
}

console.log(`${info()}`);

//----------------------------------------

const text = `The quick 
brown fox
jumps Over
the lazy dog`;

console.log(text);