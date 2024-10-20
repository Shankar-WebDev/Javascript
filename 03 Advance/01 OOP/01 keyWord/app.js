// console.log(window);
// console.log(this);

// console.log(this === window); // true

// window.firstName = 'shanakr';
// this.lastName = 'WebDev';
// console.log(window);

/////------------------------

// function printThis() {
//   return this; // ture
// }

// const res = printThis();
// console.log(res);

// const obj = {
//   firstName: 'shankar',
//   lastName: 'WebDev',
//   fullName: () => {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// const res = obj.fullName();
// console.log(res);



//exercise

const person = {
    userName: "shankar",
    age: 19,
    greetRegular:function(){
        return `Hello, my name is ${this.userName} & I'm  ${this.age} Years old.`
    },
    greetArrow:() =>{
        return `Hello, my name is ${this.userName} & I'm  ${this.age} Years old.`
    }
}

console.log(person.greetRegular())
console.log(person.greetArrow())