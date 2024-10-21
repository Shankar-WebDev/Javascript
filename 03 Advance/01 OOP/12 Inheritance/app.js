// //Es5 code

// function Animal(name) {
//   this.name = name;
// }

// // method shared amound all ANimal instance

// Animal.prototype.makeSound = function () {
//   return 'Unknown sound';
// };

// //Sublcass Constractorr inheritacne from Animal

// function Dog(name) {
//   Animal.call(this, name);
// }

// //setup prototype chain for DOg to inherit from Animal

// Dog.prototype = Object.create(Animal.prototype);

// //Method specific to Dog

// Dog.prototype.makeSound = function () {
//   return 'wooF!';
// };

// //Creating Instance of  the class

// const genericAnimal = new Animal('Genri ANimal');
// console.log(genericAnimal.name);
// console.log(genericAnimal.makeSound());


//--------------------es6 classes


class Animal{
    constructor(name){
        this.name;

    }
    makeSound(){
        return "Unkown Sound"
    }
}


//Subclass inheriting from Animal

class Dog extends Animal {
    constructor(name){
        super(name)
    }


    makeSound(){
        return "Woof!"
    }
}

const genericAnimal = new Animal("genric animal")
console.log(genericAnimal.makeSound())


const dog = new Dog("buddy");
console.log(dog.makeSound())
console.log(dog)