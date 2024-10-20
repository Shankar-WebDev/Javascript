// function name (parms){
//     return {}
// }

let shankar = {
  firstName: 'Shankar',
  lastName: 'WebDev',
  fullName: () => {
    console.log(
      `hello my name is ${this.firstName} ${this.lastName} & I Love Javascript`
    );
  },
};

// A Function is a type of function that is used to crate and  return objects.
// IT's a design pattern that provides an alternative way to create objects compared
// to using constructors and the new keyword.

function createPerson(firstName, lastName, pl) {
  return {
    firstName,
    lastName,
    pl,
    fullName: function () {
      console.log(
        `hello my name is ${this.firstName} ${this.lastName} & I Love ${this.pl}`
      );
    },
  };
}

const john = createPerson('john', 'Doe', 'python');
const man = createPerson('Shankar', 'Web-Dev', 'ruby');

man.fullName();

//------------exercise-------------------------

function vehicles(type, brand, model, year) {
  return {
    type,
    brand,
    model,
    year,
    vehicle: function () {
      console.log(
        `vehicle type is ${this.type} and brand  name is ${this.brand},it was a super ${this.model} and relesed in year of ${this.year}`
      );
    },
  };
}

const yamaha = vehicles('sports', 'yamaha', 'R15', '2024');

yamaha.vehicle();
