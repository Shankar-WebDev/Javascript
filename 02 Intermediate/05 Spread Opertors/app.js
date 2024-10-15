// spread operator is a new additon to the set of operators in Javascript ES6

// Its takes in an itrable (e.g an array) and expands it into individual; elements

// the spread operator is commonly used to make shallow copies of Js objects

// using this operators makes the code concise and enhance its readability

// Functions

function giveMe4(a, b, c, d) {
  console.log('a', a);
  console.log('b', b);
  console.log('c', c);
  console.log('d', d);
}

const colors = ['red', 'green', 'blue', 'pink'];

giveMe4(...colors);

//array
const strNums = ['one', 'two', 'three'];
const moreStrNums = ['four', 'five', 'six'];
const concat = [...strNums, ...moreStrNums];

console.log(concat);

let people = ['shankar', 'john', 'jordan'];
const allPeople = ['kumar', ...people];
console.log(allPeople);

//Obj

const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3 };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);



// let person = {
//     name: 'shankar',
//     age: 19,
//     gender:'male',
// }

// const clone = {...person,}
// console.log(clone)




//---- exerise



let arr = [1,2,3];
let arr2 = [4,5];
const totalArr = [...arr,...arr2]
console.log(totalArr)

const User = {
    name: 'Jen',
    age: 22
}

const clone = {...User
    
}
console.log(clone)