// function f() {
//   return [1, 2];
// }

// let a, b;
// [a, b] = f();
// console.log(a);
// console.log(b);

// function f(){
//     return[1,2,3]
// }
// const [a, , b] = f()
// console.log(a)
// console.log(b)

// assinging the rest of an array to a variable

const [a, ...b] = ['one', 'two', 'three'];
console.log(b);
console.log(a);

//obj destructuing

const colors = ['red', 'blue', 'pink', 'yellow', 'orange'];
const [color1, color2, color3] = colors;

console.log(color1, color2, color3);




