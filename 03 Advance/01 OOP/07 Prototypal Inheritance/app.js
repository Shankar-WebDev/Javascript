//Prototype inheritance is mechanism in Js , that allows objects to inherit properties and methods from the objects, It is fundamenta; concept in the language and is based on the prototype model, In prototypal insheritance, Objects can serve as prototypes for others objects, forming a hierarchical chain pf inheritance

//In javascript,every object has a internal property called[[Prototype]] (ofytten refferd to as __ Prtoto__), which points to tis prototype objects. when you acess a property or method on an object, and that property or method is not found in the on=bject iteself, Javascript looks for it in the object's prototype (and further up the prototype chain if needed)
//until it findes the property or reached the top of the prototupe chain which is usually the object. protype.

function Animal(name) {
  this.name = name;
}

Animal.prototype.sound = function () {
  return 'Animal Sound';
};

const animal = new Animal('Frag');
console.log(animal);

function Dog(name, breed) {
  Animal.call(this.name);
  this.breed = breed;
}

Dog.prototype.sound = function () {
  return 'Animal Sound';
};

//The Object.create() method createa new object using a existing objects as the prototype of the newly objects

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function () {
  return 'Wooof!';
};

const dog1 = new Dog('Buddy', 'Genus');

console.log(dog1);
console.log(dog1.sound());
console.log(dog1.bark());
