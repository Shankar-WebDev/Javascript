// // const student = { name: 'shankar', position: 'First', rollNo: 27 };
// // const { name, position, rollNo } = student;
// // console.log(name);
// // console.log(position);
// // console.log(rollNo);

// // // exercise

const person = {
  name: 'John doe',
  age: 30,
  gender: 'male',
  country: 'USA',
};

function printPersonInfo({ name, age, country }) {
  console.log(`Name :${name}`);
  console.log(`Age: ${age}`);
  console.log(`COuntryL ${country}`);
}
printPersonInfo(person);

// const { name, age, country } = person;

// console.log(name);
// console.log(age);
// console.log(country);

// const num = { x: 100, y: 200 };
// const { x: new1, y: new2 } = num;
// console.log(new1);
// console.log(new2);

//obj destructuring and rest operator

let { a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 };
console.log(a);
console.log(b);
console.log(rest);

let options = {
  title: 'My Menu',
  items: ['item1', 'item2'],
};

function showMenu({ title = 'Untitled', width: w = 100, hight: h = 200 }) {
  console.log(`${title} ${w} ${h}`);
  console.log(item1);
  console.log(item2);
}

console.log(options);
