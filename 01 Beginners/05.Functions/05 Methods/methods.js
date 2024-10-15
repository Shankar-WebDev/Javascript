function greet() {
  return `Hello, my name is ${person.name} & I am ${person.age} years old `;
}

const person = {
  name: 'shankar',
  age: 21,
  greet,
};

console.log(person.greet());

// method 2

const person2 = {
  name: 'shankar',
  age: 21,
  greet: function () {
    return `hello, my name is ${person2.name} & i am ${person.age} years old`;
  },
};
console.log(person2.greet());
