// The "for ... of " loop in js is modern iteration statement introduced in ECMAScript 6(ES6) that provides a concise and easy way to loop over elements in iterable objects like arrays, strings, maps, sets and more it allows you to iterate directly over the values of the element, rather than dealing eith their indices or keys, which makes the code more readable and less error-prone.

//for(variable of iterable) {.........}

let peoples = ['huxn', 'alex', 'john', 'bard'];

for (let people of peoples) {
  console.log(people);
}

const text = 'hello';

for (const char of text) {
  console.log(char);
}

//--execrise

const array1 = ['a', 'b', 'c', 'd'];

for (const arr of array1) {
  console.log(arr);
}
