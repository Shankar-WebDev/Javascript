//constructor fucntion in Javascript are regular functions used the new keywoed to create and initialalize objects with shared properties and methods.
//they act as blue prints for creating multiple instance of objects with the same structure and behavior.

function createPeople(firstName, lastName, pl) {
  this.firstName = firstName; // window
  this.lastName = lastName;
  this.pl = pl;

  //New Keyword
  this.info = function () {
    console.log(
      `Hello my name is ${this.firstName} ${this.lastName} & I love ${this.pl}`
    );
  };
}

const shankar = new createPeople('shankar', 'web-dev', 'js');
const john = new createPeople('john', 'web-dev', 'Go');
john.info();
shankar.info();

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  this.getInfo = function () {
    return `${this.title} by ${this.author} (${this.year})`;
  };
}

const book1 = new Book(
  ' The subtle art of the not giving a  sucks',
  'Mark',
  2020
);
const book2 = new Book('Atomics Habits', 'Mark', 2020);

const BookRes1 = book1.getInfo();
console.log(BookRes1);

//------------exercise--------------------

function person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;

  this.info1 = function () {
    return `${this.name} ${this.age} ${gender}`;
  };
}

// careate some instance

const person1 = new person('john', 22, 'male');
const person2 = new person('jenni', 22, 'female');

person1.info1();
person2.info1();

//--------------------exceris 2

function car(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;

  this.start = function () {
    return `starting the ${this.make} ${this.model}`;
  };
  this.stop = function () {
    return `stopping the ${this.year} ${this.color}`;
  };
}


const car1 = new car('Toyota', 'suppra mk4', 1995, 'red')
// const car2 = new car('Toyota', 'suppra mk4', 1995, 'red')
console.log(car1.start());