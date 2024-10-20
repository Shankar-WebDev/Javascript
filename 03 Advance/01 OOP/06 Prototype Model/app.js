//Every javascript object has a anonymous property called prototype
//Remeber functions & array are also a object
// that prototype will be the parent oc that object, proti=otype property is object by itself, which have some special peroperties & methods
//[prototype]

//we can check the prototype of somthing in 3 ways:
//--> obj.__proto__
//--> obj.constructor.prototype
//--> Object.getPrototypeOf(a)

const obj = {};
console.log(obj);
console.log(obj.__proto__.__proto__);
console.log(Object.getPrototypeOf(obj));

const arr = new Array();
console.log(arr);

function Person(firstName, lastName, pl) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.pl=pl;
}
const man = new Person('shankr', 19, "Javascript");
console.log(man)