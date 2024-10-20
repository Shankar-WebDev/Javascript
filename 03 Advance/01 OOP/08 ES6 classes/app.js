// classes are one pf the feature introduces in the es6 version of Js

// A class is a blueprint for the Object. you can create an object  from the calss

//you can think of the class as sketch (prototype) of a house. It contains all the deatails about the floors doors windwos, wtc based on these description you buld the house

// since many house can be made from the same description,we can create many objects from a class

//class Declaration
class Person {
  constructor(firstName, LastName, age) {
    //Instance Members
    this.firstName = firstName;
    this.LastName = LastName;
    this.age = age;
    this.printUserInfo = function name() {
      return `Name ${this.firstName} ${this.LastName}, Age${this.age}`;
    };
  }

  // prototype Members
  greet() {
    return ` Hello ${this.firstName} ${this.LastName}`;
  }
}

//inharitance class

class Programmer extends Person {
  constructor(firstName, LastName, age, pl, experience) {
    super(firstName, LastName, age); // this Just calls the parent call constructor
    this.pl = pl;
    this.experience = experience;
  }
}

const shankar = new Person('shankar', 'WebDev', 19);
console.log(shankar.greet());

// ---------------------exercise

class Hero {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
  greet() {
    return `${this.name} says hello`;
  }
}

const hero1 = new Hero('vag', 1);
console.log(hero1);

class Mage extends Hero {
  constructor(name, level, spell) {
    super(name, level);
    this.spell = spell;
  }
}


const hero2 = new Mage("lejon", 2, "Magic Missle")
console.log(hero2)