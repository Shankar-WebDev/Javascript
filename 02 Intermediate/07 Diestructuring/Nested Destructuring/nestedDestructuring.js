// const songs = [
//   { name: 'Lucky You', singer: 'Joyuner', duration: 4.34 },
//   { name: 'Just like you', singer: 'NF', duration: 3.23 },
//   { name: 'Humble singer', singer: 'kendrich Lamar', duration: 2.33 },
//   { name: 'Old Towm Road', singer: 'Lil Nas X', duration: 1.43 },
//   { name: 'Old Town Road', singer: 'Central cee', duration: 5.23 },
// ];

// const [, , { singer: s }] = songs;
// console.log(s);

const data = {
  user: {
    id: 123,
    name: 'John Doe',
    age: 30,
    email: 'john.deo@example.com',
    address: {
      city: 'New York',
      country: 'USA',
    },
    hobbies: ['Reading', 'Painting', 'Cooking'],
    scores: {
      math: 95,
      science: 88,
      history: 75,
    },
  },

  products: [
    {
      id: 1,
      name: 'laptop',
      price: 1000,
    },
    {
      id: 2,
      name: 'Phone',
      price: 1000,
    },

    {
      id: 3,
      name: 'Tablet',
      price: 1000,
    },
  ],

  settings: {
    darkmode: true,
    Notification: {
      email: true,
      sms: false,
      push: true,
    },
    language: 'Engilish',
  },
};

const {
  user: {
    name,
    age,
    address: { city, country },
    hobbies,
    scores: { math, science, history },
  },
  products: [product1, product2, product3],
  settings: {
    darkmode,
    Notification: {
      email: emailNotification,
      sms: smsNotification,
      push: pushNotification,
    },
    language,
  },
} = data;

console.log(`Name:${name}`);
console.log(`Age:${age}`);
console.log(`Adress: ${city} ${country}`);
console.log(`Hobbies${hobbies.join(' ')}`);
console.log(`Math Score:${math}`);
console.log(`Science Score:${science}`);
console.log(`History:${history}`);
console.log(`Product 1:${product1.name}- ${product1.price}`);
console.log(`Product 2:${product2.name}- ${product2.price}`);
console.log(`Product 3:${product3.name}- ${product3.price}`);
console.log(`Dark Mode: ${darkmode}`);
console.log(`Email Notification: ${emailNotification}`);
console.log(`SMS Notification: ${smsNotification}`);
console.log(`Push Notification: ${pushNotification}`);
console.log(`Language: ${language}`);
