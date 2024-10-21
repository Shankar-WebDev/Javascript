//Abstract class()

class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    throw new Error('make (makeSOund) must be implemted ');
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  makeSound() {
    return 'woff';
  }
}

// Concreate subclass

class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  makeSound() {
    return 'Meow!';
  }
}


const dog = new Dog("buddy")

console.log(dog.name)
console.log(dog.makeSound())



const cat = new Cat('whitee')
console.log(cat.name)
console.log(cat.makeSound())




//