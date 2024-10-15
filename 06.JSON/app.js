//Json

const person = {
  name: 'Shankar',
  age: 20,
  email: 'shankar@gmail.com',
  isSubscribed: true,
  hobbies: ['Reading', 'Running', 'Cooking'],
  address: {
    city: 'New York',
    idk: true,
  },
};

// Json.stringify()
const jsonStringify = JSON.stringify(person);
const parseObject = JSON.parse(jsonStringify)
console.log(parseObject);
