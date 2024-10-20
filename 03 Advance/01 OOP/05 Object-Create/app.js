// The Object.create() method creates a new object, using an existing onjects as the prototype of the creaated objects

let person = {
  greet: function () {
    console.log(`hello my name is ${this.firstName} ${this.lastName}`);
  },
};

const shankar = Object.create(person);
shankar.firstName = 'Shankar';
shankar.lastName = 'Web-dev';
shankar.greet();

let john = Object.create(person, {
  firstName: { value: 'john' },
  lastName: { value: 'deo' },
});

john.greet();
